import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import IconWrapper from '.';

export default {
  title: 'Atoms / IconWrapper',
  component: IconWrapper,
  argTypes: {
    id: {
      control: {
        type: 'select',
        options: ['will', 'tgrh', 'thle', 'tint'],
      },
    },
    width: {
      control: {type: 'number', min: 12, max: 96, step: 3},
    },
    height: {
      control: {type: 'number', min: 12, max: 96, step: 3},
    },
    grayScale: {
      control: {type: 'number', min: 0, max: 100, step: 5},
    },
    contained: {
      control: {type: 'boolean'},
    },
  },
} as ComponentMeta<typeof IconWrapper>;

const Template: ComponentStory<typeof IconWrapper> = args => (
  <IconWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  width: 64,
  height: 64,
};
