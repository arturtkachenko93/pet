import { createContext, FC, ReactElement, useMemo, useState } from 'react';
import { ETheme, Theme, TUiContext } from '../../types/theme';
import { LOCAL_STORAGE_THEME } from '../../constants/theme';

export const UiContext = createContext<TUiContext>(null);

type ThemeProviderProps = {
    children: ReactElement;
};

export const UiProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>((localStorage.getItem(LOCAL_STORAGE_THEME) as ETheme) || ETheme.DEFAULT);
    const [foldMenu, setFoldMenu] = useState(false);

    const value = useMemo(() => {
        return {
            theme,
            setTheme,
            foldMenu,
            setFoldMenu,
        };
    }, [theme, foldMenu]);

    return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
