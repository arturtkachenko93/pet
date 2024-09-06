export enum ETheme {
    DEFAULT = 'default',
    DARK = 'dark',
}

export type Theme = typeof ETheme[keyof typeof ETheme];

export type TThemeContext = {
    theme?: Theme;
    setTheme?: (theme: ETheme) => void;
};

export type TUiContext = TThemeContext & { foldMenu: boolean; setFoldMenu: (fold: boolean) => void };
