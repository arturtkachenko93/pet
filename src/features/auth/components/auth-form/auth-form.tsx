import { Button } from 'shared/core-ui';

import { Form } from 'entities/form';
import { Login } from './fields/login/login';
import { Password } from 'features/auth/components/auth-form/fields/password/password';

import { authByUsername } from 'features/auth';
import {
    formErrorSelector,
    formIsLoadingSelector,
    getStoreValueSelector,
} from 'shared/store/selectors/form-selector';
import { useAppDispatch } from 'shared/hooks/use-app-dispatch';
import { useAppSelector } from 'shared/hooks/use-app-selector';
import { Text } from 'shared/core-ui/text/text';

import style from './style.module.css';
const AuthForm = () => {
    const dispatch = useAppDispatch();

    const error = useAppSelector(formErrorSelector);
    const isLoading = useAppSelector(formIsLoadingSelector);
    const username = useAppSelector(getStoreValueSelector('authForm', 'login'));
    const password = useAppSelector(getStoreValueSelector('authForm', 'password'));

    const handleAuth = () => {
        dispatch(authByUsername({ username, password }));
    };

    return (
        <Form formName='authForm' className={style.form}>
            {error && <Text title={error} view='alert' />}
            <Login name='login' />
            <Password name='password' />
            <Button onClick={handleAuth} isLoading={isLoading}>
                Войти
            </Button>
        </Form>
    );
};

export default AuthForm;
