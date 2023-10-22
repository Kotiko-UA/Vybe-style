import styled, { keyframes } from 'styled-components';
import lines from '../../icons/3-lines-svg.svg';
import round from '../../icons/round.svg';
import bgImg from './img/g-img.png';
import bgImg2 from './img/g-img-mobile-bot.png';
import bgV from './img/v-img.png';
import { ReactComponent as PlaySvg } from '../../icons/play-svg.svg';

export const Section = styled.section`
  padding: 40px 0 75px 0;
  width: 100%;
  background-image: linear-gradient(
      180deg,
      #000 0%,
      rgba(0, 0, 0, 0) 100%,
      #000 100%
    ),
    url(${bgImg}),
    linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 47.46%, #000 100%),
    url(${bgImg2});

  background-size: 640px 640px, 640px 640px, 200px 278px, 200px 278px;
  background-repeat: no-repeat;
  background-position: top 0px right -100px, top 0px right -100px,
    right 0px bottom -60px, right 0px bottom -60px;
  @media screen and (min-width: 768px) {
    padding: 28px 0 58px 0;
    background-image: url(${bgV}),
      linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 47.46%, #000 100%),
      url(${bgImg});
    background-size: 306px 312px, 900px 900px, 900px 900px;
    background-position: 0 50%, top 100px left -280px, top 100px left -280px;
  }
  @media screen and (min-width: 1368px) {
    padding: 28px 0 83px 0;
    background-image: url(${bgV}),
      linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%, #000 100%),
      url(${bgImg}),
      linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%, #000 100%),
      url(${bgImg});
    background-size: 292px 298px, 496px 348px, 496px 348px, 432px 304px,
      432px 304px;
    background-position: top 120px left 80px, top 780px left -150px,
      top 780px left -150px, top 640px right 0, top 640px right 0;
  }
  @media screen and (min-width: 1920px) {
    padding: 28px 0 148px 0;
    background-image: url(${bgV}),
      linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%, #000 100%),
      url(${bgImg}),
      linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%, #000 100%),
      url(${bgImg});
    background-size: 668px 682px, 646px 454px, 646px 454px, 646px 454px,
      646px 454px;
    background-position: 0 140px, top 1000px left -323px, top 1000px left -323px,
      top 640px right 40px, top 640px right 40px;
  }
`;
export const Container = styled.div`
  padding-left: 20px;
  padding-right: 28px;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 92px;
    padding-right: 116px;
    max-width: 768px;
  }
  @media screen and (min-width: 1368px) {
    padding-left: 372px;
    padding-right: 308px;
    max-width: 1368px;
  }
  @media screen and (min-width: 1920px) {
    padding-left: 378px;
    padding-right: 526px;
    max-width: 1920px;
  }
`;
export const LogoContainer = styled.div`
  width: 71px;
  height: 94px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 87px;
  @media screen and (min-width: 768px) {
    margin-bottom: 144px;
  }
  @media screen and (min-width: 1368px) {
    margin-bottom: 48px;
  }
  @media screen and (min-width: 1920px) {
    margin-bottom: 51px;
  }
`;
export const Logo = styled.img`
  width: 65px;
  height: 68px;
  margin-left: auto;
  margin-right: auto;
`;

export const NameCompany = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 2.4;
  text-align: center;
`;

export const ButtonWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
  @media screen and (min-width: 1368px) {
    align-items: flex-end;
  }
  @media screen and (min-width: 1920px) {
    align-items: center;
  }
`;
export const Button = styled.a`
  display: flex;
  align-items: center;
  background-color: transparent;
  text-align: left;
  border: none;
  color: ${props => props.theme.colorText};
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 400;
  line-height: 140%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 100%;
  }
`;
export const SvgSpan = styled.span`
  position: relative;
  display: block;
  padding: 8px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;
export const PlayWrapper = styled.span`
  display: block;

  position: absolute;
  top: 35%;
  left: -100%;

  width: 42px;
  height: 23px;
  transform: rotate(132deg) translate(-50%, -50%);
  border-radius: 32.5px;
  border: 1px solid #fff;
  transform: border;
  .heroButton:hover & {
    border: 1px solid #c4f934;
  }
  .heroButton:focus & {
    border: 1px solid #c4f934;
  }
`;

export const ButtonSpan = styled.span`
  display: block;
  width: 40px;
  color: #fff;
  transform: color;
  .heroButton:hover & {
    color: #c4f934;
  }
  .heroButton:focus & {
    color: #c4f934;
  }
  @media screen and (min-width: 768px) {
    width: 60px;
  }
`;
export const PlaySvgImg = styled(PlaySvg)`
  fill: #fff;
  transform: fill;
  .heroButton:hover & {
    fill: #c4f934;
  }
  .heroButton:focus & {
    fill: #c4f934;
  }
`;
export const TextButton = styled.p`
  display: block;
  color: ${props => props.theme.colorText};
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 300;
  height: 28px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    height: 48px;
  }
  @media screen and (min-width: 1368px) {
    font-size: 56px;
    height: 56px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 88px;
    height: 108px;
  }
  &.hero-ua {
    @media screen and (min-width: 1368px) {
      font-size: 52px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 80px;
    }
  }
