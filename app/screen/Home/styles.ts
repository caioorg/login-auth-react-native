import styled from 'styled-components/native'

export const Container = styled.View`
  background: #181720;
  flex: 1;
  align-items: center;
  padding: 0 32px;
  justify-content: center;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 24px;
  color: #fff;
`

export const Description = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
`
export const Logout = styled.TouchableOpacity`
  background: #e4e8ee;
  padding: 20px 40px;
  border-radius: 16px;
  width: 100%;
  align-items: center;
`

export const LogoutText = styled.Text`
  font-weight: bold;
  font-size: 17px;
`
