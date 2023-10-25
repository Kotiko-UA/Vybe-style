import styled from 'styled-components';
import { ReactComponent as CloseSvg } from '../images/icons/close-icon.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const PopUpSuccessContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 302px;
  border: 1px solid ${({ theme }) => theme.brandColor};
  padding: 24px;
  z-index: 999;

  background-color: ${({ theme }) => theme.blackColor};

  @media only screen and (min-width: 1368px) {
    width: 424px;
  }
`;
export const SuccessMessage = styled.p`
  width: 135px;
  margin-bottom: 18px;
  font-size: 16px;
  @media only screen and (min-width: 1368px) {
    width: 100%;
  }
`;
export const ContactMessage = styled.p`
  margin-bottom: 18px;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.greyColorPopup};
`;
export const SuccessBtn = styled.button`
  position: relative;
  width: 246px;
  padding: 16px 39px 18px 40px;

  border: none;
  background-color: ${({ theme }) => theme.brandColor};

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.16px;
  text-transform: uppercase;
  text-align: left;
  color: ${({ theme }) => theme.blackColor};

  cursor: pointer;

  .btn-text {
    color: ${({ theme }) => theme.blackColor};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.31;
    letter-spacing: -0.16px;
    text-transform: uppercase;
    text-align: left;
    position: relative;
    z-index: 333;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${({ theme }) => theme.hoverBtnGradient};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.animationTransform};
  }

  &:not([disabled]):hover::after {
    opacity: 1;
  }
  &:not([disabled]):focus::after {
    opacity: 1;
  }

  @media only screen and (min-width: 1368px) {
    width: 100%;
  }
`;

export const CloseSvgBtn = styled(CloseSvg)`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 24px;
  right: 24px;
  stroke: ${({ theme }) => theme.greyColorPopup};

  transition: stroke ${({ theme }) => theme.animationTransform};

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.brandColor};
  }
`;
