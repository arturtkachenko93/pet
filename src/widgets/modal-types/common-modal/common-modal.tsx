import { Modal } from 'shared/core-ui/modal/modal';
import { FC } from 'react';
import { TCommonModalProps } from 'shared/types/modals';

export const CommonModal: FC<TCommonModalProps> = (props) => {
    return <Modal {...props}>Common Modal :)</Modal>;
};
