import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";

import tw from "tailwind-react-native-classnames";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={[tw`bg-white`, { flex: 1 }]}>
      <View style={tw`h-1/2`}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
            style={[
              tw`bg-gray-100 absolute top-16 left-8 z-50 p-2 rounded-full shadow-lg`,
            ]}
          >
            <Icon name="menu" />
          </TouchableOpacity>
        </View>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
