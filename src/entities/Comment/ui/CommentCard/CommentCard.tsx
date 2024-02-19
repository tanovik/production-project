import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { memo } from 'react'
import { type CommentType } from '../../model/types/comment'
import {  Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Text as TextDeprecated} from '@/shared/ui/deprecated/Text'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { AppLink as AppLinkDeprecated  } from '@/shared/ui/deprecated/AppLink'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { getRouteProfile } from '@/shared/const/router'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Text } from '@/shared/ui/redesigned/Text'
import { Avatar } from '@/shared/ui/redesigned/Avatar'

interface CommentCardProps {
    className?: string
    comment?: CommentType
    isLoading?: boolean
}
export const CommentCard: React.FC<CommentCardProps> = memo(
    ({ className, comment, isLoading }) => {
        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
        });

        if (isLoading) {
            return (
                <VStack
                    data-testid={'CommentCard.Loading'}
                    gap="8"
                    max
                    className={classNames(cls.commentCard, {}, [
                        className,
                        cls.loading,
                    ])}
                >
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton
                            height={16}
                            width={100}
                            className={cls.username}
                        />
                    </div>
                    <Skeleton className={cls.text} width="100%" height={50} />
                </VStack>
            )
        }
        if (comment == null) {
            return null
        }

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card padding="24" border="round_border" max>
                        <VStack
                            data-testid="CommentCard.Content"
                            gap="8"
                            max
                            className={classNames(cls.commentCardRedesigned, {}, [
                                className,
                            ])}
                        >
                            <AppLink to={getRouteProfile(comment.user.id)}>
                                <HStack gap="8">
                                    {comment.user.avatar ? (
                                        <Avatar
                                            size={30}
                                            src={comment.user.avatar}
                                        />
                                    ) : null}
                                    <Text text={comment.user.username} bold />
                                </HStack>
                            </AppLink>
                            <Text text={comment.text} />
                        </VStack>
                    </Card>
                }
                off={
                    <VStack
                        data-testid="CommentCard.Content"
                        gap="8"
                        max
                        className={classNames(cls.commentCard, {}, [className])}
                    >
                        <AppLinkDeprecated
                            to={getRouteProfile(comment.user.id)}
                            className={cls.header}
                        >
                            {comment.user.avatar ? (
                                <AvatarDeprecated
                                    size={30}
                                    src={comment.user.avatar}
                                />
                            ) : null}
                            <TextDeprecated
                                className={cls.username}
                                title={comment.user.username}
                            />
                        </AppLinkDeprecated>
                        <TextDeprecated className={cls.text} text={comment.text} />
                    </VStack>
                }
            />
           
        )
    },
)
