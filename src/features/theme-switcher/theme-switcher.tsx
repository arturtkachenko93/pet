import { useTheme } from 'shared/context/theme';
import { Button } from 'shared/ui';
import ThemeSwitcherIcon from '/public/icons/theme-switcher.svg';
import style from './style.module.css';

export const ThemeSwitcher = ({ className }: {className?: string}) => {
    const { toggleTheme } = useTheme();

    return (
        <Button className={className} onClick={toggleTheme} aria-label='Toggle theme'>
            <ThemeSwitcherIcon className={style.icon}/>
        </Button>
    );
};