import styled from 'styled-components';
import { ReactComponent as BurgerIcon } from './images/burger.svg';
import { ReactComponent as CloseIcon } from './images/close.svg';
import { ReactComponent as ArrowRight } from '../OurClients/img/arrow-right.svg';
import { ReactComponent as IconLinkedin } from '../Footer/icons/linkedin.svg';
import { ReactComponent as IconDribble } from '../Footer/icons/dribbble.svg';
import { ReactComponent as IconInstagram } from '../Footer/icons/instagram.svg';
import { ReactComponent as IconBehance } from '../Footer/icons/behance.svg';

export const ContainerMobileMenu = styled.div`
  padding-top: 52px;
  padding-left: 23px;
  padding-right: 38px;
  width: 220px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  transform: translateX(100%);
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  -webkit-backdrop-filter: blur(11px);
  backdrop-filter: blur(11px);
  overflow-y: auto;
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
  &.main-menu.open-menu {
    transform: translateX(0);
  }
  @media screen and (min-width: 768px) {
    right: 0;
    background-color: ${({ theme }) => theme.blackColor};
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
    backdrop-filter: blur(11px);
  }
  @media screen and (max-width: 1367px) {
    z-index: 999;
  }

  @media screen and (min-width: 1368px) {
    display: block;
    transform: translateX(0);
    width: 200px;
    position: fixed;
    top: 41px;
    right: 20px;
    background: transparent;
    backdrop-filter: blur(0);
    overflow: hidden;
  }
  @media screen and (min-width: 1920px) {
    right: 0px;
  }
`;
export const BurgerMenuBtn = styled(BurgerIcon)`
  position: fixed;
  z-index: 997;
  top: 18px;
  right: 10px;
  @media screen and (min-width: 768px) {
    top: 48px;
    right: 40px;
  }
  @media screen and (min-width: 1368px) {
    display: none;
  }
  @media screen and (min-width: 1920px) {
    display: none;
  }
`;
export const CloseBtnMenu = styled(CloseIcon)`
  width: 24px;
  &path {
    fill: white;
  }
  @media screen and (min-width: 1368px) {
    display: none;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  margin-top: 39px;
  @media screen and (min-width: 1368px) {
    margin: 0;
    margin-top: 39px;
  }
`;

export const Menu = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-bottom: 40px;
  @media screen and (min-width: 1368px) {
    margin-bottom: 0;
  }
`;

export const MenuItem = styled.li`
  transition: color ${({ theme }) => theme.animationStyles};
  & a:hover,
  a:focus {
    color: ${({ theme }) => theme.brandColor};
    cursor: pointer;
  }

  margin-top: 16px;

  &:first-child {
    margin-top: 0px;
  }
  &:last-child a {
    color: ${({ theme }) => theme.brandColor};
    scale: 1;
    transition: scale ${({ theme }) => theme.animationStyles};
    &:hover,
    :focus {
      scale: 1.1;
    }
  }
`;
export const LinkWrapper = styled.a`
  display: flex;
`;
export const ArrowSvg = styled(ArrowRight)`
  width: 31px;
  height: 20px;
`;

export const SelectContainer = styled.div`
  max-width: 100%;
  cursor: pointer;
  position: relative;
  border: 1px solid #fff;
`;

export const SelectLang = styled.select`
  width: 138px;
  background-color: transparent;
  color: #fff;
  padding: 10px 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  &:hover,
  :focus {
    color: ${props => props.theme.brandColor};
  }
`;

export const SelectLangOption = styled.option`
  color: #fff;
  background-color: #000;
  border: 1px solid #fff;
`;

export const ArrowDropDown = styled.img`
  width: 20px;
  position: absolute;
  top: 10px;
  left: 108px;
  cursor: pointer;
  z-index: -1;
`;

export const BackgroundMenuOpen = styled.div`
  position: ${props => (props.$open === 'true' ? 'fixed' : 'absolute')};
  z-index: 998;
  top: 0;
  right: 0;
  width: ${props => (props.$open === 'true' ? '100vw' : '')};
  height: ${props => (props.$open === 'true' ? '100vh' : '')};
  background: ${props =>
    props.$open === 'true' ? 'transparent' : 'transparent'};
`;

export const SocialsList = styled.ul`
  width: 140px;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export const LinkedinSvg = styled(IconLinkedin)``;
export const DribbleSvg = styled(IconDribble)``;
export const InstagramSvg = styled(IconInstagram)``;
export const BehanceSvg = styled(IconBehance)``;

export const SocialsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colorText};
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colorText};
  transition: all ${({ theme }) => theme.animationStyles};

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.brandColor};
    border: none;

    ${LinkedinSvg}, ${DribbleSvg}, ${InstagramSvg}, ${BehanceSvg} {
      transition: all ${({ theme }) => theme.animationStyles};
      path {
        fill: ${({ theme }) => theme.brandColor};
        stroke: ${({ theme }) => theme.blackColor};
      }
    }
  }
`;
