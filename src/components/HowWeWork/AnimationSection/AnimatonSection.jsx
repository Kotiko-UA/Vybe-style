import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  Section,
  Container,
  SvgEllipse,
  Transparency,
  Quality,
  Satisfaction,
} from './AnimationSection.styled';
import { useTranslation } from 'react-i18next';
export const AnimationSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <Section ref={ref}>
      <Container>
        <Transparency $isInView={`${isInView}`}>
          {t('section-animation-word-1')}
        </Transparency>
        <Quality $isInView={`${isInView}`}>
          {t('section-animation-word-2')}
        </Quality>
        <Satisfaction $isInView={`${isInView}`}>
          {t('section-animation-word-3')}
        </Satisfaction>
        <SvgEllipse />
        <SvgEllipse />
        <SvgEllipse />
      </Container>
    </Section>
  );
};
