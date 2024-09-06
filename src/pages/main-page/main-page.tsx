import { ERoutePaths } from 'shared/types/router';
import cn from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MainPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <section className={cn.mainPage}>
            <button onClick={() => navigate(ERoutePaths.ABOUT)}>navigate to about :)</button>
            <button onClick={() => setError(true)}>throw Error :D</button>
        </section>
    );
};
