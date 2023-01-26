import React, {Component, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button, TextInput} from 'react-native-paper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elDNIintroducido: '',
      letraDNI: '',
    };
  }

  guardaDNI = valor => {
    if (valor.length === 8) {
      this.setState({elDNIintroducido: valor});
      let laLletra = calculaLetraNif(valor);
      this.setState({letraDNI: laLetra});
      Keyboard.dismiss();
      console.log(
        'En el componente hijo, el dni es ' + valor + ' y la letra es ' + laLetra,
      );
      this.props.devuelveNIF({dni: valor, letra: laLetra}); // Nos comunicamos  con el componente padre
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={{fontSize: 15, fontWeight: 'normal', width: 200}}
          placeholder="Escribe el DNI"
          placeholderTextColor="#FF0000"
          onChangeText={this.guardaDNI}
          maxLength={8}
          keyboardType="number-pad"
          underlineColorAndroid="blue"
        />
        <Button onPress={this.gestionaClick}>
          <Text>CLick!</Text>
        </Button>
      </View>
    );
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
