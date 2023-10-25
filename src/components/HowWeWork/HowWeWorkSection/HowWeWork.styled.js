import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.blackColor};
  color: ${({ theme }) => theme.colorText};
  margin: 0 auto;
  padding-top: 56px;
  padding-bottom: 56px;
  @media screen and (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 85px;
    padding-bottom: 85px;
  }
  @media screen and (min-width: 1920px) {
    padding-top: 110;
    padding-bottom: 110px;
  }
`;

export const Container = styled.div`
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 480px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1368px) {
    max-width: 1368px;
    padding-left: 60px;
    padding-right: 245px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    padding-left: 120px;
    padding-right: 196px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colorText};
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 40px;
  transition: color ${({ theme }) => theme.animationStyles};

  &:hover,
  :focus {
    color: ${({ theme }) => theme.brandColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 70px;
    margin-bottom: 80px;
  }
`;

export const InfoBlock = styled.div`
  @media screen and (min-width: 1368px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    align-items: flex-start;
    justify-content: flex-end;
  }
  @media screen and (min-width: 1920px) {
    gap: 25px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
  }
  @media screen and (min-width: 1368px) and (max-width: 1919px) {
    width: 551px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (min-width: 1920px) {
    padding-right: 32px;
    width: 791px;
    gap: 80px;
  }
`;

export const Thumb = styled.div`
  position: relative;
  left: -20px;
  width: 100vw;
  max-width: 480px;
  height: 383px;
  flex-shrink: 0;
  border: 1px solid #c4f934;
  @media screen and (min-width: 768px) {
    position: static;
    max-width: 688px;
    height: 669px;
  }
  @media screen and (min-width: 1368px) {
    position: static;
    max-width: 488px;
    height: 751px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 787px;
    height: 905px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1920px) {
    content: url(${props => props.$maxphoto});
  }
`;

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  @media screen and (min-width: 1368px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 1920px) {
    width: 100%;
  }
`;

export const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  width: 100% !important;

  top: 0;
  left: 0;
  @media screen and (min-width: 1368px) {
    height: 100% !important;
  }
  @media screen and (min-width: 1920px) {
    height: 100% !important;
  }
`;
