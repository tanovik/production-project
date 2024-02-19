import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import { memo } from 'react'
import { type ArticleTextBlock } from '../../model/types/article'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}
export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> =
    memo(({ className, block }) => {
        return (
            <div
                className={classNames(cls.articleTextBlockComponent, {}, [
                    className ?? '',
                ])}
            >

                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text title={block.title} className={cls.title} />}
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
						 />
					 }
				 />
                   
                )}

                {block.paragraphs.map((paragraph, index) => (
                    <ToggleFeatures
                        key={index}
                        feature="isAppRedesigned"
                        on={
                            <Text
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                        off={
                            <TextDeprecated
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        )
    })
