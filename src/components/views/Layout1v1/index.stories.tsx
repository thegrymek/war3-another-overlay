import {Story, Meta} from '@storybook/react/types-6-0';
import {event, event_start, event_mid, event_late} from '../../fixtures';
import {Layout1v1Replay, Layout1v1ReplayProps} from './index';

export default {
  title: 'Views / Layout 1v1 Replay',
  component: Layout1v1Replay,
  argTypes: {
    players: {
      control: {
        type: 'select',
        options: [
          event.players,
          event_start.content.players,
          event_mid.content.players,
          event_late.content.players,
        ],
      },
    },
  },
} as Meta;

const Template: Story<Layout1v1ReplayProps> = args => (
  <Layout1v1Replay {...args} />
);

const SimpleLayout1v1Replay = Template.bind({});
SimpleLayout1v1Replay.args = {
  players: event.players,
};

export {SimpleLayout1v1Replay};
