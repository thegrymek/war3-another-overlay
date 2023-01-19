import styled from 'styled-components';
import React from 'react';

import {W3ItemProps} from '../../../../../w3/interfaces';
import IconWrapper from '../../atoms/IconWrapper';
import Text from '../../atoms/Text';

const ItemIcon = styled(IconWrapper).attrs(props => ({
  width: props.theme.item.iconSize,
  height: props.theme.item.iconSize,
  contained: true,
}))``;

const TextCooldown = styled(Text).attrs(props => ({
  size: props.theme.item.cooldownFontSize,
}))``;

const TextCharges = styled(Text).attrs(props => ({
  size: props.theme.item.totalFontSize,
}))``;

export type ItemProps = W3ItemProps;
export default class Item extends React.Component<ItemProps> {
  get isCooldown(): boolean {
    return this.props.cooldown && this.props.cooldown > 0;
  }

  get areCharges(): boolean {
    return this.props.charges && this.props.charges > 0;
  }

  get key(): string {
    const keys = [
      this.props.id,
      this.props.charges,
      this.props.cooldown,
      this.props.slot,
    ];
    return `${keys.join('-')}`;
  }

  renderCharges() {
    return (
      <div className="absolute w-full h-full grid grid-cols-2 grid-rows-2 z-40">
        <div />
        <div />
        <div />
        <div className="text-center bg-gradient-to-tl from-gray-900">
          <TextCharges className="m-auto align-top">
            {Math.floor(this.props.charges)}
          </TextCharges>
        </div>
      </div>
    );
  }

  renderCooldown() {
    return (
      <div className="absolute flex w-full h-full z-50">
        <TextCooldown className="m-auto">
          {Math.floor(this.props.cooldown)}
        </TextCooldown>
      </div>
    );
  }

  render() {
    return (
      <ItemIcon
        id={this.props.id}
        key={this.key}
        grayScale={this.isCooldown && 70}
      >
        {this.isCooldown ? this.renderCooldown() : null}
        {this.areCharges ? this.renderCharges() : null}
      </ItemIcon>
    );
  }
}
