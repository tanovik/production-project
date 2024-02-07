import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { type Article, type ArticleTextBlock } from '../../model/types/article'
import { Text } from '@/shared/ui/deprecated/Text'
import EyeIcon from '../../../../shared/assets/icons/EyeIcon.svg'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Card } from '@/shared/ui/deprecated/Card'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useTranslation } from 'react-i18next'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts'
import { getRouteArticleDetails } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

interface ArticleListItemProps {
    className?: string
    article: Article
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}
export const PLATE_VIEW_ITEM_WIDTH = 230

export const ArticleListItem: React.FC<ArticleListItemProps> = memo(
    ({ className, view = ArticleView.PLATE, article, target }) => {
        const { t } = useTranslation()

        const types = (
            <Text text={article.type.join(', ')} className={cls.types} />
        )
        const views = (
            <>
                <Text text={String(article.views)} className={cls.views} />
                <Icon Svg={EyeIcon} />
            </>
        )

        if (view === ArticleView.LIST) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as ArticleTextBlock
            return (
                <div
                    data-testid={'ArticleListItem'}
                    className={classNames(cls.articleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text
                                text={article.user.username}
                                className={cls.username}
                            />
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                        </div>
                        <Text title={article.title} className={cls.title} />
                        {types}
                        <AppImage
                            fallback={<Skeleton width={'100%'} height={250} />}
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={cls.textBlock}
                            />
                        )}
                        <div className={cls.footer}>
                            <AppLink
                                target={target}
                                to={getRouteArticleDetails(article.id)}
                            >
                                <Button theme={ButtonTheme.OUTLINE}>
                                    {t('Read more...')}
                                </Button>
                            </AppLink>
                            {views}
                        </div>
                    </Card>
                </div>
            )
        }
        return (
            <AppLink
                data-testid={'ArticleListItem'}
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={200} />}
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        )
    },
)
