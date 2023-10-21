import { Section, Container, Title, List, SvgArrow,ButtonFaq } from './FAQ.styled';
import { ListItem } from '../ListItem/ListItem';
import { data } from '../data';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const Faq = () => {
  const [isShownAll, setIsShownAll] = useState(false)
  const { t } = useTranslation();
  const currentRef = useRef(null);
  const scrollToBottom = () => {
    currentRef.current && currentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Section id='faq'>
      <Container>
        <Title>&#47;&#47;: faq</Title>
        <List ref={currentRef}>
          {data
          .filter((item, index) => isShownAll || index < 4)
          .map((item) => <ListItem key={item.id} item={item} />)}
        </List>
        <ButtonFaq className='button' type="button" onClick={() => {
          setIsShownAll(!isShownAll);
          scrollToBottom()
        }}><span className='btn-span'>&#123; {`${isShownAll ? t('faq-less') : t('faq-more')}`}.//</span><SvgArrow className='svg-arrow' $data={`${isShownAll}`} /></ButtonFaq>
      </Container>
    </Section>
  );
};
