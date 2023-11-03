import { classNames } from 'shared/lib/classNames/classNames'
import { Country } from '../../model/types/country'

import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Select } from 'shared/ui/Select/Select'

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
    { value: Country.Poland, content: Country.Poland }
]

export const CountrySelect: React.FC<CountrySelectProps> = memo(({ className, value, onChange, readonly }) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string): void => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            className={classNames('', {}, [className])}
            label= {t('Choose your country')}
            options = {options}
            value={value}
            onChange={onChangeHandler}
            readonly= {readonly}
        />
    )
}
)
