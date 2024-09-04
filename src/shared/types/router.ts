import { ALLOWED_PATHS } from 'shared/constants/router-paths';

export enum ERoutePaths {
    MAIN = '/main',
    ABOUT = '/about',
    NOT_FOUND = '/404',
    ANY = '*'
}

export type TRoutePaths = typeof ERoutePaths[keyof typeof ERoutePaths]

export type TAllowedPaths = typeof ALLOWED_PATHS[number]