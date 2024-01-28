import { lazy, type ReactNode, Suspense } from 'react'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { type ArticleRatingProps } from './ArticleRating'

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps): ReactNode => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    )
}
