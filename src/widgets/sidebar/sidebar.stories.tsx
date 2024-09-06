import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './sidebar';
import { MenuSwitcher } from 'features/menu-switcher';
import { ThemeSwitcher } from 'features/theme-switcher';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    subcomponents: { MenuSwitcher, ThemeSwitcher },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SidebarDesktop: Story = {
    render: (argTypes) => (
        <div style={{ display: 'flex', width: '800px', height: '500px' }}>
            <Sidebar {...argTypes}>
                <ThemeSwitcher />
                <MenuSwitcher />
            </Sidebar>
        </div>
    ),
};
