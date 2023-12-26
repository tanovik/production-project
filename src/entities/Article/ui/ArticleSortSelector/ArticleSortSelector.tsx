import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import { Select, type SelectOption } from '@/shared/ui/Select'
import { type SortOrder } from '@/shared/types'
import cls from './ArticleSortSelector.module.scss'
import { ArticleSortField } from '../../model/consts/articleConsts'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, onChangeSort, order, sort
    } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('ascend')
        },
        {
            value: 'desc',
            content: t('descend')
        }
    ], [t])

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('creation date')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('name')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views')
        }
    ], [t])

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t('Sort by')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                label={t('by')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    )
})
