import React from 'react';
import { BackgroundImage } from './BgFooterAndForm.styled';
import { ContactForm } from 'components/Form/Form/Form';
import { Footer } from '../Footer/Footer';

export const BgFooterAndForm = () => {
  return (
    <BackgroundImage>
      <ContactForm />
      <Footer />
    </BackgroundImage>
  );
};
