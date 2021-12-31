import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
width: 15px
height: 15px
`

export const RestaurantCardCover = styled(Card.Cover)`
backgroundColor: ${(props) => props.theme.colors.bg.primary}
padding: ${(props) => props.theme.space[3]}
`;

export const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary}
margin-bottom: ${(props) => props.theme.space[3]}

`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

export const Rating = styled.View`
    flex-direction: row
    padding-top: ${(props) => props.theme.space[2]}
    padding-bottom: ${(props) => props.theme.space[2]}
`

export const Row = styled.View`
flex-direction:row
align-items: center
`

export const RowEnd = styled.View`
    flex: 1
    flex-direction: row
    justify-content: flex-end
`;
