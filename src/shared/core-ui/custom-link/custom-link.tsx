import { NavLinkProps, NavLink } from 'react-router-dom';
import cn from 'classnames';
import style from './style.module.css';
import { ReactNode } from 'react';

export type TCustomLink = {
    className?: string;
    children: ReactNode;
};

export type TCustomLinkProps = TCustomLink & NavLinkProps;

export const CustomLink = ({ className, children, ...props }: TCustomLinkProps) => {
    const styles = ({ isActive }: { isActive: boolean }) => ({
        color: isActive ? 'var(--accent-primary-color)' : null,
        ['pointer-events']: isActive ? 'none' : null,
    });

    return (
        <NavLink className={cn(style.link, className)} style={styles} {...props}>
            {children}
        </NavLink>
    );
};
