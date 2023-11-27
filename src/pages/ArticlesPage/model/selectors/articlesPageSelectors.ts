import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema): boolean => state.articlesPage?.isLoading ?? false
export const getArticlesPageError = (state: StateSchema): string => state.articlesPage?.error ?? ''
export const getArticlesPageView = (state: StateSchema): ArticleView => state.articlesPage?.view || ArticleView.PLATE

export const getArticlesPageNum = (state: StateSchema): number => state.articlesPage?.page || 1
export const getArticlesPageLimit = (state: StateSchema): number => state.articlesPage?.limit || 9
export const getArticlesPageHasMore = (state: StateSchema): boolean => state.articlesPage?.hasMore ?? false
export const getArticlesPageInited = (state: StateSchema): boolean => state.articlesPage?._inited ?? false
