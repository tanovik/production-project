import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { type ReactElement, memo} from 'react'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails'
import { Text as TextDeprecated, TextAlign, TextSize } from '@/shared/ui/deprecated/Text'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import EyeIcon from '@/shared/assets/icons/EyeIcon.svg'
import DateIcon from '@/shared/assets/icons/DateIcon.svg'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { renderArticleBlock } from './renderBlock'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ArticleDetailsProps {
    className?: string
    id?: string
}
const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

const Deprecated = (): ReactElement => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <Avatar size={200} src={article?.img} className={cls.avatar} />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <HStack gap="8" className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack gap="8" className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={DateIcon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};


const Redesigned = (): ReactElement => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={<SkeletonRedesigned width="100%" height={420} border="16px" />}
                src={article?.img}
                className={cls.img}
            />
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const ArticleDetailsSkeleton =(): ReactElement => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });
    return ( 
        <VStack gap='16' max>
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
        </VStack>
    )
}

export const ArticleDetails: React.FC<ArticleDetailsProps> = memo(
    ({ className, id }) => {
        const { t } = useTranslation()
        const dispatch = useAppDispatch()
        const isLoading = useSelector(getArticleDetailsIsLoading)
        const error = useSelector(getArticleDetailsError)

        useInitialEffect(() => {
            dispatch(fetchArticleById(id))
        })

        let content

		

        if (isLoading) {
            content = <ArticleDetailsSkeleton/>
        } else if (error) {
            content = (
                <TextDeprecated
                    align={TextAlign.CENTER}
                    title={t('An error occured while loading the article')}
                />
            )
        } else {
            content = (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Redesigned />}
                    off={<Deprecated />}
                />
            );
        }


        return (
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
                <VStack
                    gap="16"
                    max
                    className={classNames(cls.articleDetails, {}, [className ])}
                >
                    {content}
                </VStack>
            </DynamicModuleLoader>
        )
    },
)
