import { classNames } from '@/shared/lib/classNames/classNames'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EditableProfileCard } from '@/features/editableProfileCard'

interface ProfilePageProps {
    className?: string
}
const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
    const { id } = useParams<{ id: string }>()
    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid={'ProfilePage'}
        >
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    )
}

export default ProfilePage
