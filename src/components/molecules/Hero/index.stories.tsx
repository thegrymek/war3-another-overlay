import {Story, Meta} from '@storybook/react/types-6-0';
import Hero, {HeroProps} from '.';

export default {
  title: 'Molecules / Hero',
  component: Hero,
  argTypes: {
    id: {
      control: {
        type: 'select',
        options: ['will', 'tgrh', 'thle', 'tint'],
      },
    },
    level: {
      control: {type: 'number', min: 0, max: 10, step: 1},
    },
  },
} as Meta;

const Template: Story<HeroProps> = args => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  level: 3,
};
