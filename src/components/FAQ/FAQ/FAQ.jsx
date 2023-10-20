import { Section, Container, Title, List } from './FAQ.styled';
import { ListItem } from '../ListItem/ListItem';
import { data } from '../data';
import { useState, useRef } from 'react';
import { ReactComponent as ArrowUp } from '../arrowup.svg';
export const Faq = () => {
  const [isShownAll, setIsShownAll] = useState(false)
  const currentRef = useRef(null);
  const scrollToBottom = () => {
    currentRef.current && currentRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Section id='faq'>
      <Container>
        <Title>&#47;&#47;: FAQ</Title>
        <List ref={currentRef}>
          {data
          .filter((item, index) => isShownAll || index < 4)
          .map((item) => (
          <ListItem key={item.id} item={item} />
          ))}
        </List>
        <button className='button' type="button" onClick={() => {
          setIsShownAll(!isShownAll);
        scrollToBottom()
        }}>&#123; {`${isShownAll ? 'less' : 'more'}`}.//<ArrowUp className='svg-arrow' $data={isShownAll} /></button>
      </Container>
    </Section>
  );
};
