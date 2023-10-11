import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getLoginState = (state: StateSchema): string => state?.loginForm?.username || ''
