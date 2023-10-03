import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { Modal } from './Modal'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        isOpen: true
    }
}
