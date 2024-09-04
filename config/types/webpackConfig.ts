export type BuildPaths = {
    entry: string;
    output: string;
    html: string;
    public: string;
    src: string;
}

export type Mode = 'development' | 'production'

export type Env = {
    port: number;
    mode: Mode
}

export type BuildOptions = {
    mode: Mode;
    paths: BuildPaths,
    isDevMode: boolean,
    port: number | string
}