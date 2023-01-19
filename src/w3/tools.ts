import {
  W3UpgradeProps,
  W3UnitProps,
  W3ItemProps,
  W3AbilityProps,
  W3PlayerProps,
} from './interfaces';
import {HERO_SIMPLE_ABILITIES, ITEM_EMPTY_ICON} from './constants';
import {INumberedDictType} from './types';

//
// Abilities
//

// Function that returns:
// * false: if ability is like: move, attack, hold
// * true: if ability is unique on hero
export function dropHeroSimpleAbilities(ability: W3AbilityProps): boolean {
  if (HERO_SIMPLE_ABILITIES.includes(ability.id)) return false;
  if (!ability.id.match(/^A[HOEUN]/)) return false;
  return true;
}

// Return `true` if item/ability is on coldown
// If item/ability does not have colddown returns `false`
export function isOnColddown(
  itemOrAbility: W3AbilityProps | W3ItemProps
): boolean {
  if (!itemOrAbility.cooldown) return false;
  if (itemOrAbility.cooldown > 0) return true;
  return false;
}

// Returns coldown rounded to 0 decimals
// If colddown is not defined - return empty string
export function getColddown(
  itemOrAbility: W3AbilityProps | W3ItemProps
): number | undefined {
  if (itemOrAbility.cooldown === undefined) return undefined;
  if (!isOnColddown(itemOrAbility)) return 0;
  return Math.floor(itemOrAbility.cooldown);
}

//
// Upgrades
//
export function getMelleUpgrades(upgrades: W3UpgradeProps[]): W3UpgradeProps[] {
  return upgrades.filter(upgrade => upgrade.class === 'MELEE');
}

export function getRangedUpgrades(
  upgrades: W3UpgradeProps[]
): W3UpgradeProps[] {
  return upgrades.filter(upgrade => upgrade.class === 'RANGED');
}

export function getCasterUpgrades(
  upgrades: W3UpgradeProps[]
): W3UpgradeProps[] {
  return upgrades.filter(upgrade => upgrade.class === 'CASTER');
}

export function getNoneUpgrades(upgrades: W3UpgradeProps[]): W3UpgradeProps[] {
  return upgrades.filter(upgrade => upgrade.class === 'NONE');
}

export function isWorker(unit: W3UnitProps): boolean {
  return unit['is_worker'] === true || unit['is_busy_worker'] === true;
}

export function isUnit(unit: W3UnitProps): boolean {
  return !isWorker(unit);
}

export function countTotalUnits(unitsOnMap: W3UnitProps[]): number {
  return unitsOnMap
    .filter(isUnit)
    .map((unit: W3UnitProps) => unit['total_count'])
    .reduce((accumulator: number, value: number) => accumulator + value, 0);
}

export function countTotalWorkers(unitsOnMap: W3UnitProps[]): number {
  return unitsOnMap
    .filter(isWorker)
    .map((unit: W3UnitProps) => unit['total_count'])
    .reduce((accumulator: number, value: number) => accumulator + value, 0);
}

/** Slots numbering from w3.
 *
 * First item has slot 0 and last 5. We cannot have
 * more items than six.
 */
export const INVENTORY_SLOTS = [0, 1, 2, 3, 4, 5];

export const EmptyItem: W3ItemProps = {
  id: ITEM_EMPTY_ICON,
  slot: -1,
};

/**
 * Groups items by slot and maps list to dictionary
 *
 * @param items list of items from inventory
 * @returns Example:
 *   > items = [
 *     {src: "wil", slot: 0},
 *     {src: "abd", slot: 3},
 *     {src: "zxc", slot: 4}
 *   ]
 *   > groupInventory(items)
 *   {
 *     0: {src: "wil", slot: 0},
 *     3: {src: "abd", slot: 3},
 *     4: {src: "zxc", slot: 4}
 *   }
 */
export function groupInventory(
  items: W3ItemProps[]
): INumberedDictType<W3ItemProps> {
  return items.reduce(
    (_result: INumberedDictType<W3ItemProps>, item: W3ItemProps) => ({
      ..._result,
      [item.slot]: {...item},
    }),
    {}
  );
}

/**
 * Returns empty directory for every slot
 * @returns
 *   > createEmptyInventory()
 *   {
 *     0: EmptyItem,
 *     1: EmptyItem,
 *     2: EmptyItem,
 *     3: EmptyItem,
 *     4: EmptyItem,
 *     5: EmptyItem,
 *   }
 */
export function createEmptyInventory(): INumberedDictType<W3ItemProps> {
  return {
    0: EmptyItem,
    1: EmptyItem,
    2: EmptyItem,
    3: EmptyItem,
    4: EmptyItem,
    5: EmptyItem,
  };
}

export function checkPlayers(players?: W3PlayerProps[]): boolean {
  if (!players) return false;
  if (players.length === 0) return false;
  return true;
}

export function sortPlayers(players: W3PlayerProps[]): W3PlayerProps[] {
  return players.sort(
    (player1: W3PlayerProps, player2: W3PlayerProps) =>
      player1['id'] - player2['id']
  );
}

export function isPlayerPlaying(player: W3PlayerProps): boolean {
  return player['slot_state'] === 'PLAYING';
}
