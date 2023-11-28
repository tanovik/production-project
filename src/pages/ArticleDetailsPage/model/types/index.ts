import { type ArticleCommentsSchema } from './ArticleCommentsSchema'
import { type ArticleRecommendationsSchema } from './ArticleRecommendationsSchema'

export interface ArticleDetailsPageSchema {
    comments: ArticleCommentsSchema
    recommendations: ArticleRecommendationsSchema
}
