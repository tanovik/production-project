import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type RenderResult, render } from '@testing-library/react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { type ReactElement, type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from '@/shared/config/i18n/i18nForTest'
import { Theme } from '@/shared/const/theme'
// eslint-disable-next-line tanovik-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
// eslint-disable-next-line tanovik-plugin/layer-imports
import '@/app/styles/index.scss'

export interface componentRenderOptions {
    route?: string
    initialState?: DeepPartialType<StateSchema>
    asyncReducers?: DeepPartialType<ReducersMapObject<StateSchema>>
    theme?: Theme
}
interface TestProviderProps {
    children: ReactNode
    options?: componentRenderOptions
}

export function TestProvider (props: TestProviderProps): ReactElement {
    const { children, options = {} } = props
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT
    } = options

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}): RenderResult {
    return render(<TestProvider options={options}>{component}</TestProvider>)
}
