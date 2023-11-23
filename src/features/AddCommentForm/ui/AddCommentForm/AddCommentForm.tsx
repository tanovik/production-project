import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { AddCommentFormActions, AddCommentFormReducer } from '../../model/slices/AddCommentFormSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}
const reducers: ReducersList = {
    addCommentForm: AddCommentFormReducer
}
const AddCommentForm: React.FC<AddCommentFormProps> = memo(({ className, onSendComment }) => {
    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    // const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((val: string): void => {
        dispatch(AddCommentFormActions.setText(val))
    }, [dispatch])

    const onSendHandler = useCallback((): void => {
        onSendComment(text)
        onCommentTextChange('')
    }, [text, onSendComment, onCommentTextChange])
    return (
        <DynamicModuleLoader reducers={reducers} >
            <div className={classNames(cls.addCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Enter comment')}
                    onChange={onCommentTextChange}
                    value={text}
                    className={cls.input}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Leave a comment')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
