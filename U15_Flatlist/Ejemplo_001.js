import React, {Component, useState} from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';

import {Button, TextInput} from 'react-native-paper';

class App extends Component {
  constructor(props) {
    super(props);
    //datosAMostrar en el estado de la clase
    this.state = {
      datosAMostrar: [{profe: 'Manel'}, {profe: 'Belén'}],
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.datosAMostrar}
          keyExtractor={(item, index) => index.toString()}
          style={{padding: 5}}
          renderItem={({item}) => {
            return (
              <View elevation={4} style={{backgroundColor: 'orange'}}>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 20,
                    fontWeight: 'bold',
                    margin: 5,
                  }}>
                  {item.profe}
                </Text>
              </View>
            );
          }}
        />
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
