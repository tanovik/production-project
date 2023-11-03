import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import 'app/styles/index.scss'
import { StoreProvider } from 'app/providers/StoreProvider'

const root = createRoot(document.getElementById('root') as Element)
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
// import { render } from "react-dom";

// render (
//     <div>HELLO DEAR FRIEND</div>,
//     document.getElementById('root')
// )

// import { createRoot } from 'react-dom/client'
// createRoot(document.getElementById('root')).render(<h1>Your App</h1>)

// root.render(
// <React.StrictMode>
//     <BrowserRouter>
//         <ThemeProvider>
//             <App />
//         </ThemeProvider>
//     </BrowserRouter>
//  </React.StrictMode>
// );

// import { createRoot } from 'react-dom/client';
// import App from './app/App';
// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'app/providers/ThemeProvider';
// import "shared/config/i18n/i18n"
// import React from 'react';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//     <React.StrictMode>
//     <BrowserRouter>
//         <ThemeProvider>
//             <App />
//         </ThemeProvider>
//     </BrowserRouter>
//     </React.StrictMode>
// );
