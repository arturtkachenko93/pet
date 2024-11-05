import { useTheme } from 'shared/hooks/useTheme';
import { Button } from 'shared/core-ui';
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import { useRef } from 'react';
import style from './style.module.css';
import cn from 'classnames';

export const ThemeSwitcher = () => {
    const { toggleTheme, theme } = useTheme();
    const ref = useRef(null);

    return (
        <Button
            className={cn(style.button, style[theme])}
            view='transparent'
            onClick={toggleTheme}
            aria-label='Toggle theme'
            ref={ref}
        >
            <ThemeSwitcherIcon width={20} height={20} fill='var(--secondary-color)' />
        </Button>
    );
};
