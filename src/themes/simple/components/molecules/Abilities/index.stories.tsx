import {Meta} from '@storybook/react/types-6-0';

import Abilities from '.';
import {
  LichAbilities,
  DeathKnightAbilities,
  DreadLordAbilities,
} from '../../fixtures';

export default {
  title: 'Molecules / Abilities',
  component: Abilities,
} as Meta;

export const Lich = () => <Abilities abilities={LichAbilities} />;
export const DeathKnight = () => <Abilities abilities={DeathKnightAbilities} />;
export const DreadLord = () => <Abilities abilities={DreadLordAbilities} />;
