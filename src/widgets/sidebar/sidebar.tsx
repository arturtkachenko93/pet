import { ReactNode, useContext } from 'react';
import cn from 'classnames';
import style from './style.module.css';

import { useSizes } from 'shared/hooks/useSizes';
import { UiContext } from 'shared/context/ui/uiContext';

export const Sidebar = ({ children }: { children: ReactNode }) => {
    const { foldMenu } = useContext(UiContext);

    const [_, height] = useSizes('header');

    return (
        <aside className={cn(style.aside, foldMenu && style.folded)} style={{ minHeight: `calc(100vh - ${height}px)` }}>
            {children}
        </aside>
    );
};
