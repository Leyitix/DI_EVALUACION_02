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

const screenWidth = Dimensions.get('window').width;

// const images = [
//   [
//     'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
//     'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
//     'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
//   ],
//   [
//     'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
//     'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
//     'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
//   ],
//   [
//     'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
//     'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
//     'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
//   ],
//   [
//     'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
//     'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
//     'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
//   ],
// ];

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
];

const localImg = require('./images/visualstudio_code-card.png');

const infoProfile = [
  {title: 'Posts', data: '20'},
  {title: 'Followers', data: '110304'},
  {title: 'following', data: '1103'},
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section1}>
          <View style={styles.profilePictureContainer}>
            <Avatar.Image size={100} source={localImg} />
          </View>
          <View style={styles.editProfileContainer}>
            <View style={styles.info}>
              {infoProfile.map((value, index) => {
                return (
                  <View key={index}>
                    <Text style={index % 2 === 0 ? styles.text1 : styles.text2}>
                      {value.title}
                    </Text>
                    <Text style={index % 2 === 0 ? styles.text1 : styles.text2}>
                      {value.data}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View>
              <Button mode="contained" onPress={() => console.log('Pressed')}>
                <Text>Edit Profile</Text>
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.section2}>
          {images.map((value, index) => {
            return (
              <View key={index}>
                <Image
                  style={styles.containerImages}
                  source={{
                    uri: value,
                  }}
                />
                {/* <Image
                  style={styles.containerImages}
                  source={{
                    uri: value[1],
                  }}
                /> */}
                {/* <Image
                  style={styles.containerImages}
                  source={{
                    uri: value[2],
                  }}
                /> */}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 5,
  },
  section1: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    // borderWidth: 3,
  },
  section2: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    fontSize: 12,
    margin: 4,
    padding: 10,
    // borderWidth: 3,
  },
  profilePictureContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    // borderWidth: 3,
  },
  editProfileContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    padding: 10,
    // borderWidth: 3,
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    height: 30,
    margin: 10,
  },
  textButton: {
    fontSize: 11,
    color: '#959999',
  },
  containerImages: {
    height: 85,
    width: 85,
    margin: 3,
  },
});
