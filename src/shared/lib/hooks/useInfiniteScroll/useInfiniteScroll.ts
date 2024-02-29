import { type MutableRefObject, useEffect, useRef } from 'react'

export interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef?: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({
    callback,
    wrapperRef,
    triggerRef,
}: UseInfiniteScrollOptions): void {
    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        const wrapperElement = ((wrapperRef?.current) != null) || null
        const triggerElement = triggerRef.current

        if (callback != null) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            }

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
                // @ts-expect-error
            }, options)

            observer.current.observe(triggerElement)
        }

        return () => {
            if (observer.current != null && triggerElement) {
                observer.current.unobserve(triggerElement)
            }
        }
    }, [callback, triggerRef, wrapperRef])
}
