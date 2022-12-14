import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T',
];

NumberInput = () => {
  const [dni, setDni] = useState('NIF');

  return (
    <TextInput
      style={styles.textNumber}
      placeholderTextColor={'red'}
      underlineColorAndroid={'red'}
      maxLength={8}
      keyboardType="numeric"
      onChangeText={newText => setDni(newText)}
      defaultValue={dni}
    />
  );
};

export class DNI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      letra: 'Letra',
      numero: '',
    };
  }

  datos = () => {
    if (this.state.numero.length === 8) {
      this.setState({letra: (this.state.letra = letras[0])});
    }

    return <Text style={styles.textChar}>{this.state.letra}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section1}>
          <Text style={styles.title}>Calculador Letra NIF</Text>
        </View>
        <View style={styles.section2}>
          <Text style={styles.subtitle}>
            App para calcular la letra del NIF:
          </Text>
          <View style={styles.seccion3}>
            <View style={styles.columns}>
              <NumberInput />
            </View>
            <View style={styles.columns}>{this.datos()}</View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    flexDirection: 'column',
  },
  section1: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: 'green',
  },
  section2: {
    flex: 2,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    color: 'purple',
    marginBottom: 20,
  },
  seccion3: {
    flex1: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  columns: {
    flex1: 2,
    margin: 10,
    padding: 10,
  },
  textNumber: {
    color: 'red',
    fontSize: 18,
    textAlign: 'left',
    height: 45,
  },
  textChar: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 20,
    textAlign: 'left',
    height: 40,
    marginTop: 12,
  },
});
