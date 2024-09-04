import { createRoot } from 'react-dom/client';
import { App } from 'app/_app';
import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.css';
import { ThemeProvider } from 'shared/context/theme';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
