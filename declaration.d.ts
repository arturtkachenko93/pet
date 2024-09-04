declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.svg' {
    const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default svg;
}

declare module '*.png';
declare module '*.jpeg';
