import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import {Avatar, Button} from 'react-native-paper';

const screenWidth = Dimensions.get('window').width; // ancho de la pantalla
const screenHeight = Dimensions.get('window').height; // alto de la pantalla

const imageWidth =
  screenHeight > screenWidth ? screenWidth / 5 : screenHeight / 5; // Canculamos el tamaño de cada imagen
const imageHeight = 80;

const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const localImg = require('./images/visualstudio_code-card.png');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bloqueDatosContainer}>
          <View style={styles.imagenPerfilContainer}>
            <Image source={localImg} style={styles.imagenPerfilRedondeada} />
          </View>
          <View style={styles.infoUsuarioContainer}>
            <View style={styles.infoUsuario}>
              <View style={styles.cajaInfoUsuario}>
                <Text style={styles.posts}>Posts</Text>
                <Text style={styles.posts}>20</Text>
              </View>
              <View style={styles.cajaInfoUsuario}>
                <Text style={styles.posts}>Follwers</Text>
                <Text style={styles.posts}>1233</Text>
              </View>
              <View style={styles.cajaInfoUsuario}>
                <Text style={styles.posts}>Following</Text>
                <Text style={styles.posts}>1223</Text>
              </View>
            </View>
            <View style={styles.boton}>
              <TouchableOpacity style={styles.botonEditProfile}>
                <Text>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.galeriaImagenesContainer}>
          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}>
            {images.map((value, index) => {
              return (
                <View key={index}>
                  <Image source={{uri: value}} style={styles.imageGallery} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'withe',
    // borderColor: 'purple',
    // borderWidth: 3,
  },
  bloqueDatosContainer: {
    flex: 1,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 3,
  },
  imagenPerfilRedondeada: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: 50,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  infoUsuarioContainer: {
    flex: 1,
    // borderColor: 'blue',
    // borderWidth: 3,
  },
  botonEditProfile: {
    margin: 6,
    marginLeft: 35,
    marginRight: 35,
    backgroundColor: '#F4F4F4',
    shadowOffset: {width: 5, height: 5},
    padding: 4,
    alignItems: 'center',
    borderRadius: 5,
  },
  posts: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cajaInfoUsuario: {
    flex: 1,
    // borderColor: 'orange',
    // borderWidth: 3,
    alignItems: 'center',
  },
  infoUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagenPerfilContainer: {
    // borderColor: 'green',
    // borderWidth: 3,
  },
  galeriaImagenesContainer: {
    flex: 3,
    // borderColor: 'orange',
    // borderWidth: 3,
  },
  imageGallery: {
    width: imageWidth,
    height: imageHeight,
    // borderColor: 'yellow',
    // borderWidth: 3,
    margin: 5
  },
});
