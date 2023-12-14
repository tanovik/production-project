import { type Currency } from '@/shared/const/common'
import { type Country } from '@/entities/Country'

export interface Profile {
    id?: string
    firstName?: string
    lastName?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}
