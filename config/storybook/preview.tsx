import type { Preview } from '@storybook/react';
import { ThemeDecorator } from './decorators/theme-decorator';
import { StyleDecorator } from './decorators/style-decorator';
import { RouterDecorator } from './decorators/router-decorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            toolbar: {
                icon: 'circlehollow',
                items: [
                    { value: 'default', title: 'Default' },
                    { value: 'dark', title: 'Dark' },
                ],
                showName: true,
                dynamicTitle: true,
            },
        },
    },
    decorators: [(Story, context) => ThemeDecorator(Story, context), StyleDecorator, RouterDecorator],
};
export default preview;
