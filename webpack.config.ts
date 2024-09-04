import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, Mode } from './config/types/webpackConfig';


const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', '_index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src')
};

const MODE: Mode = 'development';

export default () => buildWebpackConfig({
    mode: 'development',
    paths,
    isDevMode: process.env.NODE_ENV === MODE,
    port: process.env.PORT|| 3001
});