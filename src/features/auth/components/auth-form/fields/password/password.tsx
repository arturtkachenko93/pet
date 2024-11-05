import { Input } from 'shared/core-ui/input/input';
import { useInput } from 'shared/hooks/use-input';
import { FC } from 'react';
import { TFormFieldsName } from 'shared/store/types/form-schema';

type TPassword = {
    name: TFormFieldsName;
};

export const Password: FC<TPassword> = (props) => {
    const { value, onChange } = useInput(props);

    return <Input onChange={onChange} defaultValue={value} />;
};
