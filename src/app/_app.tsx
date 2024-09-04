import { Route, Routes, useNavigate } from 'react-router-dom';

import { routerConfig } from 'app/config/routerConfig';
import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';
import { Layout } from 'widgets/layout';
import { ThemeSwitcher } from 'features/theme-switcher';
import { useEffect } from 'react';
import { ERoutePaths } from 'shared/types/router';

export const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry.type === 'reload') {
            navigate(ERoutePaths.MAIN);
        }
    }, []);


    return (
        <>
            <Header />
            <Layout>
                <>
                    <Sidebar>
                        <ThemeSwitcher />
                    </Sidebar>
                    <div style={{ flexGrow: '1' }}>
                        <Routes>
                            {routerConfig.map(({ element, path }) => (
                                <Route element={element} path={path} key={path}/>
                            ))}
                        </Routes>
                    </div>
                </>
            </Layout>
        </>
    );
};

