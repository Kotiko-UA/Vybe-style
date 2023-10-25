import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';
import LeftSideBgImgLaptop1x from '../images/form_and_footer_background_1368px_1x.png';
import LeftSideBgImgDesktop1x from '../images/form_and_footer_background_1920px_1x.png';
import LeftSideBgImgLaptop2x from '../images/form_and_footer_background_1368px_2x.png';
import LeftSideBgImgDesktop2x from '../images/form_and_footer_background_1920px_2x.png';
import { ReactComponent as CloseSvg } from '../images/icons/close-icon.svg';

export const FormSection = styled.section`
  padding-top: 56px;
  padding-bottom: 56px;

  @media only screen and (min-width: 768px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  @media only screen and (min-width: 1368px) {
    padding-top: 85px;
    padding-bottom: 85px;
  }

  @media only screen and (min-width: 1920px) {
    padding-top: 110px;
    padding-bottom: 110px;
  }
`;

export const FormContainer = styled.div`
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (min-width: 1368px) {
    max-width: 1368px;
    padding-left: 0px;
    padding-right: 201px;
  }

  @media only screen and (min-width: 1920px) {
    max-width: 1920px;
    padding-left: 120px;
  }
`;

export const PositionWrapper = styled.div`
  @media only screen and (min-width: 1368px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FormSectionHeader = styled.h2`
  margin-bottom: 40px;
  width: 247px;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.2;
  transition: color ${({ theme }) => theme.animationStyles};

  &:hover,
  :focus {
    color: ${({ theme }) => theme.brandColor};
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 56px;
    width: 555px;
    font-size: 40px;
    line-height: 1.8;
    letter-spacing: -2.4px;
  }

  @media only screen and (min-width: 1368px) {
    margin-bottom: 9px;
  }

  @media only screen and (min-width: 1920px) {
    width: 878px;
    font-size: 70px;
    margin-bottom: 80px;
  }
`;

export const LeftSideBgWrap = styled.div`
  @media screen and (min-width: 1368px) {
    width: 338px;
    height: 462px;
    background-image: linear-gradient(
        267deg,
        #000 2.55%,
        rgba(0, 0, 0, 0) 80.9%
      ),
      url(${LeftSideBgImgLaptop1x});

    background-size: contain;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          267deg,
          #000 2.55%,
          rgba(0, 0, 0, 0) 80.9%
        ),
        url(${LeftSideBgImgLaptop2x});
    }
  }

  @media screen and (min-width: 1920px) {
    width: 580px;
    height: 550px;
    background-image: linear-gradient(
        267deg,
        #000 2.55%,
        rgba(0, 0, 0, 0) 80.9%
      ),
      url(${LeftSideBgImgDesktop1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          267deg,
          #000 2.55%,
          rgba(0, 0, 0, 0) 80.9%
        ),
        url(${LeftSideBgImgDesktop2x});
    }
  }
`;
export const FormAndContactBlockWrap = styled.div``;

export const Form = styled(FormikForm)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.64;
  letter-spacing: -0.16px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.43;
  }

  @media only screen and (min-width: 1368px) {
    width: 700px;
  }

  @media only screen and (min-width: 1920px) {
  }
`;
export const FormikInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 24px;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 24px;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 1368px) {
    column-gap: 16px;
  }
`;

export const FormControlWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 332px;
    column-gap: 10px;
  }

  @media only screen and (min-width: 1368px) {
    width: 342px;
  }
`;

export const FormikInput = styled(Field)`
  width: 100%;
  padding: 13px 24px;

  border: 1px solid #545454;
  outline: none;
  background-color: ${({ theme }) => theme.blackColor};

  transition: border ${({ theme }) => theme.animationStyles};

  &:hover,
  &:focus {
    border: 1px solid #c4f934;
  }

  @media only screen and (min-width: 768px) {
    width: 332px;
    padding: 18px 24px;
  }

  @media only screen and (min-width: 1368px) {
    width: 342px;
  }
`;
export const StyledErrorMessage = styled.div`
  position: absolute;
  top: 44px;

  color: ${({ theme }) => theme.redColor};
  font-size: 14px;

  @media screen and (min-width: 768px) {
    top: 56px;
  }
`;

export const FilePickerWrap = styled.div``;

export const FormikFilePicker = styled(Field)`
  background-color: ${({ theme }) => theme.brandColor};
`;

export const AttachedFilesList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
`;

export const SelectedFilesText = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${({ theme }) => theme.lightGreyColor};
`;
export const SelectedFilesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const FilePickerError = styled.div`
  position: relative;
  top: 10px;

  color: ${({ theme }) => theme.redColor};
  font-size: 14px;
`;

export const CloseSvgBtn = styled(CloseSvg)`
  width: 14px;
  height: 14px;
  stroke: ${({ theme }) => theme.greyColorPopup};

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FileNameText = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${({ theme }) => theme.colorText};
`;

export const SelectedFilesItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  transition: stroke ${({ theme }) => theme.animationStyles};
  &:hover,
  &:focus {
    & ${FileNameText} {
      color: ${({ theme }) => theme.brandColor};
    }
    & ${CloseSvgBtn} {
      stroke: ${({ theme }) => theme.brandColor};
    }
  }
`;

export const TextareaAndAttachedWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  margin-bottom: 42px;

  @media only screen and (min-width: 768px) {
    row-gap: 16px;
    margin-bottom: 8px;
  }
`;

export const FormikTextarea = styled(Field)`
  width: 100%;
  padding: 16px 10px 17px 24px;
  height: 139px;
  border: 1px solid #545454;
  resize: none;
  background-color: ${({ theme }) => theme.blackColor};

  transition: border ${({ theme }) => theme.animationStyles};

  &:hover,
  &:focus {
    border: 1px solid #c4f934;
  }

  @media only screen and (min-width: 768px) {
    height: 104px;
  }
`;

export const ContactUsBtn = styled.button`
  width: 100%;
  padding: 16px 40px;
  position: relative;
  border: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.greyColor : theme.brandColor};

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

  &:hover::after {
    opacity: 1;
  }
  &:focus::after {
    opacity: 1;
  }

  @media only screen and (min-width: 768px) {
    display: block;
    max-width: 332px;
    margin-top: 0px;
    margin-left: auto;
  }
`;
