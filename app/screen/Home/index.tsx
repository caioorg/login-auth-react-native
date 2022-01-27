import React, { useContext } from 'react'
import AuthContext from '@app/contexts/auth'
import { Container, Title, Description, Logout, LogoutText } from './styles'

const Home: React.FC = () => {
  const { user, signOut } = useContext(AuthContext)

  return (
    <Container>
      <Title>Hi, {user?.name}</Title>
      <Description>thanks for logging into our application</Description>
      <Logout onPress={() => signOut()}>
        <LogoutText>Logout</LogoutText>
      </Logout>
    </Container>
  )
}

export default Home
