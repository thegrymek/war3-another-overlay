import styled from 'styled-components';
import React from 'react';

import IconWrapper from '../../atoms/IconWrapper';
import Text from '../../atoms/Text';
import {W3UnitProps} from '../../../w3/interfaces';

const UnitIcon = styled(IconWrapper).attrs(props => ({
  width: props.theme.unit.iconSize,
  height: props.theme.unit.iconSize,
  contained: true,
}))``;

const TextTotalUnits = styled(Text).attrs(props => ({
  size: props.theme.unit.totalFontSize,
}))``;

export type UnitProps = W3UnitProps;
export default class Unit extends React.Component<UnitProps> {
  get hasUnits(): boolean {
    return this.props.alive_count && this.props.alive_count > 0;
  }

  renderTotalUnits() {
    return (
      <div className="absolute w-full h-full grid grid-cols-2 grid-rows-2 z-40">
        <div />
        <div />
        <div />
        <div className="text-center bg-gradient-to-tl from-gray-900">
          <TextTotalUnits className="m-auto align-middle">
            {Math.floor(this.props.alive_count)}
          </TextTotalUnits>
        </div>
      </div>
    );
  }

  render() {
    return (
      <UnitIcon id={this.props.id}>
        {this.hasUnits ? this.renderTotalUnits() : null}
      </UnitIcon>
    );
  }
}
