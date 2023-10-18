import { styled } from 'styled-components';
import { ReactComponent as PlusIcon } from '../img/plus.svg';
import { ReactComponent as CloseIcon } from '../img/close.svg';
import ReactPlayer from 'react-player'

export const ListLi = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  @media screen and (min-width: 1368px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1368px) and (max-width: 1919px) {
    width: 511px;
  }
  @media screen and (min-width: 1920px){
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
   @media screen and (min-width: 1368px) {
    width:100%;
  }
`;

export const Number = styled.p`
  color: ${({ theme }) => theme.greyFaqColor};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const ContainerBlock = styled.div`
  flex-grow: 1;

  @media screen and (min-width: 1368px) and (max-width: 1919px) {
    width: 100%;  
  }
`;

export const InfoBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  vertical-align: middle;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 100%;
   
  }
`;

export const HiddenText = styled.p`
  max-width: 300px;
  color: rgba(255, 255, 255, 0.45);
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  @media screen and (min-width: 480px) {
    max-width: 380px;
  }
  @media screen and (min-width: 768px) {
    max-width: 498px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
  }
  @media screen and (min-width: 1368px) and (max-width: 1919px) {
    max-width: 403px;
  }
   @media screen and (min-width: 1920px) {
    max-width: 595px;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => (props.$focus === 'true' ? '#C4F934' : '')};
  // color: ${props => (props.$isTextShown === 'true' ? '#C4F934' : '')};
  ${InfoBlock}:hover & {
    color: ${({ theme }) => theme.brandColor};
  }
  ${InfoBlock}:focus & {
    color: ${({ theme }) => theme.brandColor};
  }

  @media screen and (min-width: 768px) {
    width: 498px;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media screen and (min-width: 1368px) and (max-width: 1919px) {
    width: 312px;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 1.25;
    flex-grow: 1;
  }
  @media screen and (min-width: 1920px) {
          width: 590px;
      }
`;

export const Button = styled.button`
  cursor: pointer;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: ${props => (props.$data === 'true' ? '1px solid white' : '')};
  border-radius: 50%;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${InfoBlock}:hover & {
    color: ${({ theme }) => theme.brandColor};
    border-color: ${({ theme }) => theme.brandColor};
    outline: none;
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.brandColor};
  }
`;

export const PlusSvg = styled(PlusIcon)`
  ${InfoBlock}:hover & path {
    fill: ${({ theme }) => theme.brandColor};
  }
  :focus & path {
    fill: ${({ theme }) => theme.brandColor};
  }

`;
export const CloseSvg = styled(CloseIcon)`
  ${InfoBlock}:hover & path {
    fill: ${({ theme }) => theme.brandColor};
  }
  :focus & path {
    fill: ${({ theme }) => theme.brandColor};
  }
  path {
    // fill: ${props => (props.$data === 'true' ? '#C4F934' : '')};
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
    // position: static;
    left: -16px;
    max-width: 688px;
    height: 669px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: center;

  @media screen and (min-width:768px) and (max-width: 1367px) {
    content: url(${props => props.$tabletphoto})
  }
`;

export const PlayerWrapper = styled.div`
position: relative;
  padding-top: 56.25%;
  width: 100%;
  height: 383px;
`

export const StyledPlayer = styled(ReactPlayer)`
position: absolute;
  top: 0;
  left: 0;
  height: 383px !important;
  width: 100% !important;
`