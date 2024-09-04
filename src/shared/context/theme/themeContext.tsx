import { createContext, FC, ReactElement, useMemo, useState } from 'react';
import { ETheme, Theme, TThemeContext } from '../../types/theme';
import { LOCAL_STORAGE_THEME } from '../../constants/theme';

export const ThemeContext  = createContext<TThemeContext>(null);

type ThemeProviderProps = {
    children: ReactElement
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children  }) => {
    const [theme, setTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME) as ETheme|| ETheme.DEFAULT);

    const value = useMemo(() => {
        return {
            theme,
            setTheme
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};