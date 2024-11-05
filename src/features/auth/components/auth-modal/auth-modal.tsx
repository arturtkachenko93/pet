import { Modal } from 'shared/core-ui/modal/modal';
import { FC, Suspense } from 'react';
import { TAuthModalProps } from 'shared/types/modals';
import { AuthFormAsync } from '../auth-form/auth-form.async';

export const AuthModal: FC<TAuthModalProps> = (props) => {
    return (
        <Modal lazy {...props}>
            <Suspense>
                <AuthFormAsync />
            </Suspense>
        </Modal>
    );
};
