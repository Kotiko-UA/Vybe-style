import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from 'components/HookLang/LanguageContext';
import { createPortal } from 'react-dom';
import { Overlay, Modal, CloseSvgBtn } from './PopUp.styled';
import { data } from './data/contacts';

const modal = document.querySelector('#teampopup');

export const PopUp = ({ isModalOpen, onCloseModal }) => {
  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [horizontal, setHorizontal] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    if (screenHeight < 440) {
      setHorizontal(true);
    } else {
      setHorizontal(false);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenHeight]);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal, isModalOpen]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay
      onClick={handleBackdropClick}
      className={`${isModalOpen ? '' : 'is-hidden'}`}
    >
      <Modal className={`modal ${horizontal ? 'horizontal' : ''}`}>
        <CloseSvgBtn onClick={onCloseModal} />
        <h2 className="title">{t('modal-title')}</h2>
        <p data={currentLanguage} className="text">
          {t('modal-text')}
        </p>
        <ul className={`list ${horizontal ? 'list-horizontal' : ''}`}>
          {data.map(
            ({
              id,
              image,
              teamRole,
              teamRoleUA,
              teamNameUA,
              teamName,
              projectUrl,
            }) => (
              <li
                className={`li-item ${horizontal ? 'li-item-horizontal' : ''}`}
                key={id}
              >
                <a
                  className="link"
                  href={projectUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    className={`thumb ${horizontal ? 'thumb-horizontal' : ''}`}
                  >
                    <img className="image" src={image} alt={teamName}></img>
                  </div>
                  <p className="team-role">
                    {currentLanguage === 'en' ? teamRole : teamRoleUA}
                  </p>
                  <p
                    className={`team-name ${
                      horizontal ? 'team-name-horizontal' : ''
                    }`}
                  >
                    {currentLanguage === 'en' ? teamName : teamNameUA}
                  </p>
                </a>
              </li>
            )
          )}
        </ul>
      </Modal>
    </Overlay>,
    modal
  );
};
