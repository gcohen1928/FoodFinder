import React, { useContext } from "react"
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components"

import { RestaurantInfo } from "../components/restaurant-info.component"
import { SafeArea } from "../../../utility/safe-area.component"
import {
  RestaurantsContext,
  RestaurantsContextProvider,
} from "../../../services/restaurants/restaurant.context"
import { Search } from "../components/search.component"

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``

const Loading = styled(ActivityIndicator)`
  marginLeft: -25px;
`
const LoadingContainer = styled.View`
    position:absolute
    top: 50%
    left: 50%
`

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext)

  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue400} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfo restaurant={item} />
        }}
        keyExtractor={(item) => {
          return item.name
        }}
      />
    </SafeArea>
  )
};
