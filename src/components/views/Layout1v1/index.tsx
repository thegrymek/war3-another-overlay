import React from 'react';
import {W3HeroProps, W3PlayerProps} from '../../../w3/interfaces';
import {uuid} from 'uuidv4';

import SideLayout from '../../atoms/SideLayout';
import AbsoluteDiv from '../../atoms/AbsoluteDiv';
import {
  renderNavbarUnitsUpgrades,
  renderNavbarResources,
  renderHero,
} from '../../renderers';

const HeroIdxToClass = {
  0: 'first-hero',
  1: 'second-hero',
  2: 'third-hero',
};

export interface Layout1v1Props {
  player: W3PlayerProps;
}
export class Layout1v1 extends React.Component<Layout1v1Props> {
  render() {
    const player = this.props.player;

    return (
      <AbsoluteDiv zindex={0}>
        <div className="w-full flex flex-nowrap">
          <SideLayout isLeft={true}></SideLayout>
          <div className="w-1/12" />
          <SideLayout isLeft={false}>
            {renderNavbarResources(player)}
            {renderNavbarUnitsUpgrades(player, false)}
          </SideLayout>
        </div>
        {/* Heroes on left */}
        <AbsoluteDiv zindex={10}>
          {player.heroes &&
            player.heroes.map((hero: W3HeroProps) => (
              <div className={HeroIdxToClass[hero['index']] + ' hero-left'}>
                {renderHero(hero)}
              </div>
            ))}
        </AbsoluteDiv>
      </AbsoluteDiv>
    );
  }
}

export interface Layout1v1ReplayProps {
  players: W3PlayerProps[];
}
export class Layout1v1Replay extends React.Component<Layout1v1ReplayProps> {
  renderHero(hero: W3HeroProps, index: number, rightSide: boolean) {
    const classNames = [
      HeroIdxToClass[index],
      rightSide ? 'hero-right' : 'hero-left',
    ];
    return (
      <div key={uuid()} className={classNames.join(' ')}>
        {renderHero(hero, rightSide)}
      </div>
    );
  }

  render() {
    const player1 = this.props.players[0];
    const player2 = this.props.players[1];

    return (
      <AbsoluteDiv zindex={0}>
        <div className="w-full flex flex-nowrap">
          <SideLayout isLeft={true}>
            {renderNavbarResources(player1, true)}
          </SideLayout>
          <div className="w-1/12" />
          <SideLayout isLeft={false}>
            {renderNavbarResources(player2)}
          </SideLayout>
        </div>
        {/* Heroes on left */}
        <AbsoluteDiv zindex={10}>
          {player1.heroes &&
            player1.heroes
              .slice()
              .reverse()
              .map((hero, idx) => this.renderHero(hero, idx, false))}
        </AbsoluteDiv>

        {/* Heroes on right */}
        <AbsoluteDiv zindex={10}>
          {player2.heroes &&
            player2.heroes
              .slice()
              .reverse()
              .map((hero, idx) => this.renderHero(hero, idx, true))}
        </AbsoluteDiv>
      </AbsoluteDiv>
    );
  }
}
