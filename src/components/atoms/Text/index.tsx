import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface TextProps {
  size: number;
  width?: number;
  height?: number;
}
export default styled.span<TextProps>`
    ${tw`antialiased font-bold text-white`}
    text-shadow: 0 0 15px #000;
    ${props => `font-size: ${props.size}px;`}
    ${props => props.width && `width: ${props.width}px;`}
    ${props => props.height && `height: ${props.height}px;`}
`;
