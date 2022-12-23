/**
 * App para calcular letra del NIF (con estilos)
 */

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const letras = [
  'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


  const calculaLetraNIF = (unNIF) => {
    return letras[unNIF % 23];
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NIF: '',
      letraNIF: '',
    };
  }

  actualizaNIF = (nuevoNIF) => {
    this.setState({NIF: nuevoNIF});
  };

  actualizaLetraNIF = (nuevaLetraNIF) => {
    console.log('Letra ', nuevaLetraNIF);
    this.setState({letraNIF: nuevaLetraNIF});
  };

  /**Metodo de la clase App */
  verificaNIF = unNIFescrito => {

    /*Contenido de la finción*/
    console.log('Escrito: ' + unNIFescrito);

    this.setState({NIF: unNIFescrito}, () => {

      /*Forma de actualizar la letra*/
      console.log('Longitud: ', this.state.NIF.length);

      if (this.state.NIF.length === 8) {
        let letraCalculada = calculaLetraNIF(unNIFescrito);
        this.actualizaLetraNIF(letraCalculada);
      } else {
        let letra = '';
        this.actualizaLetraNIF(letra);
      }
      
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Calculador Letra NIF</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>
            App para calcular la letra del NIF:
          </Text>
        </View>
        <View style={styles.vistaInput}>
          <TextInput
            style={styles.campoNifEntrada}
            onChangeText={this.verificaNIF}
            placeholderTextColor={'red'}
            underlineColorAndroid={'red'}
            placeholder="NIF"
            keyboardType="numeric"
            maxLength={8}
          />
          <TextInput
            value={this.state.letraNIF}
            style={styles.campoLetraSalida}
            placeholderTextColor={'blue'}
            underlineColorAndroid={'blue'}
            placeholder="Letra"
            editable={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'green',
    marginTop: 100,
  },
  subtitle: {
    fontSize: 18,
    color: 'purple',
    marginTop: 50,
    marginBottom: 25,
  },
  vistaInput: {
    flexDirection: 'row',
  },
  campoNifEntrada: {
    fontSize: 28,
    color: 'red',
    width: 140,
  },
  campoLetraSalida: {
    fontSize: 28,
    color: 'green',
    width: 75,
  },
});

export default App;
