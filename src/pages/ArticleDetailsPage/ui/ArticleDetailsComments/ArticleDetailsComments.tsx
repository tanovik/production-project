import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Suspense, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slices/ArticleCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { Text as TextDeprecated, TextSize} from '@/shared/ui/deprecated/Text'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/lib/features'

interface ArticleDetailsCommentsProps {
    className?: string
    id?: string
}
export const ArticleDetailsComments: React.FC<ArticleDetailsCommentsProps> =
    memo(({ className, id }) => {
        const { t } = useTranslation()
        const comments = useSelector(getArticleComments.selectAll)
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
        const dispatch = useAppDispatch()

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text))
            },
            [dispatch],
        )

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id))
        })
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" title={t('Comments')} />}
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Комментарии')}
                        />
                    }
                />
                <Suspense fallback={<Loader />}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </VStack>
        )
    })