`;
export const TitleWrapper = styled.div`
  margin-top: 33px;
  margin-bottom: 126px;
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 60px;
  }
  @media screen and (min-width: 1368px) {
    gap: 110px;
    margin-top: 28px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 1920px) {
    gap: 29px;
    margin-top: 9px;
    margin-bottom: 189px;
  }
`;
export const HeroTitle = styled.h1`
  display: block;
  color: ${props => props.theme.colorText};
  font-family: 'Inter';
  font-size: 48px;
  text-align: start;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 80px;
    letter-spacing: -6px;
  }
  @media screen and (min-width: 1368px) {
    font-size: 92px;
    text-align: start;
  }
  @media screen and (min-width: 1920px) {
    font-size: 144px;
  }
`;
export const TitleSvg = styled.div`
  display: block;
  width: 124px;
  height: 31px;
  background-image: url(${lines});
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 171px;
    height: 35px;
  }
  @media screen and (min-width: 1368px) {
    width: 209px;
    height: 42px;
  }
  @media screen and (min-width: 1920px) {
    width: 344px;
    height: 52px;
  }
`;

export const AnimationWrapper = styled.div`
  position: relative;
  width: 255px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 408px;
    height: 244px;
  }
  @media screen and (min-width: 1368px) {
    width: 432px;
    height: 276px;
  }
  @media screen and (min-width: 1920px) {
    width: 535px;
    height: 339px;
  }
`;
export const Slogan = styled.h2`
  color: ${props => props.theme.colorText};
  text-align: center;
  font-family: 'Inter';
  font-size: 44px;
  font-weight: 300;
  line-height: 114%;
  letter-spacing: -1.5px;
  text-transform: lowercase;
  @media screen and (min-width: 768px) {
    font-size: 72px;
    line-height: 112%;
    letter-spacing: -3px;
  }
  @media screen and (min-width: 1368px) {
    font-size: 72px;
    line-height: 128%;
    letter-spacing: -6px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 88px;
    line-height: 128%;
  }
  &.hero-ua {
    font-size: 36px;
    @media screen and (min-width: 768px) {
      font-size: 58px;
    }
    @media screen and (min-width: 1368px) {
      font-size: 67px;
    }
    @media screen and (min-width: 1920px) {
      font-size: 80px;
    }
  }
`;
const animation1 = keyframes`

  0% {
    transform: translate(40%, -20%);
  }
  25% {
    transform: translate(-150%, 40%);
  }
  50% {
    transform: translate(-50%, 110%);
  }
  75% {
    transform: translate(100%, 50%);
  }
  100% {
    transform: translate(40%, -20%);
  }

`;
const animation2 = keyframes`

  0% {
    transform: translate(10%, -25%);
  }
  25% {
    transform: translate(-170%, 10%);
  }
  50% {
    transform: translate(-80%, 70%);
  }
  75% {
    transform: translate(35%, 20%);
  }
  100% {
    transform: translate(10%, -25%);
  }

`;
const animation3 = keyframes`

  0% {
    transform: translate(-10%, -20%);
  }
  25% {
    transform: translate(-150%, 30%);
  }
  50% {
    transform: translate(-80%, 80%);
  }
  75% {
    transform: translate(45%, 40%);
  }
  100% {
    transform: translate(-10%, -20%);
  }

`;
const animation4 = keyframes`

  0% {
    transform: translate(-20%, -40%);
  }
  25% {
    transform: translate(-150%, 35%);
  }
  50% {
    transform: translate(-80%, 100%);
  }
  75% {
    transform: translate(35%, 40%);
  }
  100% {
    transform: translate(-20%, -40%);
  }

`;

export const AnimatedRound = styled.div`
  display: block;

  position: absolute;
  right: 48px;
  top: 0;
  width: 92px;
  height: 92px;
  border: none;
  border-radius: 50%;
  background-image: url(${round});
  mix-blend-mode: multiply;
  box-shadow: 0px 0px 27.07183px 0px rgba(0, 0, 0, 0.02) inset,
    0px 0px 20.1608px 0px rgba(0, 0, 0, 0.06) inset,
    0px 6.76798px 13.53596px 0px rgba(0, 0, 0, 0.04) inset,
    0px 3.38398px 3.38398px 0px rgba(0, 0, 0, 0.04) inset;
  filter: drop-shadow(
    0px 6.767982006072998px 13.535964012145996px rgba(0, 0, 0, 0.04)
  );
  background: linear-gradient(180deg, #f4f90f 0%, #8cf960 100%);

  animation: ${animation1} 8s cubic-bezier(0.3, -0.7, 0.8, 1.7) infinite;
  @media screen and (min-width: 768px) {
    width: 188px;
    height: 188px;
    top: 0;
    right: 0;
    animation: ${animation2} 8s cubic-bezier(0.3, -0.7, 0.8, 1.7) infinite;
  }
  @media screen and (min-width: 1368px) {
    animation: ${animation3} 8s cubic-bezier(0.3, -0.7, 0.8, 1.7) infinite;
  }
  @media screen and (min-width: 1920px) {
    width: 240px;
    height: 240px;
    animation: ${animation4} 8s cubic-bezier(0.3, -0.7, 0.8, 1.7) infinite;
  }
`;
