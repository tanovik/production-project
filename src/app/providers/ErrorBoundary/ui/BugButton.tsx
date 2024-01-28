import { useEffect, useState } from 'react'
import { Button } from '@/shared/ui/deprecated/Button'
import { useTranslation } from 'react-i18next'

interface BugButtonProps {
    className?: string
}

// component for ErrorBoundry testing
export const BugButton: React.FC<BugButtonProps> = () => {
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    const onThrow = (): void => {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw new Error('error happened')
        }
    }, [error])

    return <Button onClick={onThrow}>{t('throw an error')}</Button>
}
