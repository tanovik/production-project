import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}
const ArticlesPage: React.FC<ArticlesPageProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                data-testid={'ArticlesPage'}
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArticlesPageFilters/>
                <ArticlesInfiniteList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
