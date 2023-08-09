import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';

interface SidebarProps {
    className?: string;
}
export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.sidebar,
            { [cls.collapsed]: collapsed },
            [className])}>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className= {cls.lang}/>
            </div>
            <button onClick={onToggle}>toggle</button>
        </div>
    );
};