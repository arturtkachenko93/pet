import style from './style.module.css';
import { CustomLink } from 'shared/core-ui';
import { ERoutePaths } from 'shared/types/router';
import HomeIcon from 'shared/assets/icons/home.svg';
import InfoIcon from 'shared/assets/icons/info.svg';
import { useContext, useMemo } from 'react';
import cn from 'classnames';
import { UiContext } from 'shared/context/ui/uiContext';

export const Navigations = () => {
    const { foldMenu } = useContext(UiContext);

    const navConfig = useMemo(
        () => [
            {
                path: ERoutePaths.MAIN,
                label: 'На главную',
                icon: <HomeIcon />,
            },
            {
                path: ERoutePaths.ABOUT,
                label: 'О нас',
                icon: <InfoIcon />,
            },
        ],
        [],
    );

    return (
        <nav className={style.navigation}>
            <ul>
                {navConfig.map((item) => (
                    <li key={item.label} className={style.itemLink}>
                        <CustomLink to={item.path} className={cn(style.link)}>
                            {item.icon}
                            <span className={cn(style.label, foldMenu && 'visually-hidden')}>{item.label}</span>
                        </CustomLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
