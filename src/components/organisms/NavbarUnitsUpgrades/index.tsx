import React from 'react';
import {PLAYER_BORDER_COLOR, PLAYER_GRADIENTS} from '../../../config';
import {W3UnitProps, W3UpgradeProps} from '../../../w3/interfaces';
import {
  getCasterUpgrades,
  getMelleUpgrades,
  getNoneUpgrades,
  getRangedUpgrades,
} from '../../../w3/tools';
import Unit from '../../molecules/Unit';
import Upgrade from '../../molecules/Upgrade';

export interface UnitsUpgradesProps {
  color: string;
  units: W3UnitProps[];
  upgrades: W3UpgradeProps[];
}
export interface NavbarUnitsUpgradesConfigProps {
  reverse?: boolean;
  showUnits?: boolean;
  showUpgrades?: boolean;
  showMeleeUpgrades?: boolean;
  showRangedUpgrades?: boolean;
  showCasterUpgrades?: boolean;
  showRestUpgrades?: boolean;
}
export interface NavBarUnitsUpgradesProps
  extends NavbarUnitsUpgradesConfigProps,
    UnitsUpgradesProps {}

export default class NavbarUnitsUpgrades extends React.Component<
  NavBarUnitsUpgradesProps
> {
  public static defaultProps = {
    showUnits: true,
    showUpgrades: true,
    showMeleeUpgrades: true,
    showRangedUpgrades: true,
    showCasterUpgrades: true,
    showRestUpgrades: true,
  };

  renderUpgrade(upgrade: W3UpgradeProps) {
    return (
      <Upgrade
        key={upgrade.id}
        class={upgrade.class}
        id={upgrade.id}
        level={upgrade.level}
        levelMax={upgrade.levelMax}
      />
    );
  }

  renderUnit(unit: W3UnitProps) {
    return (
      <Unit
        key={unit.id}
        id={unit.id}
        alive_count={unit.alive_count}
        total_count={unit.total_count}
      />
    );
  }

  render() {
    const melleUpgrades = getMelleUpgrades(this.props.upgrades);
    const rangedUpgrades = getRangedUpgrades(this.props.upgrades);
    const casterUpgrades = getCasterUpgrades(this.props.upgrades);
    const noneUpgrades = getNoneUpgrades(this.props.upgrades);

    const navbarClassNames = [
      'flex flex-nowrap',
      'bg-black',
      'p-0 m-0',
      'text-white font-bold',
      'border-b-4',
      PLAYER_BORDER_COLOR[this.props.color],
      PLAYER_GRADIENTS[this.props.color],
    ];
    if (this.props.reverse === true) {
      navbarClassNames.push('flex-row-reverse');
      navbarClassNames.push('text-left');
      navbarClassNames.push('border-r-4 rounded-br-lg');
      navbarClassNames.push('bg-gradient-to-bl');
    } else {
      navbarClassNames.push('flex-row');
      navbarClassNames.push('text-right');
      navbarClassNames.push('border-l-4 rounded-bl-lg');
      navbarClassNames.push('bg-gradient-to-br');
    }

    return (
      <div className={navbarClassNames.join(' ')}>
        {/*
            Units
        */}
        {this.props.showUnits &&
          this.props.units.map(unit => this.renderUnit(unit))}
        {/*
            Upgrades
        */}
        {this.props.showUpgrades && this.props.upgrades.length > 0 && (
          <div className="px-1" />
        )}

        {this.props.showUpgrades &&
          this.props.showMeleeUpgrades &&
          melleUpgrades.map(upgrade => this.renderUpgrade(upgrade))}
        {this.props.showUpgrades &&
          this.props.showMeleeUpgrades &&
          melleUpgrades.length > 0 && <div className="px-1" />}

        {this.props.showUpgrades &&
          this.props.showRangedUpgrades &&
          rangedUpgrades.map(upgrade => this.renderUpgrade(upgrade))}
        {this.props.showUpgrades &&
          this.props.showRangedUpgrades &&
          rangedUpgrades.length > 0 && <div className="px-1" />}

        {this.props.showUpgrades &&
          this.props.showCasterUpgrades &&
          casterUpgrades.map(upgrade => this.renderUpgrade(upgrade))}
        {this.props.showUpgrades &&
          this.props.showCasterUpgrades &&
          casterUpgrades.length > 0 && <div className="px-1" />}

        {this.props.showUpgrades &&
          this.props.showRestUpgrades &&
          noneUpgrades.map(upgrade => this.renderUpgrade(upgrade))}
      </div>
    );
  }
}
