import React from 'react';
import Ability from '../Ability';
import {W3AbilityProps} from '../../../w3/interfaces';
import styled from 'styled-components';

const FixedDiv = styled.div`
  ${props =>
    `width: ${
      props.theme.ability.iconSize * 2 + props.theme.ability.levelBarWidth + 5
    }px;`}
  ${props => `height: ${props.theme.ability.iconSize * 2}px;`}
`;

export interface AbilitiesProps {
  abilities: W3AbilityProps[];
}
export default class Abilities extends React.Component<AbilitiesProps> {
  renderAbility(ability: W3AbilityProps) {
    const key = `${ability.id}-${ability.level}-${ability.cooldown}`;
    return (
      <Ability
        id={ability.id}
        key={key}
        level={ability.level}
        cooldown={ability.cooldown}
      />
    );
  }

  render() {
    return (
      <FixedDiv className="flex grid grid-cols-2">
        {this.props.abilities
          .slice()
          .reverse()
          .map(ability => this.renderAbility(ability))}
      </FixedDiv>
    );
  }
}
