import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { memo } from 'react'
import { type CommentType } from '../../model/types/comment'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import { AppLink } from '@/shared/ui/AppLink'
import { VStack } from '@/shared/ui/Stack'
import { getRouteProfile } from '@/shared/const/router'

interface CommentCardProps {
    className?: string
    comment?: CommentType
    isLoading?: boolean
}
export const CommentCard: React.FC<CommentCardProps> = memo(({
    className,
    comment,
    isLoading
}) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        )
    }
    if (comment == null) {
        return null
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(cls.commentCard, {}, [className ?? ''])}>
            <AppLink
                to={getRouteProfile(comment.user.id)}
                className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar}/> : null}
                <Text className={cls.username} title={comment.user.username}/>
            </AppLink>
            <Text className={cls.text} text={comment.text}/>
        </VStack>
    )
})
