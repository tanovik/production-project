import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Profile } from '@/entities/Profile'

export const getProfileForm = (state: StateSchema): Profile =>
    state.profile?.form as Profile
