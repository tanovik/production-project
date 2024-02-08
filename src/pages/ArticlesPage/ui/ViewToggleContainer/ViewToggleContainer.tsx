import { ArticleViewToggle } from '@/features/ArticleViewToggle'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'
import { memo } from 'react'


interface ViewToggleContainerProps {
    className?: string;
}

export const ViewToggleContainer = memo(
    (props: ViewToggleContainerProps) => {
        const { className } = props;
        const { view, onChangeView } = useArticleFilters();

        return (
            <ArticleViewToggle
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);