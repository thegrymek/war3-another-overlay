import styled from 'styled-components';
import React from 'react';
import tw from 'twin.macro';

import IconWrapper from '../../atoms/IconWrapper';
import Text from '../../atoms/Text';
import {W3AbilityProps} from '../../../w3/interfaces';
import {PLAYER_GRADIENTS, PLAYER_BORDER_COLOR} from '../../../config';

const FixedDiv = styled.div`
  ${props =>
    `width: ${
      props.theme.ability.iconSize * 2 + props.theme.ability.levelBarWidth + 5
    }px;`}
  ${props => `height: ${props.theme.ability.iconSize}px;`}
`;

const AbilityIcon = styled(IconWrapper).attrs(props => ({
  width: props.theme.ability.iconSize,
  height: props.theme.ability.iconSize,
  contained: true,
}))``;

const TextCooldown = styled(Text).attrs(props => ({
  size: props.theme.ability.cooldownFontSize,
}))``;

const LevelBars = styled.div`
  width: ${props => props.theme.ability.levelBarWidth}px;
  row-gap: ${props => props.theme.ability.levelBarGap}px;
  grid-row-gap: ${props => props.theme.ability.levelBarGap}px;
`;
const LevelBar = styled.div`
  ${tw`w-full h-full border rounded-sm`}
`;

export type AbilityProps = W3AbilityProps;
export default class Ability extends React.Component<AbilityProps> {
  get isCooldown(): boolean {
    return this.props.cooldown && this.props.cooldown > 0;
  }

  renderCooldown() {
    return (
      <div className="absolute flex w-full h-full">
        <TextCooldown className="m-auto text-center">
          {Math.floor(this.props.cooldown)}
        </TextCooldown>
      </div>
    );
  }

  get levelBarColor(): string {
    return {
      undefined: 'emerald',
      1: 'emerald',
      2: 'yellow',
      3: 'red',
    }[this.props.level];
  }

  renderLevelBar(index: number) {
    if (!this.props.level) {
      return <div />;
    }
    if (this.props.level <= index) {
      return <div />;
    }
    if (this.props.level > 3) {
      return <div />;
    }

    const classNames = [
      'bg-gradient-to-tr',
      'border-opacity-50',
      PLAYER_BORDER_COLOR[this.levelBarColor],
      PLAYER_GRADIENTS[this.levelBarColor],
    ];
    return <LevelBar className={classNames.join(' ')} />;
  }

  get key(): string {
    return `${this.props.id}-${this.isCooldown}`;
  }

  render() {
    const levelsIndex = [2, 1, 0];
    return (
      <FixedDiv className="flex flex-rows">
        <AbilityIcon
          id={this.props.id}
          key={this.key}
          grayScale={this.isCooldown && 80}
        >
          {this.isCooldown ? this.renderCooldown() : null}
        </AbilityIcon>
        <LevelBars className="grid grid-rows-3">
          {levelsIndex.map(index => this.renderLevelBar(index))}
        </LevelBars>
      </FixedDiv>
    );
  }
}
