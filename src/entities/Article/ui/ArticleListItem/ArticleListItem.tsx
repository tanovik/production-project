import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { memo, useCallback } from 'react'
import { ArticleView, type Article, ArticleBlockType, type ArticleTextBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import EyeIcon from '../../../../shared/assets/icons/EyeIcon.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'

interface ArticleListItemProps {
    className?: string
    article: Article
    view?: ArticleView

}
export const ArticleListItem: React.FC<ArticleListItemProps> =
memo(({ className, view = ArticleView.PLATE, article }) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id)
    }, [article.id, navigate])

    const types = <Text text={article.type.join(', ')} className={cls.types} />
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    )

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Read more...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }
    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    )
})
