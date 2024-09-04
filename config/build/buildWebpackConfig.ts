import webpack from 'webpack';
import { buildResolvers } from './buildOutput';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { BuildOptions } from '../types/webpackConfig';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { paths, mode, isDevMode, port } = options;

    return {
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        mode,
        plugins: buildPlugins(options),
        module: buildLoaders(options),
        resolve: buildResolvers(options),
        devtool: isDevMode ? 'inline-source-map' : undefined,
        devServer: isDevMode ? buildDevServer(port) : undefined
    };
};