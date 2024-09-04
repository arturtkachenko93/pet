import { HTMLAttributes } from 'react';
import style from './style.module.css';
import cn from 'classnames';

export type TButtonProps = HTMLAttributes<HTMLButtonElement>
export const Button = (props: TButtonProps) => {
    const { children, className,...otherProps } = props;

    return (
        <button type='button' className={cn(style.button, className)} {...otherProps}>{children}</button>
    );
};