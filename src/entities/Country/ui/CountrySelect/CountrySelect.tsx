import { Country } from '../../model/types/country'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ListBox } from '@/shared/ui/PopUps'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.Australia, content: Country.Australia },
    { value: Country.Canada, content: Country.Canada },
    { value: Country.Georgia, content: Country.Georgia },
    { value: Country.Poland, content: Country.Poland },
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

        return (
            <ListBox
                onChange={onChangeHandler}
                value={value}
                defaultValue={t('Choose your country')}
                label={t('Choose your country')}
                items={options}
                readonly={readonly}
                direction="bottom right"
            />
        )
    },
)
