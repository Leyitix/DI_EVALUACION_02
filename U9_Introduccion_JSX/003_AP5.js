import React, {Component, useState} from 'react';
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
import {Button, TextInput} from 'react-native-paper';

const nombre = () => {
  return (
    <View>
      <Text style={styles.name}>Ainhoa López</Text>
    </View>
  );
};

const estilo = 'upv';
const isAdmin = true;

const datos = () => {
  return (
    <View style={estilo === 'florida' ? styles.florida : styles.upv}>
      <View>{nombre()}</View>
      <TextInput
        icon="eye"
        left={<TextInput.Icon name="eye" />}
        style={styles.textInput}
        placeholderTextColor={estilo == 'florida' ? 'white' : 'purple'}
        color={estilo == 'florida' ? 'white' : 'orange'}
        label="Introduce tus datos"
        placeholder="Escribe aquí..."
      />
      <TextInput
        icon="eye"
        left={<TextInput.Icon name="eye" />}
        style={styles.textInput}
        placeholderTextColor={estilo == 'florida' ? 'white' : 'purple'}
        color={estilo == 'florida' ? 'white' : 'orange'}
        label="Introduce tus datos"
        placeholder="Escribe aquí..."
      />
    </View>
  );
};

const boton = () => {
  return (
    <View>
      <Button icon="format-list-bulleted" color={'#6200EE'} mode="contained">
        INFORMES
      </Button>
    </View>
  );
};

const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];

const elementos = () => {
  return (
    <View>
      {modulos2Dam.map((value, index) => {
        return (
          <View
            key={index}
            style={index % 2 == 0 ? styles.modulos : styles.modulos2}>
            <Text>{value.nombre}</Text>
            <Text>{value.profesor}</Text>
            <Text>{value.horas}</Text>
          </View>
        );
      })}
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <ScrollView>
        <View>{datos()}</View>
        {isAdmin == true && <View>{boton()}</View>}
        <View>{elementos()}</View>
      </ScrollView>
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
  textInput: {
    backgroundColor: '#D8DEDF',
    marginTop: 1,
    marginBottom: 1,
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  name: {
    backgroundColor: 'white',
    marginBottom: 2,
  },
  modulos: {
    backgroundColor: '#F48FB1',
    height: 80,
  },
  modulos2: {
    backgroundColor: '#F8BBD0',
    height: 80,
  },
});

export default App;
