import { ERoutePaths } from 'shared/types/router';
import cn from './style.module.css';

import { useNavigate } from 'react-router-dom';
export const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <section className={cn.aboutPage}>
            <button onClick={() => navigate(ERoutePaths.MAIN)}>Click!</button>
        </section>
    );
};