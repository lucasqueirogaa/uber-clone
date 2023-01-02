import { StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "tailwind-react-native-classnames";
import axios from "axios";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;

    setTimeout(() => {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 120, right: 50, bottom: 50, left: 50 },
      });
    }, 300);
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const configAxios = {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/distancematrix/json?units=metrical&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`,
      headers: {},
    };

    axios(configAxios)
      .then(function (response) {
        const dataStr = JSON.stringify(response.data.rows[0].elements[0]);
        const dataObj = JSON.parse(dataStr);
        console.log(dataObj);
        dispatch(setTravelTimeInformation(dataObj));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <View style={tw`flex-1`}>
      <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
          />
        )}

        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
          />
        )}

        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;
