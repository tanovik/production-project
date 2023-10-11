import { type FC, lazy } from 'react'
import { type LoginFormProps } from './LoginForm'

// работающий код
export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await import('./LoginForm'))

// делаем задержку для того чтобы увидеть Лоадер при загрузке чанка
// работающий код сверху
// export const AboutPageAsync = lazy(() => new Promise(resolve => {
//     // @ts-ignore
//     setTimeout(() => resolve (import('./AboutPage')), 1500)
// }));
