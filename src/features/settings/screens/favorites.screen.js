import React, {useContext} from "react";

import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { SafeArea } from "../../../utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfo } from "../../restaurants/components/restaurant-info.component";
const FavoritesArea = styled(SafeArea)`
    align-items: center
    justify-content: center
`

export const FavoritesScreen = ({navigation}) => {
    const {favorites} = useContext(FavoritesContext)
   
    return favorites.length ? 
    (
        <SafeArea>
            <RestaurantList
                data={favorites}
                renderItem={({ item }) => {
                    return  (
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {restaurant:item})}>
                            <Spacer position="bottom" size="large">
                                <RestaurantInfo restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>

                    )
                }}
                keyExtractor={(item) => {
                    return item.name
                }}
            />
        </SafeArea>
    )
    
    : (
    <FavoritesArea style ={{alignItems: 'center', justifyContent: 'center'}}>
        <Text center>No favorites yet</Text>
    </FavoritesArea>) 
}