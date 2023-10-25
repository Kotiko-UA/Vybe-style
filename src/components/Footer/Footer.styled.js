import styled from 'styled-components';
import { ReactComponent as IconLinkedin } from './icons/linkedin.svg';
import { ReactComponent as IconDribble } from './icons/dribbble.svg';
import { ReactComponent as IconInstagram } from './icons/instagram.svg';
import { ReactComponent as IconBehance } from './icons/behance.svg';
import { ReactComponent as IconCopyright } from './icons/copyright.svg';
import { ReactComponent as IconUaFlag } from './icons/uaflag.svg';

export const FooterBlock = styled.footer`
  padding-top: 56px;
  padding-bottom: 30px;

  @media only screen and (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 52px;
  }

  @media only screen and (min-width: 1368px) {
    padding-top: 40px;
    padding-bottom: 63px;
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

  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  > *:not(:last-child) {
    margin-bottom: 40px;
  }
  > :nth-child(3) {
    margin-bottom: 49px;
  }

  > *:first-child {
    margin-bottom: 49px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 197px;
    padding-right: 197px;

    > *:first-child {
      margin-bottom: 40px;
    }
  }

  @media only screen and (min-width: 1368px) {
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: center;
    max-width: 1368px;
    padding-left: 60px;
    padding-right: 201px;

    > *:first-child {
      margin-right: 88px;
      margin-bottom: 0px;
    }
    > :nth-child(2) {
      margin-right: 15px;
      margin-bottom: 0px;
    }
    > :nth-child(3) {
      margin-right: 102px;
      margin-bottom: 0px;
    }

    &.uk-footer-container {
      > :nth-child(3) {
        margin-right: 60px;
        margin-bottom: 0px;
      }
    }
  }

  @media only screen and (min-width: 1920px) {
    max-width: 1920px;

    padding-left: 120px;
    padding-right: 201px;

    > *:first-child {
      margin-right: 258px;
    }

    > :nth-child(3) {
      margin-right: 274px;
    }
    &.uk-footer-container {
      > :nth-child(3) {
        margin-right: 227px;
      }
    }
  }
`;
export const UaFlagSvg = styled(IconUaFlag)`
  @media only screen and (min-width: 1920px) {
    width: 29px;
    height: 18px;
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  @media only screen and (min-width: 1368px) {
    gap: 20px;
    margin: 0px;
    order: 3;

    &.uk-address {
      margin-right: 57px;
    }
  }

  @media only screen and (min-width: 1920px) {
    &.uk-address {
      margin-right: 224px;
    }
  }
`;
export const AddressLink = styled.a`
  text-align: center;
  display: block;
  width: 100%;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.92;
  letter-spacing: 0.032;
  text-transform: uppercase;

  color: ${({ theme }) => theme.textColor};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1368px) {
    font-size: 14px;
    white-space: nowrap;
  }

  @media only screen and (min-width: 1920px) {
    margin: 0px;
    font-size: 16px;
    line-height: normal;
  }
`;

export const SocialsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 24px;
  @media only screen and (min-width: 768px) {
    gap: 48px;
  }
  @media only screen and (min-width: 1368px) {
    gap: 15px;
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

  @media only screen and (min-width: 1368px) {
    width: 40px;
    height: 40px;
  }

  @media only screen and (min-width: 1920px) {
    width: 49px;
    height: 49px;
  }
`;

export const CopyrightWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media only screen and (min-width: 768px) {
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }

  @media only screen and (min-width: 1368px) {
    max-width: 100%;
    flex-direction: row;
    gap: 11px;
    order: 4;
  }
  @media only screen and (min-width: 1920px) {
    max-width: 100%;
  }
`;

export const CopyrightYearWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;

  @media only screen and (min-width: 1368px) {
    margin-bottom: 0px;
    order: 4;
  }
`;

export const CopyrightText = styled.p`
  display: block;
  font-size: 12px;
  max-width: 139px;
  font-style: normal;
  font-weight: 300;

  &.uk-copyright-text {
    max-width: 194px;
    white-space: nowrap;
  }

  @media only screen and (min-width: 1368px) {
    max-width: 162px;
    max-height: 39px;
    font-size: 14px;
    text-align: right;
    white-space: pre-line;
    &.uk-copyright-text {
      max-width: 228px;
      white-space: nowrap;
    }
  }

  @media only screen and (min-width: 1920px) {
    max-width: 238px;
    font-size: 16px;
    &.uk-copyright-text {
      max-width: 267px;
      white-space: nowrap;
    }
  }
`;

export const CopyrightTabletText = styled.p`
  display: flex;
  max-width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: normal;
`;
export const CopyrightSvg = styled(IconCopyright)`
  fill: ${({ theme }) => theme.textColor};
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  color: ${({ theme }) => theme.textColor};

  @media only screen and (min-width: 1920px) {
    font-size: 20px;
  }
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
    bottom: -8px;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.brandColor};
  }

  &.uk-createdBy {
    width: 126px;

    &::after {
      content: '';
      width: 114px;
      left: 50%;
      transform: translateX(-50%);

      @media only screen and (min-width: 1368px) {
        left: 0;
        transform: translateX(0%);
      }
    }
    @media only screen and (min-width: 1920px) {
      width: 161px;
      &::after {
        width: 146px;
      }
    }
  }

  @media only screen and (min-width: 1368px) {
    text-align: left;
    white-space: nowrap;
    margin: 0px;
    order: 2;
  }

  @media only screen and (min-width: 1920px) {
    width: 146px;
    font-size: 18px;
  }
`;
