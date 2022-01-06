import React, { useContext, useState} from "react"
import {
    FlatList,
} from "react-native";
import {ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components"
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfo } from "../components/restaurant-info.component"
import { SafeArea } from "../../../utility/safe-area.component"
import {
    RestaurantsContext,
} from "../../../services/restaurants/restaurant.context"
import { Search } from "../components/search.component"
import { TouchableOpacity } from "react-native-gesture-handler";
import {FavoritesContext} from "../../../services/favorites/favorites.context"
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";

const Loading = styled(ActivityIndicator)`
  marginLeft: -25px;
`
const LoadingContainer = styled.View`
    position:absolute
    top: 50%
    left: 50%
`

export const RestaurantsScreen = ({ navigation }) => {
    const [isToggled, setIsToggled] = useState(false)

    const { isLoading, error, restaurants } = useContext(RestaurantsContext)
    const {favorites} = useContext(FavoritesContext)

    return (
        <SafeArea>
            <Search isFavoritesToggled = {isToggled} onFavoritesToggle = {() => setIsToggled(!isToggled)}/>
            {isToggled && <FavoritesBar favorites={favorites} onPress ={navigation.navigate}/>}
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.blue400} />
                </LoadingContainer>
            )}
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
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
};
