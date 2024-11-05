import { Input } from 'shared/core-ui/input/input';
import { useInput } from 'shared/hooks/use-input';
import { FC } from 'react';
import { TFormFieldsName } from 'shared/store/types/form-schema';

type TLoginProps = {
    name: TFormFieldsName;
};

export const Login: FC<TLoginProps> = (props) => {
    const { onChange, value } = useInput(props);

    return (
        <Input
            onChange={onChange}
            defaultValue={value}
            view='programmers'
            placeholder='Введите логин'
            autoFocus
        />
    );
};
