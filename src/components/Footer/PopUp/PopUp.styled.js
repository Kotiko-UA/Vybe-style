import styled from 'styled-components';
import { ReactComponent as CloseSvg } from '../../Form/images/icons/close-icon.svg';
import bgMobile from './data/mobileBG.png';
import bgMobile2x from './data/mobileBG2x.png';
import bgMobile2 from './data/mobileBG2.png';
import bgMobile2x2 from './data/mobileBG2x2.png';
import bgTablet from './data/tabletBG.png';
import bgTablet2x from './data/tabletBG2x.png';
import bgTablet2 from './data/tabletBG2.png';
import bgTablet2x2 from './data/tabletBG2x2.png';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  overflow-y: scroll;
`;

export const Modal = styled.div`
  position: relative;
  width: 352px;
  height: 440px;
  padding-top: 24px;
  padding-left: 20px;

  border: 1px solid ${({ theme }) => theme.brandColor};
  background-color: ${({ theme }) => theme.blackColor};
  background-image: url(${bgMobile}), url(${bgMobile2});
  background-repeat: no-repeat;
  background-size: 111px, 40px;
  background-position: left -5px bottom 150px, right 0px top 200px;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x}), url(${bgMobile2x2});
  }

  .title {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colorText};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .text {
    color: ${({ theme }) => theme.greyColorPopup};
    font-family: Inter;
    font-size: ${props => (props.data === 'en' ? '16px' : '12px')};
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 24px;
  }

  .list {
    width: 296px;
    height: 307px;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: center;
  }
  .li-item {
    display: flex;
    width: calc((100% - 56px) / 3);
    height: 137px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    flex-shrink: 0;
    cursor: pointer;
  }

  .thumb {
    width: 80px;
    height: 76px;
    flex-shrink: 0;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.animationTransform};
  }

  .team-role {
    color: ${({ theme }) => theme.colorText};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.43;
    text-transform: lowercase;
    margin-top: 12px;
    margin-bottom: 4px;
    transition: all ${({ theme }) => theme.animationTransform};
  }
  .team-name {
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
    transition: all ${({ theme }) => theme.animationTransform};
  }

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 604px;
    padding: 24px;
    background-image: url(${bgTablet}), url(${bgTablet2});
    background-repeat: no-repeat;
    background-size: 218px 153px, 95px 152px;
    background-position: left -5px bottom 325px, right 0px top 285px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgTablet2x}), url(${bgTablet2x2});
    }
    .list {
      margin: 0 auto;
      width: 520px;
      height: 485px;
      padding: 10px;
      gap: 40px;
    }
    .li-item {
      width: calc((100% - 80px) / 3);
    }
    .thumb {
      width: 140px;
      height: 133px;
    }
    .li-item:hover .team-name {
      color: ${({ theme }) => theme.brandColor};
      transform: translateY(15px) scale(1.2);
    }
    .li-item:hover .team-role {
      color: blue;
      transform: translate(30px, 15px) scale(1.2);
    }
    .li-item:hover .image {
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 1368px) {
    width: 1124px;
    height: 360px;
    background-size: 200px 153px, 85px 152px;
    background-position: left -5px bottom 75px, right -25px top 200px;
    .list {
      margin: 0 auto;
      width: 1060px;
      height: 240px;
      flex-wrap: nowrap;
      padding: 10px;
      gap: 40px;
    }
    .li-item {
      width: calc((100% - 160px) / 5);
    }
  }
`;

export const CloseSvgBtn = styled(CloseSvg)`
  cursor: pointer;
  position: absolute;
  width: 14px;
  height: 14px;
  top: 24px;
  right: 24px;
  stroke: ${({ theme }) => theme.greyColorPopup};
  transition: stroke ${({ theme }) => theme.animationStyles},
    scale ${({ theme }) => theme.animationTransform},
    transform ${({ theme }) => theme.animationTransform};

  &:hover {
    stroke: ${({ theme }) => theme.brandColor};
    scale: 1.25;
    transform: rotate(180deg);
  }
`;
