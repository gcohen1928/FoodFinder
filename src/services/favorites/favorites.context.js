import React, { useContext, createContext, useState, useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthenticationContext } from '../authentication/authentication.context'


export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    const {user} =  useContext(AuthenticationContext)
    const saveFavorites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue)
        } catch (e) {
            console.log("error storing", e)
        }
    }
    const loadFavorites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favorites-${uid}`)
            if (value !== null) {
                setFavorites(JSON.parse(value))
            }
        } catch (e) {
            console.log("error loading", e)
        }
    }

    useEffect(()=> {
    if(user) {
        loadFavorites(user.uid)
    }
    }, [user])

    useEffect(()=> {
    if(user) {
        saveFavorites(favorites, user.uid)
    } 
    }, [favorites, user])





    const add = (restaurant) => {
        setFavorites([...favorites, restaurant])
    }
    const remove = (restaurant) => {
        const newFavorites = favorites.filter((x) => x.placeId !== restaurant.placeId)
        setFavorites(newFavorites)
    }
    return (
        <FavoritesContext.Provider value={{
            favorites,
            addToFavorites: add,
            removeFromFavorites: remove,
        }}>
            {children}
        </FavoritesContext.Provider>
    )

}