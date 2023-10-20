import styled from 'styled-components';
import { ReactComponent as IconLinkedin } from './icons/linkedin.svg';
import { ReactComponent as IconDribble } from './icons/dribbble.svg';
import { ReactComponent as IconInstagram } from './icons/instagram.svg';
import { ReactComponent as IconBehance } from './icons/behance.svg';
import { ReactComponent as IconCopyright } from './icons/copyright.svg';
import { ReactComponent as IconUaFlag } from './icons/uaflag.svg';

export const FooterBlock = styled.footer`
  padding-top: 38px;
  padding-bottom: 89px;

  @media only screen and (min-width: 768px) {
    padding-top: 70px;
  }

  @media only screen and (min-width: 1368px) {
    padding-top: 25px;
    padding-bottom: 66px;
  }
  @media only screen and (min-width: 1920px) {
    padding-top: 32px;
    padding-bottom: 118px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (min-width: 1368px) {
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    max-width: 1368px;
    padding-left: 60px;
    padding-right: 245px;

    > *:first-child {
      margin-right: 93px;
    }
    > :nth-child(2) {
      margin-right: 15px;
    }
    > :nth-child(3) {
      margin-right: 101px;
    }
  }

  @media only screen and (min-width: 1920px) {
    max-width: 1920px;

    padding-left: 120px;
    padding-right: 232px;

    > *:first-child {
      margin-right: 292px;
    }

    > :nth-child(3) {
      margin-right: 329px;
    }
  }
`;
export const UaFlagSvg = styled(IconUaFlag)``;

export const Address = styled.address`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  @media only screen and (min-width: 1368px) {
    gap: 24px;
    margin: 0px;
    order: 3;
  }
`;
export const AddressLink = styled.a`
  text-align: center;
  display: block;
  width: 100%;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.92;
  letter-spacing: 0.032;
  text-transform: uppercase;

  color: ${({ theme }) => theme.textColor};
  @media only screen and (min-width: 1368px) {
    margin: 0px;
    font-size: 18px;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 21px;
  }
`;
export const CopyrightWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media only screen and (min-width: 1368px) {
    margin-bottom: 0px;
    order: 4;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 21px;
  line-height: normal;

  color: ${({ theme }) => theme.textColor};
`;

export const SocialsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media only screen and (min-width: 1368px) {
    margin-bottom: 0;
    order: 1;
  }
`;

export const LinkedinSvg = styled(IconLinkedin)``;
export const DribbleSvg = styled(IconDribble)``;
export const InstagramSvg = styled(IconInstagram)``;
export const BehanceSvg = styled(IconBehance)``;

export const SocialsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49px;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.colorText};
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colorText};
  transition: all ${({ theme }) => theme.animationStyles};

  &:hover {
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

export const CopyrightSvg = styled(IconCopyright)`
  fill: ${({ theme }) => theme.textColor};
`;

export const CreatedByLink = styled.p`
  position: relative;
  text-align: center;
  width: 115px;

  cursor: pointer;

  font-size: 14px;
  font-style: normal;
  line-height: normal;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.brandColor};
  }

  @media only screen and (min-width: 1368px) {
    text-align: left;
    white-space: nowrap;
    margin: 0px;
    order: 2;
  }

  @media only screen and (min-width: 1920px) {
    width: 130px;
    font-size: 16px;
  }
`;
