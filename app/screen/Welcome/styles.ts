import styled from 'styled-components/native'

export const Container = styled.View`
  background: #181720;
  flex: 1;
  align-items: center;
`

export const WrapperTitle = styled.View`
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: #e4e8ee;
  font-size: 36px;
  font-weight: bold;
`

export const WrapperContent = styled.View`
  margin-top: 24px;
  align-items: center;
`

export const Content = styled.Text`
  color: #bdc1c6;
  font-size: 14px;
  margin-bottom: 8px;
`

export const WrapperFooterActions = styled.View`
  position: absolute;
  bottom: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 120px;
`

export const RegisterButton = styled.TouchableOpacity`
  background: #e4e8ee;
  padding: 20px 40px;
  border-radius: 16px;
  width: 80%;
  align-items: center;
`

export const RegisterButtonText = styled.Text`
  font-weight: bold;
  font-size: 17px;
`

export const ImageWelcome = styled.Image`
  width: 100%;
  height: 380px;
  margin-top: 60px;
  margin-bottom: 24px;
`
