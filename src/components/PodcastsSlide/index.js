import React from 'react';

import Card from '../Card';
import { Container, Title, PodcastList } from './styles';

export default function PodcastsSlide({ list }) {
  return (
    <Container>
      <Title>{list.title}</Title>
      <PodcastList>
        {list.items &&
          list.items.map((item, index) => <Card key={index} item={item} />)}
      </PodcastList>
    </Container>
  );
}
