import React, {Component, useState} from 'react';
import {StyleSheet, Text} from 'react-native';

import {Button, TextInput} from 'react-native-paper';
import {Welcome} from './U11_Componentes/Ejemplo_002/Welcome001';
import {Tarjeta} from './U11_Componentes/Ejemplo_001/Tarjeta';

class App extends Component {
  render() {
    return <Welcome name="Ainhoa" />;
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
