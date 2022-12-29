import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
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
          nearbyPlacesAPI={GOOGLE_MAPS_APIKEY}
          placeholder="Where From?"
          debouce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "pt-BR",
          }}
          minLength={2}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          onPress={(data, details = null) => {
            console.log({ data });
            console.log({ details });
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />

        <NavOptions />
      </View>
    </View>
  );
};

export default HomeScreen;
