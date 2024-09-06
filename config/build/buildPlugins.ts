import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpack, { WebpackPluginInstance, HotModuleReplacementPlugin } from 'webpack';
import { BuildOptions } from '../types/webpackConfig';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const NodeConfigWebpack = require('node-config-webpack');
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: options.paths.html,
        }),
        new webpack.ProgressPlugin(),
        // @Todo: разобраться, нужен ли этот плагин в связке с postcss
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new NodeConfigWebpack(),
        new HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ];
};
