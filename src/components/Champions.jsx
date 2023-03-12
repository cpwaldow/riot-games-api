import React, { useEffect, useState } from 'react';
import allChampions from '../service/allChampions';
import CardChampion from './CardChampion';
import Container from './Container';

const Champions = () => {
  const [champion, setChampion] = useState();
  useEffect(() => {
    allChampions.get().then((response) => setChampion(response.data.data));
  }, []);

  if (!champion) return null;
  console.log(champion);
  // console.log(Object.keys(champion));
  return (
    <Container>
      {Object.keys(champion).map((item) => (
        <CardChampion key={champion[item].name}>
          <p>{champion[item].name}</p>
          <p>{champion[item].title}</p>
          <p>{champion[item].partype}</p>
        </CardChampion>
      ))}
    </Container>
  );
};

export default Champions;
