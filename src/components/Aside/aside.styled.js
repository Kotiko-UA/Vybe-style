import styled, { keyframes } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Logo = styled.img`
  max-width: 77px;
  margin: 0 auto;
  padding-top: 44px;
  @media screen and (min-width: 1368px) {
    display: none;
  }
`;

export const NameCompany = styled.h1`
  font-size: 21px;
  font-weight: 400;
  line-height: 2.3;
  letter-spacing: 1.296px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
  @media screen and (min-width: 1368px) {
    display: none;
  }
`;

const animationMenuClose = keyframes`
    to {
        transform: translate(100%, 0);
    }

    from {
        transform: translate(0%, 0%);
    }
`;

export const BurgerMenuBtn = styled.img`
  animation: ${animationMenuClose} 250ms cubic-bezier(0.61, 0, 0.51, 1);
  max-width: 55px;
  position: absolute;
  right: 5px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    margin-right: 10px;
  }
  @media screen and (min-width: 1368px) {
    display: none;
  }
  @media screen and (min-width: 1920px) {
    display: none;
  }
`;

const animationMenuOpen = keyframes`
    to {
        transform: translate(0%, 0);
    }

    from {
        transform: translate(100%, 0%);
    }
`;

export const ContainerMobileMenu = styled.div`
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  display: none;
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  animation: ${animationMenuOpen} 550ms cubic-bezier(0.61, 0, 0.51, 1);
  backdrop-filter: blur(11px);

  &.main-menu.open-menu {
    display: block;
  }
  overflow: scroll;

  @media screen and (min-width: 768px) {
    display: none;
    width: 50%;
    right: 0;
    z-index: 999;
    background-color: ${props => props.theme.colorBlack};
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
    backdrop-filter: blur(11px);
    overflow: scroll;
  }
  @media screen and (max-width: 1367px) {
    z-index: 999;
  }

  @media screen and (min-width: 1368px) {
    display: block;
    width: 200px;
    position: fixed;
    top: 41px;
    right: 20px;
    background: transparent;
    backdrop-filter: blur(0);
    overflow: hidden;
  }
  @media screen and (min-width: 1920px) {
    display: block;
    width: 200px;
    position: fixed;
    top: 41px;
    background: transparent;
    backdrop-filter: blur(0);
    right: 0px;
  }
`;

export const CloseBtnMenu = styled(AiOutlineClose)`
  width: 24px;

  @media screen and (min-width: 1368px) {
    display: none;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 39px;
  @media screen and (min-width: 1368px) {
    margin: 0;
    margin-top: 39px;
  }
`;

export const Menu = styled.div`
  width: 105px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const MenuList = styled.ul``;

export const MenuItem = styled.li`
  & a:hover {
    color: ${props => props.theme.brandColor};
    cursor: pointer;
  }

  margin-top: 16px;

  &:first-child {
    margin-top: 0px;
  }
`;

export const SelectContainer = styled.div`
  max-width: 100px;
  display: flex;
  cursor: pointer;
  position: relative;
`;

export const SelectLang = styled.select`
  max-width: 109px;
  border: 1px solid #fff;
  background: #000;
  color: #fff;
  padding: 10px 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
`;

export const SelectLangOption = styled.option`
  background-color: #000;
  border: 1px solid #fff;
`;

export const ArrowDropDown = styled.img`
  width: 20px;
  position: absolute;
  top: 10px;
  left: 75px;
  cursor: pointer;
`;

export const BackgroundMenuOpen = styled.div`
  position: ${props => (props.$open === 'true' ? 'absolute' : '')};
  width: ${props => (props.$open === 'true' ? '100vw' : '')};
  height: ${props => (props.$open === 'true' ? '100vh' : '')};
  background: ${props => (props.$open === 'true' ? 'transparent' : '')}; */}
`;
