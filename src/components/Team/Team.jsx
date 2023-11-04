import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';
import { useTranslation } from 'react-i18next';
import { Container, H2, Wrapper } from './Team.styled';
import { MobSwiper } from './TeamCarts/TeamCartsMob';
import { DesktopSwiper } from './TeamCarts/TeamCartsDesktop';

export const Team = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = throttle(200, () => {
      setWindowWidth(window.innerWidth);
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Container id="team">
        <H2>{t('team-title')}</H2>
        {windowWidth < 1380 ? (
          <MobSwiper windowWidth={windowWidth} />
        ) : (
          <DesktopSwiper windowWidth={windowWidth} />
        )}
      </Container>
    </Wrapper>
  );
};
