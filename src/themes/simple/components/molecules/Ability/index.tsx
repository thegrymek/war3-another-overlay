import styled from 'styled-components';
import React from 'react';
import tw from 'twin.macro';

import IconWrapper from '../../atoms/IconWrapper';
import Text from '../../atoms/Text';
import {W3AbilityProps} from '../../../../../w3/interfaces';
import {isOnColddown, getColddown} from '../../../../../w3/tools';
import {colors} from '../../../settings';
import {v4 as uuid} from 'uuid';

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

const levelBarColorMap: {[key: number]: string} = {
  1: 'emerald',
  2: 'yellow',
  3: 'red',
};
const levelBarDefaultColor = 'emerald';

export type AbilityProps = W3AbilityProps;
export default class Ability extends React.Component<AbilityProps> {
  get isCooldown(): boolean {
    return isOnColddown(this.props);
  }

  get levelBarColor(): string {
    const level = this.props.level;
    if (!level) return levelBarDefaultColor;
    if (level in levelBarColorMap) return levelBarColorMap[level];
    return levelBarDefaultColor;
  }

  get levelsIndex(): number[] {
    return [2, 1, 0];
  }

  renderCooldown() {
    return (
      <div className="absolute flex w-full h-full">
        <TextCooldown className="m-auto text-center">
          {getColddown(this.props)}
        </TextCooldown>
      </div>
    );
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
      colors.player.border[this.levelBarColor],
      colors.player.gradient[this.levelBarColor],
    ];
    return <LevelBar className={classNames.join(' ')} />;
  }

  render() {
    return (
      <FixedDiv className="flex flex-rows" key={uuid()}>
        <AbilityIcon
          id={this.props.id}
          key={uuid()}
          grayScale={this.isCooldown ? 80 : undefined}
        >
          {this.isCooldown ? this.renderCooldown() : null}
        </AbilityIcon>
        <LevelBars className="grid grid-rows-3" key={uuid()}>
          {this.levelsIndex.map(index => this.renderLevelBar(index))}
        </LevelBars>
      </FixedDiv>
    );
  }
}
