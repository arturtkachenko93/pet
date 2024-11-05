import { useCallback, useContext } from 'react';
import { NavigationContext } from 'shared/context/router/navigation-context';
import { useNavigate } from 'react-router-dom';

export type TUseProtectedRouteResult = {
    handleTransition: (allowPage: string) => void;
    clearPermitPath: (allowPage: string) => void;
};

/**
 * Разрешение перехода по маршруту в случае,
 * если он находится в списке запрещенных для прямых переходов из строки браузера и т.п.
 */
export const useProtectedRoute = (): TUseProtectedRouteResult => {
    const { permitPaths, clearPermitPath } = useContext(NavigationContext);
    const navigate = useNavigate();

    const handleTransition = useCallback(
        (allowPage: string) => {
            permitPaths(allowPage);
            navigate(allowPage);
        },
        [navigate, permitPaths],
    );

    return {
        handleTransition,
        clearPermitPath,
    };
};
