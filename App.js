import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native"
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"

import { theme } from "./src/infrastructure/theme"
import { RestaurantsScreen } from "./src/features/restaurants/screens/restuarants.screen";
import {
  RestaurantsContextProvider,
  RestaurantsContext,
} from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const Settings = () => {
  return (
    <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      Settings!!
    </Text>
  )
};
const Map = () => {
  return (
    <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      Map!!
    </Text>
  )
};

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => {
      return <Ionicons name={iconName} size={size} color={color} />
    },
  }
};

export default function App() {
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!poppinsLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsScreen}
                  options={{ headerShown: false }}
                />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}
