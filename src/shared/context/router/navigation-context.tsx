import { createContext, FC, useMemo, useState } from 'react';
import { TRouteProps } from './protected-route';
import { TAllowedPaths } from 'shared/types/router';

export type TNavigationContext = {
    allowedPaths: TAllowedPaths[]
    permitPaths: (path: string) => void
    clearPermitPath: (path: string) => void
}

export const NavigationContext = createContext<TNavigationContext>(null);

export const NavigationProvider: FC<TRouteProps> = ({ children } ) => {
    const [allowedPaths, setAllowedPaths] = useState([]);

    const permitPaths = (path: string) => setAllowedPaths((prev => !prev.includes(path) ?
        [...prev, path] : [...prev] ));

    const clearPermitPath = (path: string) => setAllowedPaths((prev => prev.filter(item => item !== path) ));

    const value = useMemo(() => (
        { allowedPaths, permitPaths, clearPermitPath }
    ), [allowedPaths]);

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    );
};