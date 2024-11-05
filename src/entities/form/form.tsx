import { FC, memo, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from 'shared/store/slice/form-slice';
import { TFormNames } from 'shared/store/types/form-schema';
import { getCurrentFormName } from 'shared/store/selectors/form-selector';

type TFormProps = {
    formName: TFormNames;
    children: ReactElement | ReactElement[];
    className?: string;
};

export const Form: FC<TFormProps> = memo(({ formName, children, className }) => {
    const dispatch = useDispatch();
    const currentFormName = useSelector(getCurrentFormName);

    useEffect(() => {
        if (formName !== currentFormName) dispatch(formActions.setCurrentFormName(formName));
    }, [currentFormName, dispatch, formName]);

    return <form className={className}>{children}</form>;
});
