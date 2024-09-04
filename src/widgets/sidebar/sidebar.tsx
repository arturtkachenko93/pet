import { ReactNode, useState } from 'react';
import cn from 'classnames';
import style from './sidebar.module.css';
import { Button } from 'shared/ui';
import FoldIcon from '/public/icons/aside-fold.svg';

import { useSizes } from 'shared/hooks/useSizes';
export const Sidebar = ({ children }: {children: ReactNode}) => {
    const [fold, setFold] = useState(false);
    const [_, height] = useSizes('header');

    return (
        <aside className={cn(style.aside, fold && style.folded)} style={{ minHeight: `calc(100vh - ${height}px)` }}>
            {children}
            <Button className={style.buttonFold} onClick={() => setFold(prev => !prev)}>
                <FoldIcon className={style.icon} stroke='var(--accent-primary-color)'/>
            </Button>
        </aside>
    );
};