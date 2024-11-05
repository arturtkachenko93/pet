import { createContext, ReactNode, useCallback, useMemo, useState } from 'react';
import { EModals, TModalContext, TModalTypes } from 'shared/types/modals';
import { CommonModal } from 'widgets/modal-types';
import { AuthModal } from 'features/auth';

export const ModalContext = createContext<TModalContext>(null);

const ModalComponents = {
    [EModals.AUTH_MODAL]: AuthModal,
    [EModals.COMMON_MODAL]: CommonModal,
};

type TModalState = {
    modalType: EModals;
    modalProps?: Omit<TModalTypes[EModals], 'open' | 'handleClose'>;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [{ modalType, modalProps }, setModalState] = useState<TModalState>({ modalType: null });

    const showModal = useCallback(
        (modalType: EModals, modalProps?: Omit<TModalTypes[EModals], 'open' | 'handleClose'>) =>
            setModalState({
                modalType,
                modalProps,
            }),

        [],
    );

    const hideModal = useCallback(() => {
        setModalState({
            modalType: null,
            modalProps: null,
        });
    }, []);

    const providerValue = useMemo(
        () => ({
            showModal,
            hideModal,
        }),
        [showModal, hideModal],
    );

    const Component = useMemo(() => ModalComponents[modalType], [modalType]);

    return (
        <ModalContext.Provider value={providerValue}>
            {children}
            {modalType && <Component open={true} handleClose={hideModal} {...modalProps} />}
        </ModalContext.Provider>
    );
};
