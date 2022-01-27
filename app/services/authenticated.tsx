import { ResponseCustom } from '../types/response'
import { IResponseAuthenticated } from '../types/authenticated'

// export const authenticated = (): Promise<ResponseCustom<IResponseAuthenticated>> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         token: '',
//         name: '',
//         email: ''
//       })
//     }, 2000)
//   })
// }

export const authenticated = async (): Promise<
  ResponseCustom<IResponseAuthenticated>
> => {
  try {
    return Promise.resolve({
      data: {
        token: 'olkl12h3g12y2214kl123jh21gg',
        user: {
          email: 'thiagomarinho@rocketseat.com.br',
          name: 'Thiago'
        }
      }
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
