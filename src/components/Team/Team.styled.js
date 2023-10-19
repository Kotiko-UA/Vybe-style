import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Wrapper = styled.section`
  padding: 52px 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 70px 0;
  }
  @media screen and (min-width: 1368px) {
    padding: 85px 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 101px 0 100px 0;
  }
`;
export const Container = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
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
  margin-bottom: 128px;
  color: ${props => props.theme.colorText};
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 40px;
  }
  @media screen and (min-width: 1368px) {
    margin-bottom: 24px;
    text-align: right;
  }
  @media screen and (min-width: 1920px) {
    margin-bottom: 80px;
    font-size: 90px;
    text-align: center;
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
`;
export const SlideLink = styled.a`
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
  position: absolute;
  top: 88px;
  left: 20px;
  display: flex;
  margin-left: auto;
  justify-content: flex-end;

  border-radius: 7px;
  background: #171717;
  padding: 4px 20px 4px 56px;
  width: 188px;
  @media screen and (min-width: 768px) {
    top: 0;
    right: 40px;
  }
  @media screen and (min-width: 1368px) {
    display: none;
  }
`;

export const PrevButton = styled.button`
  padding: 8px 20px;
  stroke: #f7f7f7;
  background-color: #171717;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    stroke: ${props => props.theme.brandColor};
    background-color: ${props => props.theme.borderAlphaColor};
  }
`;
