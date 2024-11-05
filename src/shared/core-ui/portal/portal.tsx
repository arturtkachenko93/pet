import { createPortal } from 'react-dom';
import { ReactNode, FC } from 'react';

type TPortal = {
    children: ReactNode;
    element?: HTMLElement;
};

export const Portal: FC<TPortal> = ({ children, element = document.body }) => {
    return createPortal(children, element);
};
