import { useLocation, Navigate } from 'react-router-dom';
import { ReactElement, useContext, } from 'react';

import { ERoutePaths } from '../../types/router';
import { NavigationContext } from './navigation-context';

export type TRouteProps = {
    children: ReactElement
}

export const ProtectedRoute = ({ children }: TRouteProps) => {
    const location = useLocation();
    const { allowedPaths } = useContext(NavigationContext);
    const isAllowedPaths = allowedPaths.includes(location.pathname) || location.state?.crossOver;

    return !isAllowedPaths ? <Navigate to={ERoutePaths.MAIN} replace /> : children;
};