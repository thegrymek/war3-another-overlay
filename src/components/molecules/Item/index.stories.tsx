import {Story, Meta} from '@storybook/react/types-6-0';
import Item, {ItemProps} from '.';

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
} as Meta;

const Template: Story<ItemProps> = args => <Item {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  charges: 3,
};
