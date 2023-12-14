import { type StateSchema } from '@/app/providers/StoreProvider'
import { type ScrollSchema } from '../types/ScrollSaveSchema'
import { createSelector } from '@reduxjs/toolkit'

export const getScroll = (state: StateSchema): ScrollSchema => state.scrollSave.scroll
export const getScrollByPath = createSelector(
    getScroll,
    // arguments:
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0

)
