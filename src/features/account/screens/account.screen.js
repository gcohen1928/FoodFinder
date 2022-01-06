import React from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";



export const AccountScreen = ({navigation}) => {
    return (

        <AccountBackground>
            <AccountCover />
            <Title>MealsToGo</Title>
            <AccountContainer>
                <AuthButton icon="lock-open-outline" 
                mode='contained'
                onPress= {() => {
                    navigation.navigate("Login")
                }}
                >Login</AuthButton>
                <Spacer size ="large"/>
                <AuthButton icon="email-outline" 
                mode='contained'
                onPress= {() => {
                    navigation.navigate("Register")
                }}
                >Register</AuthButton>
            </AccountContainer>
        </AccountBackground>
    )
}