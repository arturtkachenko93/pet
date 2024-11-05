import {
    FC,
    forwardRef,
    MouseEvent,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import style from './style.module.css';
import cn from 'classnames';
import { mergeRefs } from 'shared/utils/mergeRef';
import { Portal } from 'shared/core-ui/portal/portal';

export type TModalProps = {
    children: ReactNode;
    className?: string;
    handleClose: () => void;
    isPortal?: boolean;
    lazy?: boolean;
    open: boolean;
};

export const Modal: FC<TModalProps> = forwardRef((props, ref) => {
    const { children, className, handleClose, isPortal = true, lazy, open } = props;

    const [isMounted, setIsMounted] = useState(false);

    const modalRef = useRef(null);

    const closeHandler = useCallback(() => {
        if (handleClose) {
            handleClose();
        }
    }, [handleClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeHandler();
        },
        [closeHandler],
    );

    useEffect(() => {
        if (open) {
            setIsMounted(true);
        }
    }, [open]);

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    if (lazy && !isMounted) return null;

    if (isPortal) {
        return (
            <Portal>
                <div
                    className={cn(style.modal, className)}
                    ref={() => mergeRefs(modalRef, ref)}
                    onClick={closeHandler}
                >
                    <div className={cn(style.overlay)}>
                        <div
                            className={cn(style.content)}
                            onClick={(e: MouseEvent) => e.stopPropagation()}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </Portal>
        );
    }

    return (
        <div
            className={cn(style.modal, className)}
            ref={() => mergeRefs(modalRef, ref)}
            onClick={closeHandler}
        >
            <div className={cn(style.overlay)}>
                <div className={cn(style.content)} onClick={(e: MouseEvent) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
});
