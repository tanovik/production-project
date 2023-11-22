import { type EntityState } from '@reduxjs/toolkit'
import { type CommentType } from 'entities/Comment'

export interface ArticleCommentsSchema extends EntityState<CommentType> {
    isLoading?: boolean
    error?: string
    ids: string[]
}
