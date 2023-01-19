import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import NavbarUnitsUpgrades from '.';
import {elfUnits, elfUpgrades} from '../../../fixtures';
import {colors} from '../../../settings';

export default {
  title: 'Organisms / Navbar Units Upgrades',
  component: NavbarUnitsUpgrades,
  argTypes: {
    race: {
      control: {
        type: 'upgrades',
        options: [elfUnits],
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors.player.gradient),
      },
    },
  },
} as ComponentMeta<typeof NavbarUnitsUpgrades>;

const Template: ComponentStory<typeof NavbarUnitsUpgrades> = args => (
  <NavbarUnitsUpgrades {...args} />
);

const ElfNavbarUnitsUpgrades = Template.bind({});
ElfNavbarUnitsUpgrades.args = {
  color: 'red',
  units: elfUnits,
  upgrades: elfUpgrades,
  showUnits: true,
  showUpgrades: true,
  showMeleeUpgrades: true,
  showRangedUpgrades: true,
  showCasterUpgrades: true,
  showRestUpgrades: true,
};
export {ElfNavbarUnitsUpgrades};
