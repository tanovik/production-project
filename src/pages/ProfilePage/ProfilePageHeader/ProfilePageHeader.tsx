import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
    className?: string
    children?: React.ReactNode
}
export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = ({ className, children }) => {
    const { t } = useTranslation('profile')

    const readonly = useSelector(getProfileReadonly)
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const dispatch = useAppDispatch()

    const onEdit = useCallback((): void => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback((): void => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback((): void => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className ?? ''])}>
            <Text title={t('Profile')}/>
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readonly
                        ? (<Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                            {t('Edit')}
                        </Button>)
                        : (
                            <>
                                <Button theme={ButtonTheme.OUTLINE_RED}
                                    className={cls.cancelBtn}
                                    onClick={onCancelEdit}>
                                    {t('Cancel')}
                                </Button>
                                <Button theme={ButtonTheme.OUTLINE}
                                    className={cls.saveBtn}
                                    onClick={onSave} >
                                    {t('Save')}
                                </Button>
                            </>
                        )
                    }
                </div>
            )
            }

        </div>
    )
}
