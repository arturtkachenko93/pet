import cn from './style.module.css';
import { Button } from 'shared/core-ui';
import { ERoutePaths } from 'shared/types/router';

export const Error = () => {
    return (
        <section className={cn.error}>
            Произошла ошибка
            <Button className={cn.button} onClick={() => (window.location.href = ERoutePaths.MAIN)}>
                Вернуться на главную
            </Button>
        </section>
    );
};
