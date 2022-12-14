import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Header, Button} from 'react-native-paper';

export class Welcome extends React.Component {
  render() {
    return <Text>Hola, {this.props.name}</Text>;
  }
}
