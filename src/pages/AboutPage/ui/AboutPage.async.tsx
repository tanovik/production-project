import { lazy } from 'react';

//работающий код
export const AboutPageAsync = lazy(() => import('./AboutPage'));

//делаем задержку для того чтобы увидеть Лоадер при загрузке чанка
//работающий код сверху 
// export const AboutPageAsync = lazy(() => new Promise(resolve => {
//     // @ts-ignore
//     setTimeout(() => resolve (import('./AboutPage')), 1500)
// }));