import {
    ChangeEvent,
    FC,
    HTMLAttributes,
    memo,
    SyntheticEvent,
    useCallback,
    useRef,
    useState,
} from 'react';
import cn from 'classnames';
import style from './style.module.css';

type TInputProps = Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> & {
    className?: string;
    onChange?: (value: string) => void;
    type?: string;
    view?: 'default' | 'programmers';
    placeholder?: string;
};

export const Input: FC<TInputProps> = memo((props) => {
    const {
        className,
        onChange,
        type = 'text',
        view = 'default',
        placeholder = '',
        ...otherProps
    } = props;

    const styles = {
        [style[view]]: view,
    };

    const isProgView = view === 'programmers';
    const inputRef = useRef<HTMLInputElement>(null);
    const inputWidth = inputRef?.current?.clientWidth;

    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);

        const currentValueLength = e?.target?.value.length * 9;
        const caretPositionValue =
            inputWidth < currentValueLength ? inputWidth : currentValueLength;

        setCaretPosition(caretPositionValue);
    };

    const onSelectHandler = (e: SyntheticEvent<HTMLInputElement, Event>) => {
        const currentValueLength = e?.currentTarget?.selectionStart * 9;
        const caretPositionValue =
            inputWidth < currentValueLength ? inputWidth : currentValueLength;

        setCaretPosition(caretPositionValue);
    };

    const Component = useCallback(() => {
        if (isProgView) {
            return (
                <>
                    <span className={style.placeholder}>
                        {placeholder}
                        {' >'}
                    </span>
                    <div className={style.inputWrapperCaret}>
                        <input
                            className={cn(style.input, style[view])}
                            type={type}
                            onChange={onChangeHandler}
                            onSelect={onSelectHandler}
                            ref={inputRef}
                            {...otherProps}
                        />
                        <span className={style.caret} style={{ left: `${caretPosition}px` }}></span>
                    </div>
                </>
            );
        }

        return (
            <input
                className={cn(style.input, style[view])}
                type={type}
                onChange={onChangeHandler}
                placeholder={placeholder}
                ref={inputRef}
                {...otherProps}
            />
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props, caretPosition]);

    return <div className={cn(style.inputWrapper, styles, className)}>{Component()}</div>;
});
