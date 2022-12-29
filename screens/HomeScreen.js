import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <View style={tw`mt-5 p-5 bg-white`}>
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
      </View>
    </View>
  );
};

export default HomeScreen;
