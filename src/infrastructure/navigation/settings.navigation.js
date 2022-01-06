import React from 'react'
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack"
import { SettingsScreen} from '../../features/settings/screens/settings.screen'
import { FavoritesScreen } from '../../features/settings/screens/favorites.screen'


const SettingsStack = createStackNavigator()

export const SettingsNavigator = ({route, navigation}) => {
    return (
        <SettingsStack.Navigator
        screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: false, }} 
        >
             <SettingsStack.Screen name = "SettingsHome" component={SettingsScreen} />
            <SettingsStack.Screen name = "Favorites" component={FavoritesScreen} />
        </SettingsStack.Navigator>
    )
}