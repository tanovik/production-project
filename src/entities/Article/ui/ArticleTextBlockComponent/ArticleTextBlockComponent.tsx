import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
// import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { type ArticleTextBlock } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}
export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = memo(({ className, block }) => {
    // const { t } = useTranslation()
    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className ?? ''])}>
            {block.title && (
                <Text title={block.title} className={cls.title}/>
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text key={index} text={paragraph} className={cls.paragraph}/>
            ))}
        </div>
    )
})
