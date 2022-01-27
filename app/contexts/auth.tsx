import React, { createContext, useCallback, useState, useEffect } from 'react'
import { IAuthContextData } from '@app/types/authenticated'
import { authenticated } from '@app/services/authenticated'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<{ name: string; email: string } | undefined>(
    undefined
  )

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@AUTH:User')
      const storagedToken = await AsyncStorage.getItem('@AUTH:Token')

      if (storagedUser && storagedToken) setUser(JSON.parse(storagedUser))
    }

    loadStorageData()
  }, [])

  const signIn = useCallback(async () => {
    const response = await authenticated()
    setUser(response.data.user)

    await AsyncStorage.setItem('@AUTH:User', JSON.stringify(response.data.user))
    await AsyncStorage.setItem(
      '@AUTH:Token',
      JSON.stringify(response.data.token)
    )
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.clear()
    setUser(undefined)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        token: '',
        user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
