import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Wrapper = styled.section`
  padding: 52px 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 60px 0;
  }
  @media screen and (min-width: 1368px) {
    padding: 85px 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 105px 0 100px 0;
  }
`;
export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
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
  margin-bottom: 32px;
  color: ${props => props.theme.colorText};
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 120%;
  }
  @media screen and (min-width: 1368px) {
    margin-bottom: 24px;
    text-align: right;
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
    font-size: 90px;
    line-height: 120%;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 44px 0;
    margin-bottom: 44px;
  }
`;

export const Li = styled.li`
  position: relative;
  display: block;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transition: border-top border-bottom;

  &:hover,
  :focus {
    border-top: 1px solid #c4f934;
    border-bottom: 1px solid #c4f934;
  }

  &:nth-child(n + 6) {
    display: none;
  }
`;

export const SliderFirstWrap = styled.div`
  padding-left: 136px;

  @media screen and (min-width: 1920px) {
    padding-left: 208px;
  }
`;
export const SlideWrapper = styled.div`
  position: relative;
  display: block;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transition: border-top, border-bottom;

  &:hover,
  :focus {
    border-top: 1px solid #c4f934;
    border-bottom: 1px solid #c4f934;
  }
`;
export const SlideLink = styled.a`
  display: block;
  width: 100%;
  height: 502px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 502px;
  }
  @media screen and (min-width: 1368px) {
    width: 100%;
    height: 324px;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
    height: 502px;
  }
`;
export const DarkImgEl = styled.span`
  @media screen and (min-width: 1380px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(12 16 1 / 30%);
    z-index: 5;
  }

  transition: background-color;
  .slide-wrap:hover & {
    background-color: transparent;
  }
  .slide-wrap:focus & {
    background-color: transparent;
  }
`;
export const SlideImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-position: 50% 50%;
  z-index: 1;
`;
export const ProjectName = styled.h3`
  position: absolute;
  left: 8px;
  top: 12px;

  color: ${props => props.theme.colorText};
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 2;
  @media screen and (min-width: 768px) {
    left: 16px;

    font-size: 24px;
    font-weight: 300;
    text-transform: lowercase;
  }
  @media screen and (min-width: 1368px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
  }
`;
export const ProjectYear = styled.span`
  position: absolute;
  right: 8px;
  top: 12px;

  color: ${props => props.theme.normalСolor};
  text-align: center;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  z-index: 2;
  @media screen and (min-width: 768px) {
    right: 16px;

    text-align: right;
    font-size: 24px;
    text-transform: lowercase;
  }
  @media screen and (min-width: 1368px) {
    font-size: 20px;
    right: 8px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
  }
`;

export const Services = styled.p`
  position: absolute;
  left: 8px;
  bottom: 64px;

  color: ${props => props.theme.normalСolor};

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  z-index: 2;
  @media screen and (min-width: 768px) {
    bottom: 40px;
    left: 16px;
    text-transform: lowercase;
  }
  @media screen and (min-width: 1368px) {
    left: 8px;
    bottom: 52px;
  }
  @media screen and (min-width: 1920px) {
    bottom: 40px;
  }
`;
export const ProjectServises = styled.p`
  position: absolute;
  left: 8px;
  bottom: 14px;

  color: ${props => props.theme.colorText};

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  z-index: 2;
  @media screen and (min-width: 768px) {
    bottom: 12px;
    left: 16px;
    text-transform: lowercase;
  }
  @media screen and (min-width: 1368px) {
    left: 8px;
  }
`;
export const SliderSecondWrap = styled.div`
  @media screen and (min-width: 1380px) {
    padding-right: 164px;
    position: relative;
  }

  @media screen and (min-width: 1920px) {
    padding-right: 208px;
  }
`;

export const SwiperEl = styled(Swiper)`
  @media screen and (min-width: 1380px) {
    margin-top: 86px;
    position: static;
  }
`;
export const Buttons = styled.div`
  background: #171717;
  padding: 4px 20px 4px 56px;
  width: 188px;
  margin-left: auto;
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: 1380px) {
    width: 140px;
    padding: 4px 20px 4px 8px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media screen and (min-width: 1920px) {
    padding: 4px 20px 4px 56px;
    width: 188px;
  }
`;
export const PrevButton = styled.button`
  padding: 8px 20px;
  stroke: #f7f7f7;
  background-color: #171717;
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animationStyles};
  :focus,
  :hover {
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
  :focus,
  :hover {
    stroke: ${props => props.theme.brandColor};
    background-color: ${props => props.theme.borderAlphaColor};
  }
`;
