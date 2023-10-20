import styled from 'styled-components';

import { ReactComponent as ArrowUpSvg } from './arrowUp.svg';

export const Button = styled.button`
  display: ${props => (props.$scroll === 'false' ? 'none' : 'block')};
  cursor: pointer;
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 49px;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.colorText};
  border-radius: 50%;
  background-color: transparent;
  transition: all ${({ theme }) => theme.animationStyles};
  z-index: 999;

  &:hover {
    background-color: ${({ theme }) => theme.brandColor};

    border-color: transparent;
  }
`;

export const ArrowUp = styled(ArrowUpSvg)`
  transition: all ${({ theme }) => theme.animationStyles};
  ${Button}:hover & path {
    stroke: ${({ theme }) => theme.blackColor};
  }
`;
