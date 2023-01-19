import {Story, Meta} from '@storybook/react/types-6-0';
import NavbarResources, {NavbarResourcesProps} from '.';
import {
  elfUpgrades,
  elfRangedUpgrades,
  elfMeleeUpgrades,
  elfCastersUpgrades,
} from '../../fixtures';
import {colors} from '../../Theme';

export default {
  title: 'Organisms / Navbar Resources',
  component: NavbarResources,
  argTypes: {
    race: {
      control: {
        type: 'select',
        options: ['undead', 'nightelf', 'human', 'orc'],
      },
    },
    upgrades: {
      control: {
        type: 'select',
        options: [
          elfRangedUpgrades,
          elfMeleeUpgrades,
          elfCastersUpgrades,
          elfUpgrades,
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors.player.gradient),
      },
    },
  },
} as Meta;

const Template: Story<NavbarResourcesProps> = args => (
  <NavbarResources {...args} />
);

const SimpleNavbarResources = Template.bind({});
SimpleNavbarResources.args = {
  color: 'teal',
  race: 'nightelf',
  playerName: 'Player Name',
  gold: 750,
  lumber: 500,
  food: 30,
  maxFood: 51,
  armyFood: 50,
  workersFood: 10,
  upgrades: elfUpgrades,
};

export {SimpleNavbarResources};
