import React, { type ReactNode, type ErrorInfo, Suspense } from 'react'
import { PageError } from 'widgets/PageError'
// import { withTranslation } from 'react-i18next'

interface ErrorBoundaryProps {
    children: ReactNode
}
interface ErrorBoundaryState {
    hasError: boolean
}
export class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            hasError: false

        }
    }

    static getDerivedStateFromError (error: Error): Record<string, boolean> {
        // Update state so the next render will show the fallback UI.
        console.log(error)
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render (): ReactNode {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback=''>
                    <PageError/>
                </Suspense>
            )
        }

        return children
    }
}
// if we want to use translation in class component ErrorBoundry
// export default withTranslation()(ErrorBoundary)
