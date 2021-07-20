import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface StyledBaseProgressBarProps {
  color: string;
  height?: number;
}
const StyledBaseProgressBar = styled.div.attrs<StyledBaseProgressBarProps>(
  props => ({
    height: props.height || props.theme.hero.progressBar.height,
  })
)`
  ${tw`bg-black`}
  ${tw`overflow-hidden text-xs flex`};
  height: ${props => props.height}px;
`;

interface StyledLineProgressBarProps extends StyledBaseProgressBarProps {
  strPercent: number;
  height?: number;
  hslaColor?: number;
}
const StyledLineProgressBar = styled.div.attrs<StyledLineProgressBarProps>(
  props => ({
    height: props.height || props.theme.hero.progressBar.height,
  })
)`
  ${tw`flex flex-col justify-center`}
  ${props =>
    props.color === 'red' &&
    `background: linear-gradient(0deg, hsla(${props.hslaColor},100%,30%), hsla(${props.hslaColor},100%,50%));`}
  ${props =>
    props.color === 'blue' && tw`bg-gradient-to-t from-blue-600 to-blue-400`}
  ${props =>
    props.color === 'purple' &&
    tw`bg-gradient-to-t from-purple-600 to-purple-400`}
  width: ${props => props.strPercent}%;
  height: ${props => props.height}px;
`;

export interface ProgressBarProps {
  value: number;
  color: string;
  height?: number;
}

export class StyledProgressBar extends React.Component<ProgressBarProps> {
  get valuePercent(): number {
    return this.props.value * 100;
  }

  get healthHslaColor(): number {
    return this.valuePercent * 1.4;
  }

  render() {
    return (
      <div className="w-full border border-gray-900">
        <StyledBaseProgressBar
          color={this.props.color}
          height={this.props.height}
        >
          <StyledLineProgressBar
            color={this.props.color}
            strPercent={this.valuePercent}
            height={this.props.height}
            hslaColor={this.healthHslaColor}
          ></StyledLineProgressBar>
        </StyledBaseProgressBar>
      </div>
    );
  }
}
