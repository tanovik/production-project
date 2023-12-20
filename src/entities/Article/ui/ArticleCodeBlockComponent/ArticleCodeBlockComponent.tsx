import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleCodeBlockComponent.module.scss'
// import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { type ArticleCodeBlock } from '../../model/types/article'
import { Code } from '@/shared/ui/Code'

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}
export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = memo(({ className, block }) => {
    // const { t } = useTranslation()
    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className ?? ''])}>
            <Code text={block.code}/>
        </div>
    )
})
