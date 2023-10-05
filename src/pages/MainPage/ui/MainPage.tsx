import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = (): JSX.Element => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (val: string): void => {
        setValue(val)
    }
    return (
        <div>
            {/* <BugButton/> */}
            {t('Главная')}
            {/* <Counter/> */}
            <Input onChange={onChange} value={value}/>
        </div>
    )
}

export default MainPage
