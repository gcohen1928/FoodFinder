import React, { useContext } from 'react'
import { SafeArea } from '../../../utility/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components'
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const SettingsItem = styled(List.Item)`
padding: ${props=> props.theme.space[3]}`

const AvatarContainer = styled.View`
    align-items: center
    margin-top: 50px
`

export const SettingsScreen = ({navigation}) => {
    const { onLogout, user } = useContext(AuthenticationContext)
    return (
        <SafeArea>
            <AvatarContainer>
            <Avatar.Icon size = {180} icon = 'human' backgroundColor ='#2182BD' />       
            <Spacer position='top' size = 'large'>
                <Text variant = "caption">{user.email}</Text>
            </Spacer>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    style={{ padding: 16 }}
                    title="Favorites"
                    description="View your favorites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favorites")}
                />
                <SettingsItem
                    style={{ padding: 16 }}
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    )
};