import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface IconWrapperProps {
  id: string;
  width?: number;
  height?: number;
  contained?: boolean;
  grayScale?: number;
}
export default styled.div<IconWrapperProps>`
  ${tw`relative bg-no-repeat`}
  background-image: url(${props => `assets/icons/${props.id}.jpg`});
  background-position: center;
  ${props => props.width && `width: ${props.width}px;`}
  ${props => props.height && `height: ${props.height}px;`}
  ${props => props.contained && tw`bg-contain`}
  ${props => props.grayScale > 0 && `filter: grayscale(${props.grayScale}%);`}
`;
