import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type CommentType } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'
import { getArticleDetailsData } from '@/entities/Article'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
CommentType,
string,
ThunkConfig<string>
>('articleDetailPage/addCommentForArticle', async (text, thunkAPI) => {
    const { extra, getState, rejectWithValue, dispatch } = thunkAPI

    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
        return rejectWithValue('no data')
    }
    try {
        const response = await extra.api.post<CommentType>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        })
        if (!response.data) {
            throw new Error()
        }
        dispatch(fetchCommentsByArticleId(article.id))

        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue('error')
    }
})
