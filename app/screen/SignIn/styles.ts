import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/AntDesign'

export const Container = styled.View`
  background: #181720;
  flex: 1;
  align-items: center;
  padding: 0 32px;
`

export const WrapperTitle = styled.View`
  width: 100%;
  margin-top: 170px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;
  color: #fff;
`

export const Subtitle = styled.Text`
  font-size: 24px;
  color: #fff;
  margin-bottom: 6px;
`

export const WrapperForm = styled.View`
  margin-top: 40px;
  width: 100%;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#bdc1c6'
})`
  width: 100%;
  height: 55px;
  background: transparent;
  border-radius: 12px;
  border: 2px;
  border-color: ${(props: { error: boolean }) =>
    props.error ? '#ee6055' : '#bdc1c6'};
  padding: 8px 16px;
  margin-bottom: ${(props: { error: boolean }) =>
    props.error ? '4px' : '16px'};
  color: #bdc1c6;
`

export const Error = styled.Text`
  color: #ee6055;
  font-size: 14px;
  padding-left: 8px;
  margin-bottom: 16px;
`

export const WrapperFooterActions = styled.View`
  position: absolute;
  bottom: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 120px;
`

export const SignInButton = styled.TouchableOpacity`
  background: #e4e8ee;
  padding: 20px 40px;
  border-radius: 16px;
  width: 100%;
  align-items: center;
`
export const SignInButtonText = styled.Text`
  font-weight: bold;
  font-size: 17px;
`
export const HelperTextRegister = styled.Text`
  font-size: 16px;
  color: #bdc1c6;
  margin-bottom: 24px;
`

export const Register = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #e4e8ee;
`
export const WrapperIconBack = styled(Icon)`
  position: absolute;
  top: 80px;
  left: 16px;
  font-size: 30px;
  color: #e4e8ee;
`
