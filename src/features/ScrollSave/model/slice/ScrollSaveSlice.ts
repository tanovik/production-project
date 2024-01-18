import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ScrollSaveSchema } from '../types/ScrollSaveSchema'

const initialState: ScrollSaveSchema = {
    scroll: {},
}

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            action: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[action.payload.path] = action.payload.position
        },
    },
})

export const { actions: ScrollSaveActions } = scrollSaveSlice
export const { reducer: ScrollSaveReducer } = scrollSaveSlice
