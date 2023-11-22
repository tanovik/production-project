import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article } from '../types/article'

export const getArticleDetailsData = (state: StateSchema): Article => state.articleDetails?.data as Article

export const getArticleDetailsIsLoading = (state: StateSchema): boolean => state.articleDetails?.isLoading ||
 false as boolean

export const getArticleDetailsError = (state: StateSchema): string => state.articleDetails?.error as string
