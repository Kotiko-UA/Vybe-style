import { useTranslation } from 'react-i18next';
import projectCarts from './PortfolioCarts/CartsArrey';
import { Container, H2, Ul, Wrapper } from './Portfolio.styled';
import { useEffect, useState } from 'react';
import { PortfolioCarts } from './PortfolioCart';
import { AutomaticSwiper } from './AutomaticSwiper';
import { ControlingSwiper } from './ControllerSwiper';

export function Portfolio() {
  const { t } = useTranslation();

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

  return (
    <Wrapper>
      <Container id="portfolio">
        <H2>{t('portfolio-title')}</H2>
        {!isNarrowScreen ? (
          <>
            <Ul>
              <PortfolioCarts projectCarts={projectCarts} />
            </Ul>
            <ControlingSwiper slideCount={1} projectCarts={projectCarts} />
          </>
        ) : (
          <>
            <AutomaticSwiper projectCarts={projectCarts} />
            <ControlingSwiper slideCount={3} projectCarts={projectCarts} />
          </>
        )}
      </Container>
    </Wrapper>
  );
}
