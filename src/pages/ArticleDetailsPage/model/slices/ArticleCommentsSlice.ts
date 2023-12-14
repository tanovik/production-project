import {
    type EntityState,
    createEntityAdapter,
    createSlice,
    type PayloadAction
} from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type CommentType } from '@/entities/Comment'
import { type ArticleCommentsSchema } from '../types/ArticleCommentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id
})
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.comments as EntityState<CommentType> || commentsAdapter.getInitialState()
)

const articleCommentsSlice = createSlice({
    name: 'articleCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
        isLoading: false,
        ids: [],
        error: undefined,
        entities: {}
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<CommentType[]>
            ) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                console.log('action.payload', action.payload)
                state.isLoading = false
                state.error = action.payload
                console.log('state.error', state.error)
            })
    }
})

export const { reducer: articleCommentsReducer } = articleCommentsSlice
export const { actions: articleCommentsActions } = articleCommentsSlice
