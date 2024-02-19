import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Input as InputDeprecated} from '@/shared/ui/deprecated/Input'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/AddCommentFormSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Button } from '@/shared/ui/redesigned/Button'
import { Input } from '@/shared/ui/redesigned/Input'
import { Card } from '@/shared/ui/redesigned/Card'
import { ToggleFeatures } from '@/shared/lib/features'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}
const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}
const AddCommentForm: React.FC<AddCommentFormProps> = memo(
    ({ className, onSendComment }) => {
        const { t } = useTranslation()
        const text = useSelector(getAddCommentFormText)
        const dispatch = useAppDispatch()

        const onCommentTextChange = useCallback(
            (val: string): void => {
                dispatch(addCommentFormActions.setText(val))
            },
            [dispatch],
        )

        const onSendHandler = useCallback((): void => {
            onSendComment(text)
            onCommentTextChange('')
        }, [text, onSendComment, onCommentTextChange])

        return (
            <DynamicModuleLoader reducers={reducers}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Card padding="24" border="partial_round_border" max>
                            <HStack
                                data-testid="AddCommentForm"
                                justify="between"
                                max
                                gap="16"
                                className={classNames(
                                    cls.addCommentFormRedesigned,
                                    {},
                                    [className],
                                )}
                            >
                                <Input
                                    className={cls.input}
                                    placeholder={t('Введите текст комментария')}
                                    value={text}
                                    data-testid="AddCommentForm.Input"
                                    onChange={onCommentTextChange}
                                />
                                <Button
                                    data-testid="AddCommentForm.Button"
                                    onClick={onSendHandler}
                                >
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </Card>
                    }
                    off={
                        <HStack
                            data-testid="AddCommentForm"
                            justify="between"
                            max
                            className={classNames(cls.addCommentForm, {}, [
                                className,
                            ])}
                        >
                            <InputDeprecated
                                className={cls.input}
                                placeholder={t('Enter comment')}
                                value={text}
                                data-testid="AddCommentForm.Input"
                                onChange={onCommentTextChange}
                            />
                            <ButtonDeprecated
                                data-testid="AddCommentForm.Button"
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSendHandler}
                            >
                                {t('Leave a comment')}
                            </ButtonDeprecated>
                        </HStack>
                    }
                />

            </DynamicModuleLoader>
        )
    },
)

export default AddCommentForm
