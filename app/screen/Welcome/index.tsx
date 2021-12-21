import React from 'react'
import Routes from '@app/navigation/enums'
import { navigation } from '@app/navigation/RootNavigation'
import {
  Container,
  Content,
  ImageWelcome,
  RegisterButton,
  RegisterButtonText,
  Title,
  WrapperContent,
  WrapperFooterActions,
  WrapperTitle
} from './styles'

const Welcome: React.FC = () => {
  return (
    <Container>
      <ImageWelcome source={require('@app/assets/images/welcome.png')} />
      <WrapperTitle>
        <Title>Enterprise Team</Title>
        <Title>collaboration.</Title>
        <WrapperContent>
          <Content>Bring together your files, your tools,</Content>
          <Content>projects and people, including a new</Content>
          <Content>mobile and desktop application.</Content>
        </WrapperContent>
      </WrapperTitle>
      <WrapperFooterActions>
        <RegisterButton onPress={() => navigation(Routes.SIGNIN)}>
          <RegisterButtonText>Sign In</RegisterButtonText>
        </RegisterButton>
      </WrapperFooterActions>
    </Container>
  )
}

export default Welcome
