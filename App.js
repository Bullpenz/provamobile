import React from 'react';
import { View } from 'react-native';
import CardGame from './components/CardGame';
import items from './data';

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

