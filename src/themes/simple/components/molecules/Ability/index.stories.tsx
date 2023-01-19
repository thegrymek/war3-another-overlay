import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Ability, {AbilityProps} from '.';

export default {
  title: 'Molecules / Ability',
  component: Ability,
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
  },
} as ComponentMeta<typeof Ability>;

const Template: ComponentStory<typeof Ability> = args => <Ability {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  level: 3,
};
