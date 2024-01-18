import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input } from '@/shared/ui/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/AddCommentFormSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/Stack'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}
const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
}
const AddCommentForm: React.FC<AddCommentFormProps> = memo(({ className, onSendComment }) => {
    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((val: string): void => {
        dispatch(addCommentFormActions.setText(val))
    }, [dispatch])

    const onSendHandler = useCallback((): void => {
        onSendComment(text)
        onCommentTextChange('')
    }, [text, onSendComment, onCommentTextChange])
    return (
        <DynamicModuleLoader reducers={reducers} >
            <HStack
                data-testid={'AddCommentForm'}
                justify={'between'}
                max
                className={classNames(cls.addCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Enter comment')}
                    onChange={onCommentTextChange}
                    value={text}
                    className={cls.input}
                    data-testid={'AddCommentForm.Input'}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                    data-testid={'AddCommentForm.Button'}
                >
                    {t('Leave a comment')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
