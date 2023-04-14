import React from 'react';
import { View } from 'react-native';
import CardGame from './components/CardGame';

const items = [
  {
    name: 'Adaga Flamejante',
    description: 'Uma adaga de fogo que causa dano de queimadura aos inimigos.',
    image: 'https://cdn.awsli.com.br/2492/2492857/produto/204541936c9680790c2.jpg',
  },
  {
    name: 'Escudo de Avalon',
    description: 'Um escudo que bloqueia 30% do dano recebido.',
    image: 'https://2.bp.blogspot.com/-bpmqxktsrFw/Uy3ETRC4MgI/AAAAAAAAAm0/zvaymYQIMto/s1600/Iron_Shield_SK+(1).png',
  },
  {
    name: 'Colar Mágico',
    description: 'Um colar que revela a localização e a fraqueza dos inimigos.',
    image: 'https://pm1.narvii.com/6444/4a1186fa80720e8dc6549a74f0e79b7e7924b9f4_00.jpg',
  },
];

const App = () => {
  return (
    <View>
      {items.map((item) => (
        <CardGame key={item.name} item={item} />
      ))}
    </View>
  );
};

export default App;
