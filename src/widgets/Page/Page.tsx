import { memo, type MutableRefObject, type ReactNode, useRef, type UIEvent } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import cls from './Page.module.scss'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { ScrollSaveActions, getScrollByPath } from '@/features/ScrollSave'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}
export const PAGE_ID = 'PAGE_ID'

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const location = useLocation()
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollByPath(state, location.pathname)
    )

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })
    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(ScrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: location.pathname
        }))
    }, 500)

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {(onScrollEnd != null) ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </main>
    )
})
