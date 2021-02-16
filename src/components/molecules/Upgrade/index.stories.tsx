import {Story, Meta} from '@storybook/react/types-6-0';
import Upgrade, {UpgradeProps} from '.';

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
} as Meta;

const Template: Story<UpgradeProps> = args => <Upgrade {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  level: 3,
};
