import { Button } from 'shared/core-ui';
import cn from 'classnames';
import style from './style.module.css';
import ArrowIcon from 'shared/assets/icons/arrow.svg';
import { useContext } from 'react';
import { UiContext } from 'shared/context/ui/uiContext';

export const MenuSwitcher = () => {
    const { foldMenu, setFoldMenu } = useContext(UiContext);

    const onClick = () => setFoldMenu(!foldMenu);

    return (
        <Button
            aria-label='Меню'
            className={cn(style.menuButton, foldMenu && style.folded)}
            view='transparent'
            onClick={onClick}
        >
            <ArrowIcon fill='var(--secondary-color)' />
        </Button>
    );
};
