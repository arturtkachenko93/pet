import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types/webpackConfig';

export const buildLoaders = (options: BuildOptions): RuleSetRule => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.css/i,
        use: [
            options.isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: {
                        auto: (respPath: string) => Boolean(respPath.includes('.module.')),
                        localIdentName:
                            options.isDevMode ?
                                '[folder]__[local]--[hash:base64:9]' : '[hash:base64:9]',
                        exportLocalsConvention: 'camelCase',
                    },
                    esModule: false,
                }
            },
            'postcss-loader'
        ],
    };

    const assetLoader = {
        test: /\.(woff|woff2|eot|ttf|otf|jpg|png|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const svgLoader =       {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
    };

    return {
        rules: [
            tsLoader,
            cssLoader,
            svgLoader,
            assetLoader
        ],
    };
};