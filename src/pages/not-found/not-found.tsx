import { Navigate, useLocation } from 'react-router-dom';
import { ERoutePaths } from 'shared/types/router';

export const NotFound = () => {
    const location = useLocation();

    if(location.state === '/') return <Navigate to={ERoutePaths.MAIN} />;

    return (
        <>
            <div>Not Found</div>
        </>
    );
};