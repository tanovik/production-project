import { memo, type ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
    const { className, content, left, right } = props;

    return (
        <div className={classNames(cls.mainLayout, {}, [className])}>
            {(right != null) && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {(left != null) && <div className={cls.right}>{right}</div>}
        </div>
    );
});