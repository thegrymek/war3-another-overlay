import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import SideLayout from '.';

export default {
  title: 'Atoms / SideLayout',
  component: SideLayout,
  argTypes: {
    isLeft: {
      control: {
        type: 'boolean',
        defaultValue: true,
      },
    },
    width: {
      control: {
        type: 'number',
        min: 100,
        max: 1200,
        step: 50,
      },
    },
    height: {
      control: {
        type: 'number',
        min: 10,
        max: 400,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof SideLayout>;

const Template: ComponentStory<typeof SideLayout> = args => (
  <SideLayout {...args}>Some content</SideLayout>
);

export const SimpleSideLayout = Template.bind({});
