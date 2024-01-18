import { type Currency } from '@/shared/const/common'
import { type Country } from '@/entities/Country'

export interface Profile {
    id?: string
    firstname?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}
