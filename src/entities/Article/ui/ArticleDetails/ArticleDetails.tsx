import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { memo, useCallback } from 'react'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails'
import { Text, TextAlign, TextSize } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import EyeIcon from '@/shared/assets/icons/EyeIcon.svg'
import DateIcon from '@/shared/assets/icons/DateIcon.svg'
import { Avatar } from '@/shared/ui/Avatar'
import { Icon } from '@/shared/ui/Icon'
// import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { type ArticleBlock } from '../../model/types/article'
import { HStack, VStack } from '@/shared/ui/Stack'
import { ArticleBlockType } from '../../model/consts/articleConsts'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'

interface ArticleDetailsProps {
    className?: string
    id?: string
}
const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}
export const ArticleDetails: React.FC<ArticleDetailsProps> = memo(
    ({ className, id }) => {
        const { t } = useTranslation()
        const dispatch = useAppDispatch()
        const isLoading = useSelector(getArticleDetailsIsLoading)
        const article = useSelector(getArticleDetailsData)
        const error = useSelector(getArticleDetailsError)

        const renderBlock = useCallback((block: ArticleBlock) => {
            switch (block.type) {
                case ArticleBlockType.CODE:
                    return (
                        <ArticleCodeBlockComponent
                            key={block.id}
                            className={cls.block}
                            block={block}
                        />
                    )

                case ArticleBlockType.IMAGE:
                    return (
                        <ArticleImageBlockComponent
                            key={block.id}
                            className={cls.block}
                            block={block}
                        />
                    )

                case ArticleBlockType.TEXT:
                    return (
                        <ArticleTextBlockComponent
                            key={block.id}
                            className={cls.block}
                            block={block}
                        />
                    )

                default:
                    return null
            }
        }, [])

        useInitialEffect(() => {
            dispatch(fetchArticleById(id))
        })

        let content

        if (isLoading) {
            content = (
                <>
                    <Skeleton
                        className={cls.avatar}
                        width={200}
                        height={200}
                        border={'50%'}
                    />
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton
                        className={cls.skeleton}
                        width={600}
                        height={24}
                    />
                    <Skeleton
                        className={cls.skeleton}
                        width={'100%'}
                        height={200}
                    />
                    <Skeleton
                        className={cls.skeleton}
                        width={'100%'}
                        height={200}
                    />
                </>
            )
        } else if (error) {
            content = (
                <Text
                    align={TextAlign.CENTER}
                    title={t('An error occured while loading the article')}
                />
            )
        } else {
            content = (
                <>
                    <HStack justify="center" max className={cls.avatarWrapper}>
                        <Avatar
                            size={200}
                            src={article?.img}
                            className={cls.avatar}
                        />
                    </HStack>
                    <VStack gap="4" max data-testid="ArticleDetails.Info">
                        <Text
                            className={cls.title}
                            title={article?.title}
                            text={article?.subtitle}
                            size={TextSize.L}
                        />
                        <HStack gap="8" className={cls.articleInfo}>
                            <Icon className={cls.icon} Svg={EyeIcon} />
                            <Text text={String(article?.views)} />
                        </HStack>
                        <HStack gap="8" className={cls.articleInfo}>
                            <Icon className={cls.icon} Svg={DateIcon} />
                            <Text text={article?.createdAt} />
                        </HStack>
                    </VStack>
                    {article?.blocks.map(renderBlock)}
                </>
            )
        }
        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
                <VStack
                    gap="16"
                    max
                    className={classNames(cls.articleDetails, {}, [
                        className ?? '',
                    ])}
                >
                    {content}
                </VStack>
            </DynamicModuleLoader>
        )
    },
)
