import { useContext, useEffect } from 'react';
import { ThemeContext } from './themeContext';
import { ETheme, Theme } from '../../types/theme';
import { LOCAL_STORAGE_THEME } from '../../constants/theme';

type TUseThemeResult = {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): TUseThemeResult  => {
    const { theme, setTheme } = useContext(ThemeContext);

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
        toggleTheme
    };
};