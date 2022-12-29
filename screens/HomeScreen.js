import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <View style={[tw`pt-10 pl-5 bg-white`, { flex: 1 }]}>
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
        <NavOptions />
      </View>
    </View>
  );
};

export default HomeScreen;
