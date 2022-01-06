import React from "react"
import styled from "styled-components"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Spacer } from "../spacer/spacer.component"
import { MapCallout } from "../../features/map/components/map-callout.component"
import { Text } from "../typography/text.component"

const FavoritesWrapper = styled.View`
    padding: 10px
`



export const FavoritesBar = ({favorites, onPress}) => {
    if(!favorites.length){
        return null
    }
    return (
        <FavoritesWrapper>
            <Spacer variant='left.large'>
                <Text variant='caption'>Favorites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favorites.map((restaurant) => {
                    const key = restaurant.name.split(" ").join("")
                    return (
                        <Spacer key = {key} position='left' size='large'>
                            <TouchableOpacity onPress = {() => {onPress("RestaurantDetail", {restaurant})}}>
                            <MapCallout
                            isMap = {false}
                            restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavoritesWrapper>
    )
}