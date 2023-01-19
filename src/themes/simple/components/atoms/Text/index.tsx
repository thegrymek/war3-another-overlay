import styled from 'styled-components';
import tw from 'twin.macro';

export interface TextProps {
  size: number;
  width?: number;
  height?: number;
}
export default styled.span<TextProps>`
  ${tw`antialiased font-bold text-white`}
  text-shadow: 0 0 15px black;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  ${props => `font-size: ${props.size}px;`}
  ${props => props.width && `width: ${props.width}px;`}
    ${props => props.height && `height: ${props.height}px;`}
`;
