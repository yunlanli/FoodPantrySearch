import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';


import Firebase from '../constants/ApiKeys';
import firebase from 'firebase';

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
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
        bottom: 350,

      }}

      />


      <Image source={require('../assets/images/LOGO.png')}
      style={{
        width: 500,
        height: 500,
        position: 'absolute',
        right: -65,
        top: 40,

      }}

      />

      <View style={styles.buttonContainer2}>
      <Button
      onPress={() => {
        const { navigate } = this.props.navigation;
        navigate('MapScreen');
      }}
      title="Need a meal?"
      color="#000000"

      />


      </View>

      <View style={styles.buttonContainer3}>

      <Button
      onPress={() => {
        const { navigate } = this.props.navigation;
        navigate('SignIn');
      }}
      title="Sign In To Donate"
      color="#000000"

      />

      </View>

      <Text style={styles.account} onPress={() => {
        const { navigate } = this.props.navigation;
        navigate('SignUp');
      }}
      title = "Don't have an account? Sign in here."
      />

      </View>

    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },

  buttonContainer2: {
    margin: 30,
    backgroundColor: '#66ff99',
    right: 3,
    top: 200,
    borderRadius:15,
  },

  buttonContainer3: {
    margin: 30,
    backgroundColor: '#cc66ff',
    // right: 3,
    top: 30,
    borderRadius:15,

  },
  account: {
    fontSize:14,
    textAlign:'center',
    top:100,
    color:'black',
  }
});


export default HomeScreen
