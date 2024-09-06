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
} & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButtonProps> = forwardRef((props, ref) => {
    const { children, className, view = 'primary', size = 'default', shape = 'default', ...rest } = props;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isFocus] = useFocus(buttonRef, 'keyboard');
    const styles = {
        [style.isFocus]: isFocus,
        [style[view]]: view,
        [style[size]]: size,
        [style[shape]]: shape,
    };
    const refs = mergeRefs(buttonRef, ref);

    return (
        <button type='button' {...rest} className={cn(style.button, styles, className)} ref={refs}>
            {children}
        </button>
    );
});
