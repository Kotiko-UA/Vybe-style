import styled from 'styled-components';

export const Button = styled.button`
  display: ${props => (props.$scroll === 'false' ? 'none' : 'block')};
  cursor: pointer;
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colorText};

  transition: background-color ${({ theme }) => theme.animationStyles};

  z-index: 999;

  &:hover {
    background-color: ${({ theme }) => theme.brandColor};
  }
`;
