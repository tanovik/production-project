import { classNames } from '@/shared/lib/classNames/classNames'

import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { type CommentType } from '../../model/types/comment'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/lib/features'

interface CommentListProps {
    className?: string
    comments?: CommentType[]
    isLoading?: boolean
}
export const CommentList: React.FC<CommentListProps> = memo(
    ({ className, comments, isLoading }) => {
        const { t } = useTranslation()

        if (isLoading) {
            return (
                <VStack
                    gap="16"
                    max
                    className={classNames('', {}, [className])}
                >
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                    <CommentCard isLoading />
                </VStack>
            )
        }
        return (
            <VStack
                gap="16"
                max
                className={classNames('', {}, [className])}
            >
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            isLoading={isLoading}
                            comment={comment}
                            key={comment.id}
                        />
                    ))
                ) : (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text text={t('No comments left')} />}
                        off={<TextDeprecated text={t('No comments left')} />}
                    />
                )}
            </VStack>
        )
    },
)
