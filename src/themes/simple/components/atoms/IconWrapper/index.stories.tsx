import {Story, Meta} from '@storybook/react/types-6-0';

import IconWrapper, {IconWrapperProps} from '.';

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
} as Meta;

const Template: Story<IconWrapperProps> = args => <IconWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  width: 64,
  height: 64,
};
