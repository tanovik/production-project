import { type FC, lazy } from 'react';
import { type SettingsPageProps } from './SettingsPage';


export const SettingsPageAsync = lazy<FC<SettingsPageProps>>(
    async () => await import('./SettingsPage')
);


