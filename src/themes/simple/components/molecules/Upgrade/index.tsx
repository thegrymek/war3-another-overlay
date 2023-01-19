import styled from 'styled-components';
import React from 'react';

import {W3UpgradeProps} from '../../../../../w3/interfaces';
import IconWrapper from '../../atoms/IconWrapper';
import Text from '../../atoms/Text';

const UpgradeIcon = styled(IconWrapper).attrs(props => ({
  width: props.theme.upgrade.iconSize,
  height: props.theme.upgrade.iconSize,
  contained: true,
}))``;

const TextLevel = styled(Text).attrs(props => ({
  size: props.theme.upgrade.levelFontSize,
}))``;

export type UpgradeProps = W3UpgradeProps;
export default class Upgrade extends React.Component<UpgradeProps> {
  get hasLevel(): boolean {
    return this.props.levelMax && this.props.levelMax > 1;
  }

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

  render() {
    return (
      <UpgradeIcon id={this.props.id}>
        {this.hasLevel ? this.renderLevel() : null}
      </UpgradeIcon>
    );
  }
}
