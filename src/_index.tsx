import { createRoot } from 'react-dom/client';
import { App } from 'app/_app';
import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.css';
import { UiProvider } from 'shared/context/ui';
import { ErrorBoundary } from 'shared/HOCs/error-boundary';
import { Error } from 'pages/error';
import { ModalProvider } from 'app/context/modal';
import { StoreProvider } from 'app/store';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
    <ErrorBoundary fallback={<Error />}>
        <StoreProvider>
            <BrowserRouter>
                <ModalProvider>
                    <UiProvider>
                        <App />
                    </UiProvider>
                </ModalProvider>
            </BrowserRouter>
        </StoreProvider>
    </ErrorBoundary>,
);
