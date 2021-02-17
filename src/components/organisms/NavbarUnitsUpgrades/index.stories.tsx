import {Story, Meta} from '@storybook/react/types-6-0';
import NavbarUnitsUpgrades, {NavBarUnitsUpgradesProps} from '.';
import {elfUnits, elfUpgrades} from '../../fixtures';
import {colors} from '../../Theme';

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
} as Meta;

const Template: Story<NavBarUnitsUpgradesProps> = args => (
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
