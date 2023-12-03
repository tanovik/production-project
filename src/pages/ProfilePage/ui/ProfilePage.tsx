import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    ProfileCard, ValidateProfileError, fetchProfileData,
    getProfileError, getProfileForm, getProfileIsLoading,
    getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader'
import { type Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack/VStack/VStack'

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}
const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)
    const { id } = useParams<{ id: string }>()

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error while saving data'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect region'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('First and last name are mandatory'),
        [ValidateProfileError.NO_DATA]: t('No data filled in')
    }

    const onChangeFirstname = useCallback((value?: string): void => {
        dispatch(profileActions.updateProfile({ firstName: value || '' }))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string): void => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }))
    }, [dispatch])
    const onChangeAge = useCallback((value?: string): void => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch])
    const onChangeCity = useCallback((value?: string): void => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])
    const onChangeCountry = useCallback((country: Country): void => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <VStack gap={'16'} max>
                    <ProfilePageHeader/>
                    {validateErrors?.length && validateErrors.map((err) => (
                        <Text
                            theme={TextTheme.ERROR}
                            text = {validateErrorTranslates[err]}
                            key={err}/>
                    ))}
                    <ProfileCard
                        data = {formData}
                        error = {error}
                        isLoading = {isLoading}
                        readonly = {readonly}
                        onChangeFirstname = {onChangeFirstname}
                        onChangeLastname = {onChangeLastname}
                        onChangeAge = {onChangeAge}
                        onChangeCity = {onChangeCity}
                        onChangeCountry = {onChangeCountry}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
