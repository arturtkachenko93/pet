import { FC, forwardRef, HTMLAttributes, LegacyRef, useRef } from 'react';
import style from './style.module.css';
import cn from 'classnames';
import { useFocus } from 'shared/hooks/useFocus';
import { mergeRefs } from 'shared/utils/mergeRef';

export type TButtonProps = {
    view?: 'accent' | 'primary' | 'secondary' | 'transparent';
    size?: 'default' | 's' | 'm' | 'l';
    shape?: 'default' | 'rounded';
    ref?: LegacyRef<HTMLButtonElement>;
    isLoading?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButtonProps> = forwardRef((props, ref) => {
    const { className, view = 'primary', size = 'default', shape = 'default' } = props;
    const { isLoading, children, ...rest } = props;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isFocus] = useFocus(buttonRef, 'keyboard');
    const styles = {
        [style.isFocus]: isFocus,
        [style[view]]: view,
        [style[size]]: size,
        [style[shape]]: shape,
        [style['loading']]: isLoading,
    };

    const refs = mergeRefs(buttonRef, ref);

    return (
        <button
            type='button'
            {...rest}
            className={cn(style.button, styles, className)}
            disabled={isLoading}
            ref={refs}
        >
            {children}
        </button>
    );
});
