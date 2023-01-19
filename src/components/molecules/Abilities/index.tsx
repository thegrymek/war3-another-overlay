import React from 'react';
import Ability from '../Ability';
import {W3AbilityProps} from '../../../w3/interfaces';
import styled from 'styled-components';
import {v4 as uuid} from 'uuid';

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
    return (
      <Ability
        id={ability.id}
        level={ability.level}
        cooldown={ability.cooldown}
        key={uuid()}
      />
    );
  }

  render() {
    return (
      <FixedDiv className="flex grid grid-cols-2" key={uuid()}>
        {this.props.abilities
          .slice()
          .reverse()
          .map(ability => this.renderAbility(ability))}
      </FixedDiv>
    );
  }
}
