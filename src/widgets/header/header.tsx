import style from './style.module.css';
import { Button } from 'shared/core-ui';
import { useContext } from 'react';
import { ModalContext } from 'app/context/modal/modalContext';
import { EModals } from 'shared/types/modals';

export const Header = () => {
    const { showModal } = useContext(ModalContext);

    return (
        <header className={style.header}>
            <Button
                className={style.button}
                view='secondary'
                shape='rounded'
                onClick={() => showModal(EModals.AUTH_MODAL)}
            >
                Войти
            </Button>
            <Button
                className={style.button}
                view='secondary'
                shape='rounded'
                onClick={() => showModal(EModals.COMMON_MODAL)}
            >
                Test Modal Common
            </Button>
        </header>
    );
};
