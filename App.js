import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import { theme } from "./src/infrastructure/theme"
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";


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
  const [isAuthenticated, setIsAuthenticated] = useState(false)

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
        <AuthenticationContextProvider>
                <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
}
