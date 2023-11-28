import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleRecommendationsSchema } from '../types/ArticleRecommendationsSchema'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.recommendations ?? recommendationsAdapter.getInitialState()
)

export const ArticleRecommendationsSlice = createSlice({
    name: 'ArticleRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action
            ) => {
                state.isLoading = false
                recommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})
export const { actions: ArticleRecommendationsActions } = ArticleRecommendationsSlice
export const { reducer: ArticleRecommendationsReducer } = ArticleRecommendationsSlice
