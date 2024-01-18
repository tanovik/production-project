import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from '../types/AddCommentForm'

const initialState: AddCommentFormSchema = {
    text: '',
}

const AddCommentFormSlice = createSlice({
    name: 'AddCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByArticleId.pending, (state) => {
    //             state.error = undefined
    //             state.isLoading = true
    //         })
    //         .addCase(fetchCommentsByArticleId.fulfilled, (
    //             state,
    //             action: PayloadAction<CommentType[]>
    //         ) => {
    //             state.isLoading = false
    //             commentsAdapter.setAll(state, action.payload)
    //         })
    //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
    //             console.log('action.payload', action.payload)
    //             state.isLoading = false
    //             state.error = action.payload
    //             console.log('state.error', state.error)
    //         })
    // }
})

export const { reducer: addCommentFormReducer } = AddCommentFormSlice
export const { actions: addCommentFormActions } = AddCommentFormSlice
