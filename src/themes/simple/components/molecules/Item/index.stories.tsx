import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Item from '.';

export default {
  title: 'Molecules / Item',
  component: Item,
  argTypes: {
    id: {
      control: {
        type: 'select',
        options: ['will', 'tgrh', 'thle', 'tint'],
      },
    },
    charges: {
      control: {type: 'number', min: 0, max: 5, step: 1},
    },
    cooldown: {
      control: {type: 'number', min: 0, max: 25, step: 1},
    },
  },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = args => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  charges: 3,
};
