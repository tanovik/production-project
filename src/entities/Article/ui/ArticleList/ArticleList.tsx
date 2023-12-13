import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import React, {
    type HTMLAttributeAnchorTarget, memo,
    type ReactElement,
    useRef,
    type MutableRefObject
} from 'react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { type Article } from '../../model/types/article'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { List, type ListRowProps, WindowScroller } from 'react-virtualized'
import { PAGE_ID } from 'widgets/Page/Page'
import { ArticleView } from '../../model/consts/articleConsts'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    virtualized?: boolean

}
const getSkeletons = (view: ArticleView): React.ReactNode[] => {
    return new Array(view === ArticleView.PLATE ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
        ))
}

export const ArticleList: React.FC<ArticleListProps> =
memo(({
    className, articles, isLoading,
    view = ArticleView.PLATE, target,
    virtualized = true
}) => {
    const { t } = useTranslation()
    const isListView = view === ArticleView.LIST
    const pageRef = useRef() as MutableRefObject<HTMLDivElement>
    console.log('pageRef.current', pageRef.current)
    // console.log('pageRef.current.width', pageRef.current ? pageRef.current.offsetWidth : 900)

    // const itemsPerRow = isListView ? 1 : (pageRef.current ? pageRef.current.offsetWidth : 900 / PLATE_VIEW_ITEM_WIDTH)
    const itemsPerRow = isListView ? 1 : 3
    const rowCount = isListView ? articles.length : Math.ceil(articles.length / itemsPerRow)

    const rowRender = ({ index, key, style }: ListRowProps): ReactElement => {
        const items = []
        const fromIndex = index * itemsPerRow
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={articles[i].id}
                    className={cls.card}
                />
            )
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        )
    }

    if (!isLoading && (articles.length === 0)) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                <Text title={t('This article is not found')} size={TextSize.L}/>
            </div>
        )
    }
    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop
            }) => (
                <div
                    // @ts-expect-error
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {virtualized
                        ? (
                            <List
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isListView ? 700 : 330}
                                rowRenderer={rowRender}
                                width={width ? width - 80 : 700}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            articles.map((item) => (
                                <ArticleListItem
                                    article={item}
                                    view={view}
                                    target={target}
                                    key={item.id}
                                    className={cls.card}
                                />
                            ))
                        )}
                    {isLoading && getSkeletons(view)}

                </div>
            )}
        </WindowScroller>
    )
})
