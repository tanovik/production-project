import React, { memo } from 'react';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/Application-web-page.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon';

interface AppLogoProps {
    className?: string;
}
/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const AppLogo = memo(({ className }: AppLogoProps) => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            {/* <AppSvg className={cls.appLogo} /> */}
            <Icon
                width={55}
                height={60}
                Svg={AppSvg}
            />
        </HStack>
    );
});