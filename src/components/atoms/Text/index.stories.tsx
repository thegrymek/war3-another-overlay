import {Story, Meta} from '@storybook/react/types-6-0';
import Text, {TextProps} from '.';

export default {
  title: 'Atoms / Text',
  component: Text,
  argTypes: {
    size: {
      control: {type: 'number', min: 7, max: 32, step: 1},
    },
  },
} as Meta;

const Template: Story<TextProps> = args => <Text {...args}>Simple Text</Text>;

export const Default = Template.bind({});
Default.args = {
  size: 20,
};
