import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    ProfileCard, fetchProfileData,
    getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, profileActions, profileReducer
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader'
import { type Country } from 'entities/Country'

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}
const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)

    useEffect(() => {
        dispatch(fetchProfileData())
        console.log('fetchProfileData ')
    }, [dispatch])

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
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
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
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
