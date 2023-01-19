import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {event_1, event_start, event_mid, event_late} from '../../../fixtures';
import {Layout1v1Replay} from './index';

export default {
  title: 'Views / Layout 1v1 Replay',
  component: Layout1v1Replay,
  argTypes: {
    players: {
      control: {
        type: 'select',
        options: [
          event_1.content.players,
          event_start.content.players,
          event_mid.content.players,
          event_late.content.players,
        ],
      },
    },
  },
} as ComponentMeta<typeof Layout1v1Replay>;

const Template: ComponentStory<typeof Layout1v1Replay> = args => (
  <Layout1v1Replay {...args} />
);

const SimpleLayout1v1Replay = Template.bind({});
SimpleLayout1v1Replay.args = {
  players: event_start.content.players,
};

export {SimpleLayout1v1Replay};
