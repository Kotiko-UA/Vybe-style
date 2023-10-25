import styled from 'styled-components';

import { ReactComponent as CloseSvg } from '../../HowWeWork/img/close.svg';
import bgMobile from './data/mobileBG.png';
import bgMobile2x from './data/mobileBG2x.png';
import bgMobile2 from './data/mobileBG2.png';
import bgMobile2x2 from './data/mobileBG2x2.png';
import bgTablet2 from './data/tabletBG2.png';
import bgTablet2x2 from './data/tabletBG2x2.png';
import newBgTablet from '../../HowWeWork/img/newBGphoto.png';
import newBgTablet2x from '../../HowWeWork/img/newBGphoto2x.png';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  visibility: visible;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.is-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  &.is-hidden .modal {
    transform: scale(0.5);
  }
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

transform:  scale(1);
 transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);



.title {
    margin-bottom: 10px;
    color:${({ theme }) => theme.colorText};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .text {
   color: ${({ theme }) => theme.normalColor};
    font-family: Inter;
    font-size: ${props => (props.data === 'en' ? '16px' : '12px')} ;
    font-style: normal;
    font-weight: 300;
    line-height: normal;    
    margin-bottom: 10px;
}

  .list {
    width: 296px;
    height: 307px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
}
  .li-item{
   display: flex;
width: calc((100% - 15px) / 2);

flex-direction: column;
align-items: flex-start;
gap: 18px;
flex-shrink: 0;
cursor: pointer;
  }

  .link {
    width: 100%;
  }

  .thumb {
   width: 100%;
    height: 120px;
    flex-shrink: 0;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.animationTransform};
  }

  .team-role {
color: ${({ theme }) => theme.normalColor};
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 1.43;
text-transform: lowercase;
margin-top: 4px;
margin-bottom: 4px; 
transition: all ${({ theme }) => theme.animationTransform};
  }
  .team-name{
    color: ${({ theme }) => theme.colorText};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
        text-transform: capitalize;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 1368px) {
    width: 592px;
    height: 604px;
    padding: 24px;
            background-image: url(${newBgTablet}), url(${bgTablet2});
     background-repeat: no-repeat;
     background-size: 218px 153px, 95px 152px;
     background-position: left -30px bottom 325px, right 0px top 285px;
    @media (min-device-pixel-ratio: 2),
   (min-resolution: 192dpi),
   (min-resolution: 2dppx) {
    background-image: url(${newBgTablet2x}), url(${bgTablet2x2});
   }
   .title {
    text-align:center;
   }
    .text {
    text-align:center;
   }
    .team-name{
    font-size: 16px;
    }
    .list {
        margin: 0 auto;
        width: 520px;
        height: 485px;
        padding: 10px;
        gap:30px;
        row-gap: 20px;      
    }
    .li-item {
      
        width: calc((100% - 30px) / 2)
    }
    .thumb {
        width: 100%;
        height: 190px;
    }
      .li-item:hover .team-name {
    color:${({ theme }) => theme.brandColor};
    transform: translate(60px,10px) scale(1.2);
    
  }
.li-item:hover .team-role {
    color: ${({ theme }) => theme.colorText};
    transform: translate(85px, 10px) scale(1.2);
  }
.li-item:hover .image {
      transform: scale(1.1);
    }
  @media screen and (min-width: 1920px) {
    width: 1124px;
    height: 360px;
    background-size: 200px 153px, 85px 152px;
    background-position: left -26px bottom 75px, right -25px top 200px;
    .list {
      margin: 0 auto;
      width: 1060px;
      height: 240px;
      flex-wrap: nowrap;
      padding: 10px;
      gap: 40px;
    }
    .li-item {
      width: calc((100% - 30px) / 2);
    }
    .thumb {
      width: 100%;
      height: 190px;
    }
    .li-item:hover .team-name {
      color: ${({ theme }) => theme.brandColor};
      transform: translate(25px, 15px) scale(1.2);
    }
    .li-item:hover .team-role {
      color: ${({ theme }) => theme.colorText};
      transform: translate(60px, 15px) scale(1.2);
    }
    .li-item:hover .image {
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 1920px) {
width: 1124px;
height: 360px;
background-size: 200px 153px, 85px 152px;
background-position: left -26px bottom 75px, right -25px top 200px;
.list {
        margin: 0 auto;
        width: 1060px;
        height: 240px;
        flex-wrap: nowrap;
        padding: 10px;
        gap:40px;
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
  & path {
    fill: ${({ theme }) => theme.greyColorPopup};
  }

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover path {
    fill: ${({ theme }) => theme.brandColor};
  }
  &:hover {
    scale: 1.25;
    transform: rotate(180deg);
  }
`;
