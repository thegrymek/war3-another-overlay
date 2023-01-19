import {
  W3AbilityProps,
  W3UnitProps,
  W3UpgradeProps,
  W3ItemProps,
} from '../../w3/interfaces';

import * as event_start from '../../events/event_1v1_start_game.json';
import * as event_mid from '../../events/event_1v1_mid_game.json';
import * as event_late from '../../events/event_1v1_late_game.json';
import * as event_1 from '../../events/event_1.json';

export {event_1, event_start, event_mid, event_late};

const item1: W3ItemProps = {id: 'gcel', slot: 0, cooldown: 0, charges: 0};
const item2: W3ItemProps = {id: 'cnob', slot: 1, cooldown: 0, charges: 0};
const item3: W3ItemProps = {id: 'afac', slot: 2, cooldown: 0, charges: 0};
const item4: W3ItemProps = {id: 'rag1', slot: 3, cooldown: 0, charges: 0};
const item5: W3ItemProps = {id: 'rnec', slot: 4, cooldown: 0, charges: 4};
const item6: W3ItemProps = {id: 'rnec', slot: 5, cooldown: 12, charges: 3};

export const twoItems = [item1, item3];
export const fourItems = [item2, item4, item3, item6];
export const allItems = [item1, item2, item3, item4, item5, item6];

const dkAbility1: W3AbilityProps = {id: 'AUdc', level: 3, cooldown: 0};
const dkAbility2: W3AbilityProps = {id: 'AUau', level: 2, cooldown: 0};
const dkAbility3: W3AbilityProps = {id: 'AUau', level: 1, cooldown: 0};
const dkAbility4: W3AbilityProps = {id: 'AUau', level: 1, cooldown: 0};
export const DeathKnightAbilities = [
  dkAbility1,
  dkAbility2,
  dkAbility3,
  dkAbility4,
];

const lichAbility1: W3AbilityProps = {id: 'AUfn', level: 2, cooldown: 0};
const lichAbility2: W3AbilityProps = {id: 'AUdr', level: 1, cooldown: 12};
export const LichAbilities = [lichAbility1, lichAbility2];

const dlAbility1: W3AbilityProps = {id: 'AUsl', level: 2, cooldown: 0};
export const DreadLordAbilities = [dlAbility1];

const elfUpgrade1: W3UpgradeProps = {
  class: 'MELEE',
  id: 'Resw',
  level: 1,
  levelMax: 3,
};
const elfUpgrade2: W3UpgradeProps = {class: 'RANGED', id: 'Rehs', level: 1};
const elfUpgrade3: W3UpgradeProps = {class: 'NONE', id: 'Renb', level: 1};
const elfUpgrade4: W3UpgradeProps = {class: 'MELEE', id: 'Rews', level: 1};
const elfUpgrade5: W3UpgradeProps = {class: 'RANGED', id: 'Recb', level: 1};
const elfUpgrade6: W3UpgradeProps = {
  class: 'CASTER',
  id: 'Resm',
  level: 3,
  levelMax: 3,
};
export const elfMeleeUpgrades = [elfUpgrade1, elfUpgrade4];
export const elfRangedUpgrades = [elfUpgrade1, elfUpgrade5];
export const elfCastersUpgrades = [elfUpgrade6];
export const elfUpgrades = [
  elfUpgrade1,
  elfUpgrade2,
  elfUpgrade3,
  elfUpgrade4,
  elfUpgrade5,
  elfUpgrade6,
];

const elfUnit1: W3UnitProps = {id: 'ngir', alive_count: 1, total_count: 1};
const elfUnit2: W3UnitProps = {id: 'edoc', alive_count: 3, total_count: 0};
const elfUnit3: W3UnitProps = {id: 'earc', alive_count: 15, total_count: 12};
const elfUnit4: W3UnitProps = {id: 'echm', alive_count: 3, total_count: 21};
const elfUnit5: W3UnitProps = {id: 'edcm', alive_count: 1, total_count: 1};
const elfUnit6: W3UnitProps = {id: 'ewsp', alive_count: 21, total_count: 2};
export const elfUnits = [
  elfUnit1,
  elfUnit2,
  elfUnit3,
  elfUnit4,
  elfUnit5,
  elfUnit6,
];
