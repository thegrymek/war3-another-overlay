import {Story, Meta} from '@storybook/react/types-6-0';
import {StyledProgressBar, ProgressBarProps} from '.';

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
} as Meta;

const Template: Story<ProgressBarProps> = args => (
  <StyledProgressBar {...args} />
);

export const SimpleProgressBar = Template.bind({});
SimpleProgressBar.args = {
  value: 0.3,
  color: 'red',
  height: 5,
};
