import { useContext, useEffect } from 'react';
import { UiContext } from 'shared/context/ui/uiContext';
import { ETheme, Theme } from 'shared/types/theme';
import { LOCAL_STORAGE_THEME } from 'shared/constants/theme';

type TUseThemeResult = {
    theme: Theme;
    toggleTheme: () => void;
};

export const useTheme = (): TUseThemeResult => {
    const { theme, setTheme } = useContext(UiContext);

    useEffect(() => {
        const body = document.querySelector('body');
        body.className = '';
        body.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === ETheme.DEFAULT ? ETheme.DARK : ETheme.DEFAULT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
