import { Route, Routes, useNavigate } from 'react-router-dom';

import { routerConfig } from 'app/config/routerConfig';
import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';
import { Layout } from 'widgets/layout';
import { ThemeSwitcher } from 'features/theme-switcher';
import { useEffect } from 'react';
import { ERoutePaths } from 'shared/types/router';
import { MenuSwitcher } from 'features/menu-switcher';
import { Navigations } from 'widgets/navigations';

export const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const navigationEntry = performance.getEntriesByType(
            'navigation',
        )[0] as PerformanceNavigationTiming;
        if (navigationEntry.type === 'reload') {
            navigate(ERoutePaths.MAIN);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Layout>
                <>
                    <Sidebar>
                        <Navigations />
                        <MenuSwitcher />
                        <ThemeSwitcher />
                    </Sidebar>
                    <div style={{ flexGrow: '1' }}>
                        <Routes>
                            {routerConfig.map(({ element, path }) => (
                                <Route element={element} path={path} key={path} />
                            ))}
                        </Routes>
                    </div>
                </>
            </Layout>
        </>
    );
};
