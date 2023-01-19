import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Hero from '.';

export default {
  title: 'Molecules / Hero',
  component: Hero,
  argTypes: {
    id: {
      control: {
        type: 'select',
        options: ['will', 'tgrh', 'thle', 'tint'],
      },
    },
    level: {
      control: {type: 'number', min: 0, max: 10, step: 1},
    },
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = args => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  level: 3,
};
