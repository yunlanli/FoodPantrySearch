import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';


import Firebase from '../constants/ApiKeys';
import firebase from 'firebase';


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class LoadingScreen extends React.Component {

  constructor(props){
    super(props);

    var user = firebase.auth().currentUser;

    if (user) {
      sleep(8000).then( () => {
        const { navigate } = this.props.navigation;
        navigate("FormScreen")
      });
    } else {
        const { navigate } = this.props.navigation;
        navigate("HomeScreen")
    }
  }



  render() {
    return (
      <View style={styles.container}>



      <Image source={require('../assets/images/MainTitle.png')}
      style={{
        width: 350,
        height: 350,
        position: 'absolute',
        left: 0,
        bottom: 270,
      }}
      />


      <Image source={require('../assets/images/LOGO.png')}
      style={{
        width: 500,
        height: 500,
        position: 'absolute',
        right: -65,
        top: 200,
      }}
      />

      </View>
)}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
});


export default LoadingScreen
