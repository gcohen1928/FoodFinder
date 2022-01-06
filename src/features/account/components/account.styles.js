import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/color";
import { Button, TextInput} from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({source: require('../../../../assets/home_bg.jpg')})`
flex: 1
backgroundColor: #ddd
align-items: center
justify-content: center
`

export const AccountCover = styled.View`
    position: absolute
    width: 100%
    height: 100%
    backgroundColor: rgba(255, 255, 255, 0.3)
`

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7)
    padding: ${(props)=> props.theme.space[4]}
    margin-top: ${(props) => props.theme.space[2]}
    border-radius: 20px
`

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary
})`
    padding: ${(props) => props.theme.space[2]}
`
export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled.Text`
    font-size: 50px
`
