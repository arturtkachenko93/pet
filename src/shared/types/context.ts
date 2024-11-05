export enum ETheme {
    DEFAULT = 'default',
    DARK = 'dark',
}

export type Context = typeof ETheme[keyof typeof ETheme];

export type TThemeContext = {
    theme?: Context;
    setTheme?: (theme: ETheme) => void;
};

export type TUiContext = TThemeContext & {
    foldMenu: boolean;
    setFoldMenu: (fold: boolean) => void;
};
