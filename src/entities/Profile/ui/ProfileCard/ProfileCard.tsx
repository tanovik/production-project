import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { type Country } from 'entities/Country/model/types/country'
import { CountrySelect } from 'entities/Country'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeCountry?: (country: Country) => void
}
export const ProfileCard: React.FC<ProfileCardProps> = ({
    className, data, error, isLoading, readonly, onChangeAge, onChangeCity, onChangeCountry,
    onChangeFirstname, onChangeLastname
}) => {
    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
                <Loader/>
            </div>

        )
    }
    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Profile failed to load')}
                    text={t('Try to refresh the page please')}
                    align={TextAlign.CENTER}
                />
            </div>

        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly
    }
    return (

        <div className={classNames(cls.profileCard, mods, [className])}>

            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar}/>
                    </div>
                )}

                <Input
                    value={data?.firstName}
                    placeholder={t('Enter your first name')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly= {readonly}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Enter your last name')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly= {readonly}

                />
                <Input
                    value={data?.age}
                    placeholder={t('Enter your age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly= {readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Enter your city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly= {readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly ={readonly}
                />
            </div>
        </div>
    )
}
