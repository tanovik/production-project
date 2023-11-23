import { type StateSchema } from 'app/providers/StoreProvider'

export const getAddCommentFormText = (state: StateSchema): string =>
    state.addCommentForm?.text as string
export const getAddCommentFormError = (state: StateSchema): string =>
    state.addCommentForm?.error as string
