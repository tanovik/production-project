import { type StateSchema } from 'app/providers/StoreProvider'
import { type User } from '../types/user'

export const getUserAuhtData = (state: StateSchema): User => state.user.authData as User
