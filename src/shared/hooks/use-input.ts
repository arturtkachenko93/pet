import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFormName, getStoreValueSelector } from 'shared/store/selectors/form-selector';
import { formActions, formReducer } from 'shared/store/slice/form-slice';
import { TFormFieldsName } from 'shared/store/types/form-schema';
import { useCallback } from 'react';
import { TReducersList, useDynamicModuleLoader } from 'shared/hooks/use-dynamic-module-loader';

type TUseInputProps = {
    name: TFormFieldsName;
    onChange?: (value: string) => void;
};

const initialReducersList: TReducersList = { form: formReducer };

export const useInput = (props: TUseInputProps) => {
    const { name, onChange } = props;

    const dispatch = useDispatch();
    const formName = useSelector(getCurrentFormName);
    const storeFieldValue = useSelector(getStoreValueSelector(formName, name));

    useDynamicModuleLoader({
        reducersList: initialReducersList,
        removeAfterUnmount: false,
    });

    const handleChange = useCallback(
        (value: string) => {
            onChange?.(value);

            dispatch(
                formActions.saveFieldValue({
                    formName: formName,
                    name: name,
                    value,
                }),
            );
        },
        [dispatch, formName, name, onChange],
    );

    return {
        onChange: handleChange,
        value: storeFieldValue,
    };
};
