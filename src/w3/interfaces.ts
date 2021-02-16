export interface W3UpgradeProps {
  class: string;
  id: string;
  level: number;
  levelMax?: number;
}
export interface W3UnitProps {
  id: string;
  alive_count: number;
  total_count: number;
  is_worker?: boolean;
  is_busy_worker?: boolean;
}
export interface W3AbilityProps {
  id: string;
  level?: number;
  cooldown?: number;
}
export interface W3ItemProps {
  id: string;
  charges?: number;
  cooldown?: number;
  slot: number;
}
export interface W3HeroShortProps {
  id: string;
  level: number;
  isDead?: boolean;
}
export interface W3HeroProps {
  id: string;
  level: number;
  abilities: W3AbilityProps[];
  items: W3ItemProps[];

  hitpoints: number;
  hitpointsMax: number;
  mana: number;
  manaMax: number;
  experience: number;
  experienceMax: number;
}
export interface W3PlayerProps {
  color: string;
  playerName: string;
  race: string;
  gold: number;
  lumber: number;
  food: number;
  maxFood: number;
  reverse?: boolean;
  armyFood?: number;
  workersFood?: number;
  apm?: number;
  ping?: number;
  upgrades: W3UpgradeProps[];
  heroes: W3HeroProps[];
}
export interface W3GameProps {
  refresh_rate: number;
  is_in_game: boolean;
  game_time: number;
  players_count: number;
  game_name: string;
  map_name: string;
}
export interface W3Event {
  game: W3GameProps;
  players: W3PlayerProps[];
}
