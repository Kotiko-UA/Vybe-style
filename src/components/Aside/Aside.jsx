import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import {
  BurgerMenuBtn,
  ContainerMobileMenu,
  Menu,
  MenuItem,
  ContainerMenu,
  CloseBtnMenu,
  BackgroundMenuOpen,
  ArrowSvg,
  LinkWrapper,
  SocialsList,
  SocialsLink,
  LinkedinSvg,
  DribbleSvg,
  InstagramSvg,
  BehanceSvg,
} from './aside.styled';
import BurgerMenu from './images/burger-menu.png';
import { useTranslation } from 'react-i18next';
import { menuList } from './menu-list';
import { MySelect } from './Select/Select';

export const Aside = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, currentLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const disableBodyScroll = () => {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
  };
  const enableBodyScroll = () => {
    document.body.style.overflowX = 'scroll';
    document.body.style.overflowY = 'scroll';
  };

  useEffect(() => {
    const mediaWatcher = window.matchMedia('(min-width: 1368px)');
    setIsNarrowScreen(mediaWatcher.matches);

    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen);
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
      };
    } else {
      mediaWatcher.addEventListener(updateIsNarrowScreen);
      return function cleanup() {
        mediaWatcher.removeEventListener(updateIsNarrowScreen);
      };
    }
  }, [isNarrowScreen]);

  useEffect(() => {
    if (isNarrowScreen) {
      enableBodyScroll();
      return;
    }
    if (!isNarrowScreen && isOpen) {
      disableBodyScroll();
    }
    return () => {
      enableBodyScroll();
    };
  }, [isNarrowScreen, isOpen]);

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });

  const toggleMenuBtn = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeMenu();
  };

  const handleTypeSelect = e => {
    changeLanguage(e.value);
  };

  return (
    <>
      {!isOpen && (
        <BurgerMenuBtn src={BurgerMenu} alt="menu" onClick={toggleMenuBtn} />
      )}
      <BackgroundMenuOpen $open={`${isOpen}`} onClick={handleBackdropClick}>
        <ContainerMobileMenu
          className={`main-menu ${isOpen ? 'open-menu' : ''}`}
        >
          <Menu>
            <MySelect
              className="custom-select"
              dataFunc={handleTypeSelect}
              lang={i18n.language}
            />
            <ContainerMenu className="container-menu-ua">
              <ul>
                {menuList.map(({ nameEn, nameUa, link, id }) => {
                  return id !== 9 ? (
                    <MenuItem
                      key={id}
                      className="menu-items"
                      onClick={() => {
                        enableBodyScroll();
                        closeMenu();
                      }}
                    >
                      <a href={link}>
                        {currentLanguage === 'en' ? nameEn : nameUa}
                      </a>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      key={id}
                      className="menu-items"
                      onClick={() => {
                        enableBodyScroll();
                        closeMenu();
                      }}
                    >
                      <LinkWrapper href={link}>
                        {currentLanguage === 'en' ? nameEn : nameUa}
                        <ArrowSvg />
                      </LinkWrapper>
                    </MenuItem>
                  );
                })}
              </ul>
              <CloseBtnMenu onClick={toggleMenuBtn} />
            </ContainerMenu>
          </Menu>
          {!isNarrowScreen && (
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
          )}
        </ContainerMobileMenu>
      </BackgroundMenuOpen>
    </>
  );
};
