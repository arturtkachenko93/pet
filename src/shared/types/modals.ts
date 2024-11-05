export enum EModals {
    AUTH_MODAL = 'AUTH_MODAL',
    COMMON_MODAL = 'COMMON_MODAL',
}

export type TModalProps = {
    open: boolean;
    handleClose: () => void;
};

export type TAuthModalProps = TModalProps & {};
export type TCommonModalProps = TModalProps & {};

export type TModalTypes = {
    [EModals.AUTH_MODAL]: TAuthModalProps;
    [EModals.COMMON_MODAL]: TCommonModalProps;
};

export type TModalContext = {
    showModal: <T extends EModals>(
        modalType: T,
        modalProps?: Omit<TModalTypes[T], 'open' | 'handleClose'>,
    ) => void;
    hideModal: () => void;
};
