import styled from 'styled-components';
import tw from 'twin.macro';

export interface SideLayoutProps {
  isLeft: boolean;
  width?: number;
}
export default styled.div.attrs<SideLayoutProps>(props => ({
  width: props.width || props.theme.navbar.width,
}))`
    ${tw`grid grid-cols-1 auto-rows-max z-10`}
    ${props => props.isLeft && tw`justify-items-start`}
    ${props => !props.isLeft && tw`justify-items-end`}
    width: ${props => props.width}px;
`;
