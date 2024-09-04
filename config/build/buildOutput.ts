import { ResolveOptions } from 'webpack';
import { BuildOptions } from '../types/webpackConfig';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],

        //Для абсолютного импорта :)
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        /*        fallback: {
            "path": require.resolve("path-browserify"),
            "util": require.resolve("util/"),
        }*/
    };
};