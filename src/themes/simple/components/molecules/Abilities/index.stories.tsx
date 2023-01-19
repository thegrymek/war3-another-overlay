import React from 'react';
import {ComponentMeta} from '@storybook/react';

import Abilities from '.';
import {
  LichAbilities,
  DeathKnightAbilities,
  DreadLordAbilities,
} from '../../../fixtures';

export default {
  title: 'Molecules / Abilities',
  component: Abilities,
} as ComponentMeta<typeof Abilities>;

export const Lich = () => <Abilities abilities={LichAbilities} />;
export const DeathKnight = () => <Abilities abilities={DeathKnightAbilities} />;
export const DreadLord = () => <Abilities abilities={DreadLordAbilities} />;
