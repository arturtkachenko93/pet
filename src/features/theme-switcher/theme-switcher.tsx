import { useTheme } from 'shared/hooks/useTheme';
import { Button } from 'shared/core-ui';
import ThemeSwitcherIcon from 'shared/assets/icons/theme-switcher.svg';
import { useRef } from 'react';

export const ThemeSwitcher = ({ className }: { className?: string }) => {
    const { toggleTheme } = useTheme();
    const ref = useRef(null);

    return (
        <Button className={className} view='transparent' onClick={toggleTheme} aria-label='Toggle theme' ref={ref}>
            <ThemeSwitcherIcon width={20} height={20} fill='var(--secondary-color)' />
        </Button>
    );
};
