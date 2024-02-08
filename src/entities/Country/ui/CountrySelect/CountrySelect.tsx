import { Country } from '../../model/types/country'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/PopUps'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/PopUps'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Canada, content: Country.Canada },
    { value: Country.Georgia, content: Country.Georgia },
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan }
]

export const CountrySelect: React.FC<CountrySelectProps> = memo(
    ({ className, value, onChange, readonly }) => {
        const { t } = useTranslation()

        const onChangeHandler = useCallback(
            (value: string): void => {
                onChange?.(value as Country)
            },
            [onChange],
        )
        const props = {
            className,
            value,
            defaultValue:t('Choose country'),
            label:t('Choose country'),
            items: options,
            onChange: onChangeHandler,
            readonly,
            direction: 'top right' as const,
        };

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ListBox {...props} />}
                off={<ListBoxDeprecated {...props} />}
            />
        )
    },
)
