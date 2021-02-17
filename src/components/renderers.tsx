import HeroLayout from './organisms/HeroLayout';
import NavbarResources from './organisms/NavbarResources';
import NavbarUnitsUpgrades from './organisms/NavbarUnitsUpgrades';
import {W3HeroProps, W3PlayerProps} from '../w3/interfaces';
import {
  countTotalUnits,
  countTotalWorkers,
  TEAM_INDEX_COLORS,
} from '../w3/tools';

export function renderHero(hero: W3HeroProps, reverse?: boolean) {
  return (
    <HeroLayout
      id={hero['id']}
      level={hero['level']}
      abilities={hero['abilities']}
      items={hero['inventory']}
      hitpoints={hero['hitpoints']}
      hitpointsMax={hero['hitpoints_max']}
      mana={hero['mana']}
      manaMax={hero['mana_max']}
      experience={hero['experience']}
      experienceMax={hero['experience_max']}
      reverse={reverse}
    />
  );
}

export function renderNavbarResources(
  player: W3PlayerProps,
  reverse?: boolean
) {
  const color = TEAM_INDEX_COLORS[player['team_color']];
  const totalUnits = countTotalUnits(player['units_on_map']);
  const totalWorkers = countTotalWorkers(player['units_on_map']);

  return (
    <NavbarResources
      color={color}
      race={player['race_preference'].toLowerCase()}
      heroes={[]}
      playerName={player['name']}
      gold={player['gold']}
      lumber={player['lumber']}
      food={player['food']}
      maxFood={player['food_max']}
      showArmyFood={true}
      armyFood={totalUnits}
      showWorkersFood={true}
      workersFood={totalWorkers}
      showApm={true}
      apm={player['apm']}
      showPing={true}
      ping={player['ping']}
      upgrades={player['upgrades_completed']}
      reverse={reverse}
    />
  );
}

export function renderNavbarUnitsUpgrades(
  player: W3PlayerProps,
  reverse?: boolean
) {
  const color = TEAM_INDEX_COLORS[player['team_color']];
  return (
    <NavbarUnitsUpgrades
      color={color}
      units={player['units_on_map']}
      upgrades={player['upgrades_completed']}
      showUpgrades={true}
      showMeleeUpgrades={false}
      showRangedUpgrades={false}
      showCasterUpgrades={false}
      showRestUpgrades={true}
      showUnits={true}
      reverse={reverse}
    />
  );
}
