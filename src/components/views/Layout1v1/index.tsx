import React from 'react';
import {W3HeroProps, W3PlayerProps} from '../../../w3/interfaces';
import {uuid} from 'uuidv4';

import {BaseLayout, HeroesLayout} from '../../BaseLayout';
import SideLayout from '../../atoms/SideLayout';
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
      <BaseLayout>
        <SideLayout isLeft={true}></SideLayout>
        <div className="w-1/12" />
        <SideLayout isLeft={false}>
          {renderNavbarResources(player)}
          {renderNavbarUnitsUpgrades(player, false)}
        </SideLayout>

        <HeroesLayout>
          {player.heroes &&
            player.heroes.map((hero: W3HeroProps) => (
              <div className={HeroIdxToClass[hero['index']] + ' hero-left'}>
                {renderHero(hero)}
              </div>
            ))}
        </HeroesLayout>
      </BaseLayout>
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
      <BaseLayout>
        <SideLayout isLeft={true}>
          {renderNavbarResources(player1, true)}
        </SideLayout>
        <div className="w-1/12" />
        <SideLayout isLeft={false}>{renderNavbarResources(player2)}</SideLayout>

        <HeroesLayout>
          {player1.heroes &&
            player1.heroes
              .slice()
              .reverse()
              .map((hero, idx) => this.renderHero(hero, idx, false))}
        </HeroesLayout>
        <HeroesLayout>
          {player2.heroes &&
            player2.heroes
              .slice()
              .reverse()
              .map((hero, idx) => this.renderHero(hero, idx, true))}
        </HeroesLayout>
      </BaseLayout>
    );
  }
}
