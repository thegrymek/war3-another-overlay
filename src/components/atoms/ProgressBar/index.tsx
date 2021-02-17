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
  ${tw`overflow-hidden text-xs flex`}
  ${props => props.color === 'red' && tw`bg-red-200`}
  ${props => props.color === 'blue' && tw`bg-blue-200`}
  ${props => props.color === 'purple' && tw`bg-purple-200`}
  height: ${props => props.height}px;
`;

interface StyledLineProgressBarProps extends StyledBaseProgressBarProps {
  strPercent: string;
  height?: number;
}
const StyledLineProgressBar = styled.div.attrs<StyledLineProgressBarProps>(
  props => ({
    height: props.height || props.theme.hero.progressBar.height,
  })
)`
  ${tw`flex flex-col text-center text-white justify-center`}
  ${props => props.color === 'red' && tw`bg-red-500`}
  ${props => props.color === 'blue' && tw`bg-blue-500`}
  ${props => props.color === 'purple' && tw`bg-purple-500`}
  width: ${props => props.strPercent};
  height: ${props => props.height}px;
`;

export interface ProgressBarProps {
  value: number;
  color: string;
  height?: number;
}

export class StyledProgressBar extends React.Component<ProgressBarProps> {
  get valuePercent(): string {
    return (this.props.value * 100).toString() + '%';
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
          ></StyledLineProgressBar>
        </StyledBaseProgressBar>
      </div>
    );
  }
}
