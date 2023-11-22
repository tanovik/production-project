import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentsIsLoading = (state: StateSchema): boolean => state.articleComments?.isLoading as boolean
export const getArticleCommentsError = (state: StateSchema): string => state.articleComments?.error as string
