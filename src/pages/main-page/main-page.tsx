import { ERoutePaths } from 'shared/types/router';
import cn from './style.module.css';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
    const navigate = useNavigate();

    return (
        <section className={cn.mainPage}>
            <button onClick={() => navigate(ERoutePaths.ABOUT)}>navigate to about :)</button>
        </section>
    );
};
