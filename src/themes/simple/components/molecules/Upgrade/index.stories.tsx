import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Upgrade from '.';

export default {
  title: 'Molecules / Upgrade',
  component: Upgrade,
  argTypes: {
    id: {
      control: {
        type: 'select',
        options: ['will', 'tgrh', 'thle', 'tint'],
      },
    },
    level: {
      control: {type: 'number', min: 1, max: 3, step: 1},
    },
    levelMax: {
      control: {type: 'number', min: 1, max: 3, step: 1},
    },
  },
} as ComponentMeta<typeof Upgrade>;

const Template: ComponentStory<typeof Upgrade> = args => <Upgrade {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  level: 3,
};
