import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import {colors} from '../../../settings';
import {renderUnit, renderUpgrade} from '../../../renders';
import {W3UnitProps, W3UpgradeProps} from '../../../../../w3/interfaces';
import {
  getCasterUpgrades,
  getMelleUpgrades,
  getNoneUpgrades,
  getRangedUpgrades,
} from '../../../../../w3/tools';

interface StyledNavbarProps {
  reverse?: boolean;
}
export const StyledNavbar = styled.div<StyledNavbarProps>`
  ${tw`flex flex-nowrap`};
  ${tw`bg-black p-0 m-0 text-white font-bold border-b-4`};

  ${props =>
    props.reverse &&
    tw`flex-row-reverse text-left border-r-4 bg-gradient-to-bl`}
  ${props =>
    !props.reverse && tw`flex-row text-right border-l-4 bg-gradient-to-br`}
`;

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

export default class NavbarUnitsUpgrades extends React.Component<NavBarUnitsUpgradesProps> {
  public static defaultProps = {
    showUnits: true,
    showUpgrades: true,
    showMeleeUpgrades: true,
    showRangedUpgrades: true,
    showCasterUpgrades: true,
    showRestUpgrades: true,
  };

  render() {
    const melleUpgrades = getMelleUpgrades(this.props.upgrades);
    const rangedUpgrades = getRangedUpgrades(this.props.upgrades);
    const casterUpgrades = getCasterUpgrades(this.props.upgrades);
    const noneUpgrades = getNoneUpgrades(this.props.upgrades);

    const navbarClassNames = [
      colors.player.border[this.props.color],
      colors.player.gradient[this.props.color],
    ];
    if (this.props.reverse === true) {
      navbarClassNames.push('rounded-br-lg');
    } else {
      navbarClassNames.push('rounded-bl-lg');
    }
    console.log(this.props.units);

    return (
      <StyledNavbar className={navbarClassNames.join(' ')}>
        {/*
            Units
        */}
        {this.props.showUnits && this.props.units.map(unit => renderUnit(unit))}
        {/*
            Upgrades
        */}
        {this.props.showUpgrades && this.props.upgrades.length > 0 && (
          <div className="px-1" />
        )}

        {this.props.showUpgrades &&
          this.props.showMeleeUpgrades &&
          melleUpgrades.map(upgrade => renderUpgrade(upgrade))}
        {this.props.showUpgrades &&
          this.props.showMeleeUpgrades &&
          melleUpgrades.length > 0 && <div className="px-1" />}

        {this.props.showUpgrades &&
          this.props.showRangedUpgrades &&
          rangedUpgrades.map(upgrade => renderUpgrade(upgrade))}
        {this.props.showUpgrades &&
          this.props.showRangedUpgrades &&
          rangedUpgrades.length > 0 && <div className="px-1" />}

        {this.props.showUpgrades &&
          this.props.showCasterUpgrades &&
          casterUpgrades.map(upgrade => renderUpgrade(upgrade))}
        {this.props.showUpgrades &&
          this.props.showCasterUpgrades &&
          casterUpgrades.length > 0 && <div className="px-1" />}

        {this.props.showUpgrades &&
          this.props.showRestUpgrades &&
          noneUpgrades.map(upgrade => renderUpgrade(upgrade))}
      </StyledNavbar>
    );
  }
}
