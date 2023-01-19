import {Story, Meta} from '@storybook/react/types-6-0';
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
} as Meta;

const Template: Story<AbilityProps> = args => <Ability {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  level: 3,
};
