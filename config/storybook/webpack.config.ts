import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../types/webpackConfig';
import path from 'path';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: Pick<BuildPaths, 'src'> = {
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule?.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};
