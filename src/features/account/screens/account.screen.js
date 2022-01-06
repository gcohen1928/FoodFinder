import React from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from 'lottie-react-native'
import styled from "styled-components";

const LottieContainer = styled.View`
    position: absolute
    margin-top: 50px
    margin-left: 50px
`

export const AccountScreen = ({ navigation }) => {
    return (

        <AccountBackground>
            <AccountCover />
            
                <LottieView
                    source={require("../../../../assets/watermelon.json")}
                    autoPlay
                    loop
                    style={{marginBottom: 250}}
                />
           

            <Title>FoodFinder</Title>
            <AccountContainer>
                <AuthButton icon="lock-open-outline"
                    mode='contained'
                    onPress={() => {
                        navigation.navigate("Login")
                    }}
                >Login</AuthButton>
                <Spacer size="large" />
                <AuthButton icon="email-outline"
                    mode='contained'
                    onPress={() => {
                        navigation.navigate("Register")
                    }}
                >Register</AuthButton>
            </AccountContainer>
        </AccountBackground>
    )
}