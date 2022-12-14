import React, {Component, useState} from 'react';
// import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let loggedIn = true;
const frutas = ['peras', 'manzanas', 'naranjas', 'platanos'];

const saluda = (unNombre, unApellido) => {
  return (
    <View>
      <Text>Hola mundo</Text>
      <Text>
        Soy {unNombre} {unApellido}
      </Text>
    </View>
  );
};
class App extends Component {
  render() {
    return (
      <View>
        {!loggedIn ? (
          <Text>Primero te tienes que loguear</Text>
        ) : (
          saluda('Ainhoa', 'López')
        )}
        {frutas.map((value, index) => {
          return (
            <Text key={index}>
              {index + 1}.- {value}
            </Text>
          );
        })}
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
