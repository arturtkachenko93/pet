import { ERoutePaths } from 'shared/types/router';
import { Navigate, RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFound } from 'pages/not-found';

export const routerConfig: RouteProps[] = [
    {
        path: ERoutePaths.MAIN,
        element: <MainPage />,
    },
    {
        path: ERoutePaths.ABOUT,
        element: <AboutPage />,
    },
    {
        path: ERoutePaths.NOT_FOUND,
        element: <NotFound />,
    },
    {
        path: ERoutePaths.ANY,
        element: <Navigate to={ERoutePaths.NOT_FOUND} replace state={location.pathname} />,
    },
];
