import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Header, Button} from 'react-native-paper';

export class Welcome extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //   nombre: 'Manel',
  //   apellido: 'Viel',
  //   edad: 29
  // }

  // this.setState({edad: this.state.edad+1});

  render() {
    return <Text>Hola, {this.props.name}</Text>;
  }
}
