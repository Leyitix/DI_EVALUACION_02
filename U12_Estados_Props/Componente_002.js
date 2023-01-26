import React, {Component, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button, TextInput} from 'react-native-paper';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 'Manel',
      apellido: 'Viel',
      edad: 29,
    };
  }

  actualizarEdad = () => {
    this.setState({edad: this.state.edad + 1});
  };

  render() {
    return (
      <View>
        <Text>Hola, {this.state.nombre}</Text>
        <Text>Edad, {this.state.edad}</Text>
        <Button mode="contained" onPress={this.actualizarEdad}>
          <Text>Edit Profile</Text>
        </Button>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return <Welcome />;
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
