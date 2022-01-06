import React from "react"
import { SvgXml } from "react-native-svg"
import star from "../../../../assets/star"
import open from "../../../../assets/open"
import { Spacer } from "../../../components/spacer/spacer.component"
import { Text } from "../../../components/typography/text.component"
import {
  Icon,
  RestaurantCardCover,
  RestaurantCard,
  Info,
  Rating,
  Row,
  RowEnd,
} from "./restaurant-info-styles"
import { Favorite } from "../../../components/favorites/favorites.component"

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_960,c_limit/Smashburger-recipe-120219.jpg",
    ],
    address = "100 Random St",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant

  const ratingArray = Array.from(new Array(Math.floor(rating)))
  return (
    <RestaurantCard elevation={5}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="body">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((value, index) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${name}-${index}`}
              />
            ))}
            <RowEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="medium" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="medium" />
              <Icon source={{ uri: icon }} />
            </RowEnd>
          </Rating>
        </Row>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  )
};
