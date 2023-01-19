import styled from 'styled-components';
import React from 'react';

import IconWrapper from '../../atoms/IconWrapper';
import Text from '../../atoms/Text';

import {W3HeroShortProps} from '../../../w3/interfaces';

const HeroIcon = styled(IconWrapper).attrs(props => ({
  width: props.theme.hero.iconSize,
  height: props.theme.hero.iconSize,
  contained: true,
}))``;

const TextLevel = styled(Text).attrs(props => ({
  size: props.theme.hero.levelFontSize,
}))``;

export type HeroProps = W3HeroShortProps;
export default class Hero extends React.Component<HeroProps> {
  renderLevel() {
    return (
      <div className="absolute w-full h-full grid grid-cols-3 grid-rows-3 z-40">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div className="text-center bg-gradient-to-tl from-gray-900">
          <TextLevel className="m-auto align-top">
            {Math.floor(this.props.level)}
          </TextLevel>
        </div>
      </div>
    );
  }

  get key(): string {
    return `${this.props.id}-${this.props.isDead}`;
  }

  render() {
    return (
      <HeroIcon
        id={this.props.id}
        key={this.key}
        grayScale={this.props.isDead ? 100 : undefined}
      >
        {this.renderLevel()}
      </HeroIcon>
    );
  }
}
