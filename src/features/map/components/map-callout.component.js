import React from "react"
import { Image, View } from "react-native"
import styled from "styled-components"
import { Text } from "../../../components/typography/text.component"
import WebView from 'react-native-webview'
import {Platform} from 'react-native'


const CalloutCover = styled.Image`
    border-radius: 10px
    width: 120px
    height: 120px
`

const CompactView = styled.View`
    padding: 10px
    max-width: 120px
    align-items: center
`

const CompactWebView = styled(WebView)
`
border-radius: 10px
width: 120px
height: 120px
`
const isAndroid = Platform.OS == 'android'


export const MapCallout = ({ restaurant, isMap }) => {
    const Image = (isAndroid && isMap) ? CompactWebView : CalloutCover
    return (
        <CompactView>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Text center variant="caption" numberOfLines={3}>{restaurant.name}</Text>
        </CompactView>
    )
}