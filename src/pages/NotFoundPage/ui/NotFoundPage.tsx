import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <div
            data-testid={'NotFoundPage'}
            className={classNames(cls.notFoundPage, {}, [className])}
        >
            {t('Страница не найдена')}
        </div>
    )
}
