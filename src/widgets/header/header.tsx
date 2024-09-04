import { CustomLink } from 'shared/ui';
import style from './style.module.css';
import { ERoutePaths } from 'shared/types/router';

export const Header = () => {

    return (
        <header className={style.header}>
            <nav className={style.navigation}>
                <CustomLink to={ERoutePaths.ABOUT} state={{ crossOver: true }}>О нас</CustomLink>
                <CustomLink to={ERoutePaths.MAIN}>На главную</CustomLink>
            </nav>
        </header>
    );
};