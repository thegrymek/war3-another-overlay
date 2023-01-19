import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Text, {TextProps} from '.';

export default {
  title: 'Atoms / Text',
  component: Text,
  argTypes: {
    size: {
      control: {type: 'number', min: 7, max: 32, step: 1},
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => (
  <Text {...args}>Simple Text</Text>
);

export const Default = Template.bind({});
Default.args = {
  size: 20,
};
