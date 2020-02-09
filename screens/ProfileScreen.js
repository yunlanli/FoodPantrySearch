import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';



export default class ProfileScreen extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>


<Image source={require('assets/images/ProfileTitle.png')} 
      style={{
      width: 120,
      height: 120,
      position: 'absolute',
      left: 10,
      bottom: 400,

  }}

/>

  <Image source={require('assets/images/Name.png')} 
      style={{
      width: 120,
      height: 120,
      position: 'absolute',
      left: 10,
      bottom: 300,

  }}

/>

  <Image source={require('assets/images/Rating.png')} 
      style={{
      width: 120,
      height: 120,
      position: 'absolute',
      left: 10,
      bottom: 200,

  }}
  
/>


<Image source={require('assets/images/Servings.png')} 
     style={{
      width: 120,
      height: 120,
      position: 'absolute',
      left: 10,
      bottom: 100,

  }}
  
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


});

