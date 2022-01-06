import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from './restaurants.navigator'
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurant.context";
import { SettingsNavigator } from "./settings.navigation";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: 'deepskyblue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
    };
};

export const AppNavigator = () => (
    <FavoritesContextProvider>
        <LocationContextProvider>
            <RestaurantsContextProvider>
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={createScreenOptions}
                    >
                        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                        <Tab.Screen name="Map" component={MapScreen} />
                        <Tab.Screen name="Settings" component={SettingsNavigator} />
                    </Tab.Navigator>
                </NavigationContainer>
            </RestaurantsContextProvider>
        </LocationContextProvider>
    </FavoritesContextProvider>
);