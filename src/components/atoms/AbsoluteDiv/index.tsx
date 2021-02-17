import styled from 'styled-components';
import tw from 'twin.macro';

export interface AbsoluteDivProps {
  zindex?: number;
}
export default styled.div<AbsoluteDivProps>`
  ${tw`w-full h-full`};
  position: absolute;
  top: 0;
  left: 0;
  ${props => props.zindex && `z-index: ${props.zindex}`};
`;
