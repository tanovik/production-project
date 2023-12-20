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
import { Text } from '@/shared/ui/Text'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { VStack } from '@/shared/ui/Stack'
import { Loader } from '@/shared/ui/Loader'

interface ArticleDetailsCommentsProps {
    className?: string
    id?: string
}
export const ArticleDetailsComments: React.FC<ArticleDetailsCommentsProps> = memo(({ className, id }) => {
    const { t } = useTranslation()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch()

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })
    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text title={t('Comments')}/>
            <Suspense fallback={<Loader/>}>
                <AddCommentForm onSendComment={onSendComment}/>
            </Suspense>
            <CommentList comments={comments} isLoading={commentsIsLoading}/>
        </VStack>
    )
})
