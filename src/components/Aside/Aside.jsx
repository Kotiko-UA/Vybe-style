import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from 'components/HookLang/LanguageContext';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {
  Logo,
  NameCompany,
  BurgerMenuBtn,
  ContainerMobileMenu,
  Menu,
  MenuItem,
  ContainerMenu,
  CloseBtnMenu,
  BackgroundMenuOpen,
  ArrowSvg,
  LinkWrapper,
} from './aside.styled';
import LogoVibeStyle from './images/logo-vibe-style.png';
import BurgerMenu from './images/burger-menu.png';
import { useTranslation } from 'react-i18next';
import { menuList } from './menu-list';
import { MySelect } from './Select/Select';

export const Aside = () => {
  const { i18n } = useTranslation();
  const { changeLanguage, currentLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

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
      enableBodyScroll(document.body);
      return;
    }
    if (!isNarrowScreen && isOpen) {
      disableBodyScroll(document.body);
    }
    return () => {
      enableBodyScroll(document.body);
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
          <Logo src={LogoVibeStyle} alt="logo-company" />
          <NameCompany>VibeStyle</NameCompany>
          <Menu>
            <MySelect
              className="custom-select"
              dataFunc={handleTypeSelect}
              lang={i18n.language}
            />
            {/* <SelectLang
                value={i18n.language}
                onChange={e => changeLanguage(e.target.value)}
              >
                <SelectLangOption value="en">English</SelectLangOption>
                <SelectLangOption value="ua">Українська</SelectLangOption>
              </SelectLang> */}

            <ContainerMenu className="container-menu-ua">
              <ul>
                {menuList.map(({ nameEn, nameUa, link, id }) => {
                  return id !== 9 ? (
                    <MenuItem
                      key={id}
                      className="menu-items"
                      onClick={() => {
                        enableBodyScroll(document.body);
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
                        enableBodyScroll(document.body);
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
        </ContainerMobileMenu>
      </BackgroundMenuOpen>
    </>
  );
};
