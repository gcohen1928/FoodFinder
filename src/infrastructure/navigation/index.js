import React, {useContext} from 'react'
import { AppNavigator } from './app.navigation'
import {View, Text} from 'react-native'
import { AuthenticationContext } from '../../services/authentication/authentication.context'
import { AccountNavigator } from './account.navigation'

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthenticationContext)
    return (isAuthenticated? <AppNavigator /> : <AccountNavigator />)
}