import { type Currency } from 'shared/const/common'
import { type Country } from 'entities/Country/model/types/country'

export interface Profile {
    firstName?: string
    lastName?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
