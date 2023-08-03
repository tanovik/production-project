// import { render } from "react-dom";


// render (
//     <div>HELLO DEAR FRIEND</div>,
//     document.getElementById('root')
// )


// import { createRoot } from 'react-dom/client'
// createRoot(document.getElementById('root')).render(<h1>Your App</h1>)

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
</React.StrictMode>);



