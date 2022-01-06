import React, { useState, useContext } from "react";
import { AccountBackground, AuthButton, AccountContainer, AccountCover, AuthInput } from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, Colors } from "react-native-paper";

export const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatedPassword, setRepeatedPassword] = useState("")
    const { onRegister, error, isLoading } = useContext(AuthenticationContext)
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType='emailAddress'
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large" />
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType='password'
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setPassword(p)}
                />

                <AuthInput
                    label="Reapeated Password"
                    value={repeatedPassword}
                    textContentType='password'
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setRepeatedPassword(p)}
                />
                {error && (<Spacer size='large'>
                    <Text variant="error">{error}</Text>
                </Spacer>)}


                <Spacer size="large" />
                {!isLoading ?
                    (<AuthButton icon="email"
                        mode='contained'
                        onPress={() => {
                            onRegister(email, password, repeatedPassword)
                        }}
                    >Register</AuthButton>) : (
                        <ActivityIndicator animating={true} color={Colors.blue100} />
                    )
                }



            </AccountContainer>
        </AccountBackground>
    )
}