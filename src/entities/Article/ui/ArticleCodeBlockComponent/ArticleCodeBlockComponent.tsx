import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleCodeBlockComponent.module.scss'
import { memo } from 'react'
import { type ArticleCodeBlock } from '../../model/types/article'
import { Code } from '@/shared/ui/redesigned/Code'

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}
export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> =
    memo(({ className, block }) => {
        return (
            <div
                className={classNames(cls.articleCodeBlockComponent, {}, [
                    className ?? '',
                ])}
            >
                <Code text={block.code} />
            </div>
        )
    })
