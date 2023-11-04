import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { ReactComponent as IconLinkedin } from './icons/linkedin.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CloseIcon } from './icons/close.svg';
export const Wrapper = styled.section`
  padding: 56px 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 70px 0;
  }
  @media screen and (min-width: 1368px) {
    padding: 85px 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 110px 0;
  }
`;
export const Container = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    padding-left: 40px;
    padding-right: 40px;
    max-width: 768px;
  }
  @media screen and (min-width: 1368px) {
    padding-left: 60px;
    padding-right: 244px;
    max-width: 1368px;
  }
  @media screen and (min-width: 1920px) {
    padding-left: 120px;
    padding-right: 196px;
    max-width: 1920px;
  }
`;
export const H2 = styled.h2`
  margin-bottom: 34px;
  color: ${props => props.theme.colorText};
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  text-align: left;
  transition: color ${({ theme }) => theme.animationStyles};

  &:hover,
  :focus {
    color: ${({ theme }) => theme.brandColor};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 41px;
    font-size: 40px;
  }
  @media screen and (min-width: 1368px) {
    margin-bottom: 60px;
    margin-right: 254px;
    text-align: right;
  }
  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
    margin-right: 488px;
    font-size: 70px;
  }
`;
export const SwiperEl = styled(Swiper)`
  position: static;
`;
export const SlideWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid transparent;
  transition: border-bottom ${({ theme }) => theme.animationStyles};
  .swiper-slide:hover & {
    border-bottom: 1px solid #c4f934;
  }
  .swiper-slide:focus & {
    border-bottom: 1px solid #c4f934;
  }
`;
export const SlideLink = styled.div`
  display: block;
  width: 100%;
  height: 444px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 382px;
  }
  @media screen and (min-width: 1368px) {
    width: 100%;
    height: 392px;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
    height: 444px;
  }
`;
export const SlideDiv = styled.div`
  display: block;
  width: 100%;
  height: 444px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 382px;
  }
  @media screen and (min-width: 1368px) {
    width: 100%;
    height: 392px;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
    height: 444px;
  }
`;
export const SlideImg = styled.img`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 380px;
  object-position: 50% 50%;
  z-index: 2;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.animationStyles};
  .swiper-slide:hover & {
    opacity: 0;
  }
  .swiper-slide:focus & {
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 326px;
  }
  @media screen and (min-width: 1368px) {
    width: 100%;
    height: 336px;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
    height: 380px;
  }
`;
export const SlideImg2 = styled.img`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 380px;
  object-position: 50% 50%;
  z-index: 1;
  border-top: 1px solid #c4f934;
  border-bottom: 1px solid #c4f934;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 326px;
  }
  @media screen and (min-width: 1368px) {
    width: 100%;
    height: 336px;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
    height: 380px;
  }
`;
export const TeamRole = styled.p`
  position: absolute;
  left: 0;
  bottom: 32px;

  color: ${props => props.theme.normalСolor};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  z-index: 999;
`;

export const TeamName = styled.h3`
  position: absolute;
  left: 0;
  bottom: 0;

  color: ${props => props.theme.colorText};
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  z-index: 999;
`;

export const Buttons = styled.div`
  margin-top: 24px;
  display: flex;
  margin-left: auto;
  justify-content: flex-end;

  background: #171717;
  padding: 4px 20px 4px 56px;
  width: 188px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1368px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1920px) {
    margin-top: 9px;
  }
`;

export const PrevButton = styled.button`
  padding: 8px 20px;
  stroke: #f7f7f7;
  background-color: #171717;
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animationStyles};
  &:hover,
  :focus {
    stroke: ${props => props.theme.brandColor};
    background-color: ${props => props.theme.borderAlphaColor};
  }
`;
export const NextButton = styled.button`
  padding: 8px 20px;
  stroke: #f7f7f7;
  background-color: #171717;
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animationStyles};
  &:hover,
  :focus {
    stroke: ${props => props.theme.brandColor};
    background-color: ${props => props.theme.borderAlphaColor};
  }
`;

//--------------mob cart style------------------
export const SlideWrapperMob = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid transparent;
  transition: border-bottom ${({ theme }) => theme.animationStyles};
`;
export const SlideMobWrap = styled.div`
  display: block;
  width: 100%;
  height: 444px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 382px;
  }
  @media screen and (min-width: 1368px) {
    width: 100%;
    height: 392px;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
    height: 444px;
  }
`;
export const LinkedinSvg = styled(IconLinkedin)``;
export const SocialsLink = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 8px;
  right: 8px;
  width: 34px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.brandColor};
  border-radius: 50%;
  background: transparent;
  fill: ${({ theme }) => theme.brandColor};
  z-index: 3;
`;

export const ButtonOpenPhoto = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50%;
  .active-cart & {
    border: 1px solid transparent;
  }
`;
export const SvgPlusIcon = styled(PlusIcon)`
  display: block;
  .active-cart & {
    display: none;
  }
`;
export const SvgCloseIcon = styled(CloseIcon)`
  display: none;
  .active-cart & {
    display: block;
  }
`;
export const SlideImgMob = styled.img`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 380px;
  object-position: 50% 50%;
  z-index: 2;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.animationStyles};
  .active-cart & {
    opacity: 0;
  }
  .active-cart & {
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 326px;
  }
  @media screen and (min-width: 1368px) {
    width: 100%;
    height: 336px;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
    height: 380px;
  }
`;
