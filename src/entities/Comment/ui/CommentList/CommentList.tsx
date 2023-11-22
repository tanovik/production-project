import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { Text } from 'shared/ui/Text/Text'
import { type CommentType } from 'entities/Comment/model/types/comment'

interface CommentListProps {
    className?: string
    comments?: CommentType[]
    isLoading?: boolean
}
export const CommentList: React.FC<CommentListProps> = memo(({
    className,
    comments, isLoading
}) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.commentList, {}, [className ?? ''])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment} />
                ))
                : <Text text={t('No comments left')}/>
            }
        </div>
    )
})
