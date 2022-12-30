import React from "react";
import { View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={[tw`pt-10 px-5 bg-white`, { flex: 1 }]}>
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          nearbyPlacesAPI={GOOGLE_MAPS_APIKEY}
          debouce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          minLength={2}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
        />

        <NavOptions />
      </View>
    </View>
  );
};

export default HomeScreen;
