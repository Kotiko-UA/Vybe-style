import React, { useState } from 'react';
import {
  CloseSvgBtn,
  ContactMessage,
  PopUpSuccessContainer,
  SuccessBtn,
  SuccessMessage,
} from './PopUpSuccess.styled';
import { useTranslation } from 'react-i18next';

export const PopUpSuccess = ({ handlePopUp }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  const handleClosePopup = () => {
    setIsOpen(false);
    handlePopUp();
  };
  return (
    isOpen && (
      <PopUpSuccessContainer onClick={handleClosePopup}>
        <CloseSvgBtn type="button" onClick={handleClosePopup} />
        <SuccessMessage>{t('form-request')}</SuccessMessage>
        <ContactMessage>{t('form-contact')}</ContactMessage>
        <SuccessBtn type="button" onClick={handleClosePopup}>
          {t('form-perfect')}
        </SuccessBtn>
      </PopUpSuccessContainer>
    )
  );
};
