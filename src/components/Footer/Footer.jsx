import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import { useMediaQuery } from '@react-hook/media-query';
import { useTranslation } from 'react-i18next';
import { PopUp } from './PopUp/PopUp';
import {
  FooterBlock,
  FooterContainer,
  AddressLink,
  FooterText,
  SocialsLink,
  SocialsList,
  Address,
  LinkedinSvg,
  InstagramSvg,
  CopyrightSvg,
  CreatedByLink,
  DribbleSvg,
  BehanceSvg,
  UaFlagSvg,
  CopyrightText,
  CopyrightYearWrap,
  CopyrightWrap,
  CopyrightTabletText,
} from './Footer.styled';

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isModalOpen]);

  const isScreenTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1367px)'
  );

  return (
    <FooterBlock>
      <FooterContainer
        className={currentLanguage === 'en' ? '' : 'uk-footer-container'}
      >
        <Address className={currentLanguage === 'en' ? '' : 'uk-address'}>
          <UaFlagSvg width="20px" height="12px" />
          <AddressLink
            href="https://maps.app.goo.gl/QN7KGJJXFsZkZtjQ7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('footer-address')}
          </AddressLink>
        </Address>
        <SocialsList>
          <li>
            <SocialsLink
              href="https://www.linkedin.com/company/vibestyle/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinSvg width="19px" height="18px" />
            </SocialsLink>
          </li>
          <li>
            <SocialsLink
              href="https://dribbble.com/klimevtushenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DribbleSvg width="24px" height="24px" />
            </SocialsLink>
          </li>
          <li>
            <SocialsLink
              href="https://www.instagram.com/uxui_evtushenkoklim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramSvg width="19px" height="19px" />
            </SocialsLink>
          </li>
          <li>
            <SocialsLink
              href="https://www.behance.net/klymevtushenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BehanceSvg width="23px" height="15px" />
            </SocialsLink>
          </li>
        </SocialsList>
        <CreatedByLink
          onClick={handleModal}
          className={currentLanguage === 'en' ? '' : 'uk-createdBy'}
        >
          {t('footer-createdby-text1')} <br /> {t('footer-createdby-text2')}
        </CreatedByLink>
        <PopUp isModalOpen={isModalOpen} onCloseModal={handleModal} />
        <CopyrightWrap>
          {isScreenTablet ? (
            <CopyrightTabletText>
              {t('footer-copyright-text1')}
            </CopyrightTabletText>
          ) : (
            <CopyrightText
              className={currentLanguage === 'en' ? '' : 'uk-copyright-text'}
            >
              {t('footer-copyright-text2-part1')} <br />
              {t('footer-copyright-text2-part2')}
            </CopyrightText>
          )}
          <CopyrightYearWrap>
            <CopyrightSvg width="16px" height="16px" />
            <FooterText>2023</FooterText>
          </CopyrightYearWrap>
        </CopyrightWrap>
      </FooterContainer>
    </FooterBlock>
  );
};
