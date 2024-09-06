import { createRoot } from 'react-dom/client';
import { App } from 'app/_app';
import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.css';
import { UiProvider } from 'shared/context/ui';
import { ErrorBoundary } from 'shared/HOCs/error-boundary';
import { Error } from 'pages/error';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
    <ErrorBoundary fallback={<Error />}>
        <BrowserRouter>
            <UiProvider>
                <App />
            </UiProvider>
        </BrowserRouter>
    </ErrorBoundary>,
);
