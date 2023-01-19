import React from 'react';
import {W3HeroProps} from '../../../w3/interfaces';
import {dropHeroSimpleAbilities} from '../../../w3/tools';
import Hero from '../../molecules/Hero';
import Abilities from '../../molecules/Abilities';
import Inventory from '../../molecules/Inventory';
import {StyledProgressBar} from '../../atoms/ProgressBar';

export interface HeroLayoutProps extends W3HeroProps {
  reverse: boolean;
}
export default class HeroLayout extends React.Component<HeroLayoutProps> {
  public static defaultProps = {
    reverse: false,
  };

  render() {
    const heroAbilities = this.props.abilities || [];
    const abilities = heroAbilities.filter(dropHeroSimpleAbilities);
    const key = `${this.props.id}-${this.props.level}-${this.props.hitpoints}`;
    return (
      <div
        className={`flex ${
          this.props.reverse ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <div className="flex flex-col">
          <Hero
            id={this.props.id}
            key={key}
            level={this.props.level}
            isDead={this.props.hitpoints < 1}
          />
          <StyledProgressBar
            color={'red'}
            value={this.props.hitpoints / this.props.hitpointsMax}
          />
          <StyledProgressBar
            color={'blue'}
            value={this.props.mana / this.props.manaMax}
          />
          <StyledProgressBar
            color={'purple'}
            value={this.props.experience / this.props.experienceMax}
          />
        </div>
        <Abilities abilities={abilities} />
        <Inventory items={this.props.items} />
      </div>
    );
  }
}
