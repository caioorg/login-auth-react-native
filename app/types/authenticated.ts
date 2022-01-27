export interface IResponseAuthenticated {
  token: string
  user: {
    name: string
    email: string
  }
}

export interface IAuthContextData {
  signIn(): Promise<void>
  signOut(): Promise<void>
  signed: boolean
  token: string
  user: { email: string; name: string } | undefined
}
