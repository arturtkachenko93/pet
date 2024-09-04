import { ReactElement } from 'react';
import style from './layout.module.css';

export const Layout = ({ children }: {children: ReactElement}) => {

    return (
        <main className={style.layout}>{children}</main>
    );
};