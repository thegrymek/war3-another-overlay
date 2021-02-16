import React from 'react';
import {
  PLAYER_BORDER_COLOR,
  PLAYER_GRADIENTS,
  RESOURCE_TEXT_COLOR,
} from '../../../config';
import {W3PlayerProps, W3UpgradeProps} from '../../../w3/interfaces';
import {
  getCasterUpgrades,
  getMelleUpgrades,
  getRangedUpgrades,
} from '../../../w3/tools';
import Shield from '../../molecules/Shield';
import Upgrade from '../../molecules/Upgrade';
import Resource from '../../molecules/Resource';

function mapFoodColor(food: number) {
  if (food < 51) {
    return RESOURCE_TEXT_COLOR['food'];
  }
  if (food < 81) {
    return RESOURCE_TEXT_COLOR['foodSmallTax'];
  }
  return RESOURCE_TEXT_COLOR['foodBigTax'];
}

export interface NavbarResourceConfigProps {
  showArmyFood?: boolean;
  showWorkersFood?: boolean;
  showMeleeUpgrades?: boolean;
  showRangedUpgrades?: boolean;
  showCasterUpgrades?: boolean;
  showApm?: boolean;
  showPing?: boolean;
}
export interface NavbarResourcesProps
  extends W3PlayerProps,
    NavbarResourceConfigProps {}

export default class NavbarResources extends React.Component<
  NavbarResourcesProps
> {
  public static defaultProps = {
    showArmyFood: true,
    showWorkersFood: true,
    showMeleeUpgrades: true,
    showRangedUpgrades: true,
    showCasterUpgrades: true,
    showApm: true,
    showPing: true,
    upgrades: [],
  };

  renderUpgrade(upgrade: W3UpgradeProps) {
    return (
      <Upgrade
        key={upgrade.id}
        id={upgrade.id}
        level={upgrade.level}
        levelMax={upgrade.levelMax}
        class={upgrade.class}
      />
    );
  }

  getNavbarClassNames() {
    const navbarClassNames = [
      'w-full flex',
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
      navbarClassNames.push('bg-gradient-to-tl');
    } else {
      navbarClassNames.push('flex-row');
      navbarClassNames.push('text-right');
      navbarClassNames.push('border-l-4 rounded-bl-lg');
      navbarClassNames.push('bg-gradient-to-tr');
    }
    return navbarClassNames;
  }

  getUpgradeClassNames() {
    const upgradesClassNames = ['flex flex-nowrap content-end px-2'];

    if (this.props.reverse === true) {
      upgradesClassNames.push('flex-row-reverse');
    } else {
      upgradesClassNames.push('flex-row');
    }
    return upgradesClassNames;
  }

  getPlayerClassNames() {
    const navbarPlayerClassNames = ['flex flex-grow', 'px-2 p-2 items-center'];

    if (this.props.reverse === true) {
      navbarPlayerClassNames.push('flex-row-reverse');
    } else {
      navbarPlayerClassNames.push('flex-row');
    }
    return navbarPlayerClassNames;
  }

  render() {
    const melleUpgrades = getMelleUpgrades(this.props.upgrades);
    const rangedUpgrades = getRangedUpgrades(this.props.upgrades);
    const casterUpgrades = getCasterUpgrades(this.props.upgrades);

    const navbarPlayerClassNames = ['flex flex-grow', 'px-2 p-2 items-center'];
    const foodMaxClassNames = [
      'text-xs align-top',
      mapFoodColor(this.props.maxFood),
    ];
    const upgradesClassNames = ['flex flex-nowrap content-end px-2'];
    const navbarClassNames = [
      'w-full flex',
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
      navbarClassNames.push('bg-gradient-to-tl');
      navbarPlayerClassNames.push('flex-row-reverse');
      upgradesClassNames.push('flex-row-reverse');
    } else {
      navbarClassNames.push('flex-row');
      navbarClassNames.push('text-right');
      navbarClassNames.push('border-l-4 rounded-bl-lg');
      navbarClassNames.push('bg-gradient-to-tr');
      navbarPlayerClassNames.push('flex-row');
      upgradesClassNames.push('flex-row');
    }

    return (
      <div className={navbarClassNames.join(' ')}>
        <div className={navbarPlayerClassNames.join(' ')}>
          <span className="px-1" />
          <Shield race={this.props.race} />
          <span className="px-1" />
          <span className="align-middle text-xl text-white-400">
            {this.props.playerName}
          </span>
        </div>

        {((this.props.showMeleeUpgrades && melleUpgrades.length > 0) ||
          (this.props.showRangedUpgrades && rangedUpgrades.length > 0) ||
          (this.props.showCasterUpgrades && casterUpgrades.length > 0)) && (
          <div className={upgradesClassNames.join(' ')}>
            {this.props.showMeleeUpgrades &&
              melleUpgrades.map(upgrade => this.renderUpgrade(upgrade))}
            <div className="px-1" />
            {this.props.showRangedUpgrades &&
              rangedUpgrades.map(upgrade => this.renderUpgrade(upgrade))}
            <div className="px-1" />
            {this.props.showCasterUpgrades &&
              casterUpgrades.map(upgrade => this.renderUpgrade(upgrade))}
          </div>
        )}

        <Resource resourceType={'gold'}>{this.props.gold}</Resource>
        <Resource resourceType={'lumber'}>{this.props.lumber}</Resource>
        <Resource resourceType={'food'}>
          <span className={mapFoodColor(this.props.food)}>
            {this.props.food}
          </span>
          <span className={foodMaxClassNames.join(' ')}>
            /{this.props.maxFood}
          </span>
        </Resource>
        {this.props.showArmyFood && this.props.armyFood !== undefined && (
          <Resource resourceType={'unit'}>{this.props.armyFood}</Resource>
        )}
        {this.props.showWorkersFood && this.props.workersFood !== undefined && (
          <Resource resourceType={'worker'}>{this.props.workersFood}</Resource>
        )}
        {this.props.showApm && this.props.apm !== undefined && (
          <Resource resourceType={'apm'}>{this.props.apm}</Resource>
        )}
        {this.props.showPing && this.props.ping !== undefined && (
          <Resource resourceType={'ping'}>{this.props.ping}</Resource>
        )}
      </div>
    );
  }
}
