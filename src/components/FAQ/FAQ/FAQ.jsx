import { Section, Container, Title, List } from './FAQ.styled';
import { ListItem } from '../ListItem/ListItem';
import { data } from '../data';

export const Faq = () => {

  return (
    <Section id='faq'>
      <Container>
        <Title>&#47;&#47;: FAQ</Title>
        <List>
          {data.map(item => {
            return <ListItem key={item.id} item={item} />;
          })}
        </List>
      </Container>
    </Section>
  );
};
