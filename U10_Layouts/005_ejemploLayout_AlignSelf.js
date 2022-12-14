import React, {Component, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button, TextInput} from 'react-native-paper';

class App extends Component {
  render() {
    return (
      <View style={styles.contenedor}>
        <View style={styles.seccion1}>
          <Text>Sección 1</Text>
        </View>
        <View style={styles.seccion2}>
          <Text>Sección 2</Text>
          <View style={{backgroundColor: 'red', height: 50}}></View>
          <View
            style={{
              backgroundColor: 'green',
              width: 50,
              height: 50,
              alignSelf: 'flex-end',
            }}></View>
          <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
        </View>
        <View style={styles.seccion3}>
          <Text>Sección 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'purple',
    borderWidth: 5,
  },
  seccion1: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
  },
  seccion2: {
    flex: 4,
    borderColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    borderWidth: 3,
  },
  seccion3: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'left',
  },
});

export default App;
