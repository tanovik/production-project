import { combineReducers } from '@reduxjs/toolkit'

import { articleCommentsReducer } from './ArticleCommentsSlice'
import { ArticleRecommendationsReducer } from './ArticleRecommendationsSlice'
import { type ArticleDetailsPageSchema } from '../types'

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: ArticleRecommendationsReducer,
        comments: articleCommentsReducer,
    })
