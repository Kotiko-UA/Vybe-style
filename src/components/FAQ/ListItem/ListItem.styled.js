import { styled } from 'styled-components';
import { ReactComponent as PlusIcon } from '../../HowWeWork/img/plus.svg';
import { ReactComponent as CloseIcon } from '../../HowWeWork/img/close.svg';

export const LiItem = styled.li`
  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    gap: 52px;
    align-items: flex-start;
    &:not(:last-child):after {
      content: '';
      background-color: rgba(175, 175, 175, 0.41);
      position: absolute;
      bottom: -40px;
      left: -35px;
      height: 2px;
      width: 688px;
    }
    width: 872px;
    padding: 40px 36px;
  }
  @media screen and (min-width: 1920px) {
    width: 1180px;
    padding: 52px 60px;
    &:not(:last-child):after {
      left: 0;
    }
  }
`;
export const Number = styled.p`
  color: ${({ theme }) => theme.greyFaqColor};
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 33px;

  @media screen and (min-width: 768px) {
    color: rgba(175, 175, 175, 0.41);
    font-size: 48px;
    letter-spacing: 0.25px;
    margin-bottom: 0;
  }
`;
export const ContainerBlock = styled.div`
  flex-grow: 1;
`;

export const InfoBlock = styled.div`
  cursor: pointer;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    // width: 524px;
  }
  @media screen and (min-width: 1368px) {
    width: 100%;
    flex-grow: 1;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colorText};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${InfoBlock}:hover & {
    color: ${({ theme }) => theme.brandColor};
  }
  ${InfoBlock}:focus & {
    color: ${({ theme }) => theme.brandColor};
  }
  @media screen and (min-width: 768px) {
    width: 403px;
    font-size: 32px;
  }
  @media screen and (min-width: 1368px) {
    width: 620px;
  }
  @media screen and (min-width: 1920px) {
    width: 800px;
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
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: ${props => (props.$data === 'true' ? '1px solid white' : '')};
  border-radius: 50%;
  &:focus {
    outline: none;
  }
  ${InfoBlock}:hover & {
    color: ${({ theme }) => theme.brandColor};
    border-color: ${({ theme }) => theme.brandColor};
    outline: none;
  }
`;

export const HiddenText = styled.p`
  white-space: pre-line;
  vertical-align: bottom;
  max-width: 300px;
  color: rgba(255, 255, 255, 0.45);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.33;
  margin-top: 31px;
  @media screen and (min-width: 480px) {
    max-width: 380px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 900px;
  }
`;

export const PlusSvg = styled(PlusIcon)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${InfoBlock}:hover & path {
    fill: #c4f934;
  }
`;
export const CloseSvg = styled(CloseIcon)`
transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
@media screen and (min-width:768px){
    ${InfoBlock}:hover & path{
           fill: ${({ theme }) => theme.brandColor};
};
${InfoBlock}:hover & {
    scale: 1.25;
    transform: rotate(180deg)
}
`;
