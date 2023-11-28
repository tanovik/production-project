import { useCallback, useRef } from 'react'

export function useDebounce (callback: (...args: any[]) => void, delay: number): (...args: any[]) => void {
    const timer = useRef()

    return useCallback((...args: any[]) => {
        // if there is timer in Ref already we clear it and then call callback func
        if (timer.current) {
            clearTimeout(timer.current)
        }
        // @ts-expect-error
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])
}
