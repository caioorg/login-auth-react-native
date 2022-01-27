import React, { useCallback, useContext } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@app/screen/SignIn/utils/validate'
import { IFormSignIn } from '@app/screen/SignIn/types/FormSignIn'
import { navigation } from '@app/navigation/RootNavigation'
import Routes from '@app/navigation/enums'

import {
  Container,
  Title,
  Subtitle,
  WrapperForm,
  Input,
  Error,
  WrapperTitle,
  WrapperFooterActions,
  SignInButtonText,
  SignInButton,
  HelperTextRegister,
  Register,
  WrapperIconBack
} from './styles'
import AuthContext from '@app/contexts/auth'

WrapperIconBack.loadFont()

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormSignIn>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const onSubmit = useCallback(
    async (data: IFormSignIn) => {
      console.log(data)
      await signIn()
    },
    [signIn]
  )

  return (
    <Container>
      <WrapperIconBack
        name={'back'}
        onPress={() => navigation(Routes.WELCOME)}
      />
      <WrapperTitle>
        <Title>Let's sign you in.</Title>
        <Subtitle>Welcome back</Subtitle>
        <Subtitle>You've been missed!</Subtitle>
      </WrapperTitle>
      <WrapperForm>
        <Controller
          control={control}
          name={'username'}
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                onChangeText={onChange}
                value={value}
                autoCapitalize={'none'}
                placeholder={'Phone, email or username'}
                error={errors.username?.message}
              />
              {!!errors.username?.message && (
                <Error>{errors.username?.message}</Error>
              )}
            </>
          )}
        />

        <Controller
          control={control}
          name={'password'}
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                onChangeText={onChange}
                value={value}
                autoCapitalize={'none'}
                placeholder={'Password'}
                secureTextEntry
                error={errors.password?.message}
              />
              {!!errors.password?.message && (
                <Error>{errors.password.message}</Error>
              )}
            </>
          )}
        />
      </WrapperForm>
      <WrapperFooterActions>
        <HelperTextRegister>
          Don't have an account? <Register>Register</Register>
        </HelperTextRegister>

        <SignInButton onPress={handleSubmit(onSubmit)}>
          <SignInButtonText>Sign In</SignInButtonText>
        </SignInButton>
      </WrapperFooterActions>
    </Container>
  )
}

export default SignIn
