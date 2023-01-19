import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StyledProgressBar} from '.';

export default {
  title: 'Atoms / ProgressBar',
  component: StyledProgressBar,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['red', 'blue', 'purple'],
      },
    },
    value: {
      control: {
        type: 'number',
        min: 0.01,
        max: 1,
        step: 0.05,
      },
    },
  },
} as ComponentMeta<typeof StyledProgressBar>;

const Template: ComponentStory<typeof StyledProgressBar> = args => (
  <StyledProgressBar {...args} />
);

export const SimpleProgressBar = Template.bind({});
SimpleProgressBar.args = {
  value: 0.3,
  color: 'red',
  height: 45,
};
