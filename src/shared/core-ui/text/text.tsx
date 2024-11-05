import style from './style.module.css';
import cn from 'classnames';

type TTextProps = {
    title?: string;
    description?: string;
    className?: string;
    view?: 'primary' | 'alert';
};

export const Text = ({ title, description, view = 'primary', className }: TTextProps) => {
    const styles = {
        [style[view]]: view,
    };

    return (
        <div className={cn(style.text, className)}>
            {title && <p className={cn(style.title, styles)}>{title}</p>}
            {description && <p className={cn(style.description, styles)}>{description}</p>}
        </div>
    );
};
