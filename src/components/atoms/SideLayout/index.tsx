import styled from 'styled-components';
import tw from 'twin.macro';

export interface SideLayoutProps {
  isLeft: boolean;
  width?: number;
  heigth?: number;
}
export default styled.div.attrs<SideLayoutProps>(props => ({
  width: props.width || props.theme.navbar.width,
  height: props.width || props.theme.navbar.height,
}))`
    ${tw`grid grid-cols-1 auto-rows-max z-10`}
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    ${props => props.isLeft && tw`justify-items-start`};
    ${props => !props.isLeft && tw`justify-items-end`};
`;
