import {Story, Meta} from '@storybook/react/types-6-0';
import SideLayout, {SideLayoutProps} from '.';

export default {
  title: 'Atoms / SideLayout',
  component: SideLayout,
  argTypes: {
    isLeft: {
      control: {
        type: 'boolean',
        defaultValue: true,
      },
    },
    width: {
      control: {
        type: 'number',
        min: 100,
        max: 1200,
        step: 50,
      },
    },
    height: {
      control: {
        type: 'number',
        min: 10,
        max: 400,
        step: 1,
      },
    },
  },
} as Meta;

const Template: Story<SideLayoutProps> = args => (
  <SideLayout {...args}>Some content</SideLayout>
);

export const SimpleSideLayout = Template.bind({});
