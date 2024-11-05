import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './modal';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ModalDesktop: Story = {
    render: (args) => <Modal {...args}>Мodal</Modal>,
};
