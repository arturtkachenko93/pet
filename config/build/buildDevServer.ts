import { BuildOptions } from '../types/webpackConfig';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
export const buildDevServer = (port: BuildOptions['port']): DevServerConfiguration  => {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    };
};