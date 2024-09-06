/*import { FC, ReactNode } from 'react';
import { useTheme } from 'shared/hooks/useTheme';

type Props = {
    children: ReactNode;
};

export const ThemeDecorator: FC<Props> = ({ children }) => {
    const { theme } = useTheme();

    return <body className={theme}>{children}</body>;
};*/

import { StoryFn, StoryContext } from '@storybook/react';

import { UiProvider } from 'shared/context/ui';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
    const {
        globals: { theme },
    } = context;

    return (
        <UiProvider>
            <body className={theme}>
                <Story />
            </body>
        </UiProvider>
    );
};
