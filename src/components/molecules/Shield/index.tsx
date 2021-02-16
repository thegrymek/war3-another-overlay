import styled from 'styled-components';
import React from 'react';

const StyledShield = styled.img`
  width: ${props => props.theme.shield.size};
  height: ${props => props.theme.shield.size};
`;

interface ShieldProps {
  race: string;
}
export default class Shield extends React.Component<ShieldProps> {
  get src() {
    return `/assets/shields/${this.props.race}.png`;
  }

  get key() {
    return this.src;
  }

  render() {
    return <StyledShield src={this.src} key={this.key} />;
  }
}

// https://github.com/diegohaz/arc/blob/master/src-example/components/atoms/Link/index.js
// https://stackoverflow.com/questions/42796584/dynamic-theme-in-styled-components
// https://storybook.js.org/addons/storybook-addon-styled-component-theme
//
//
