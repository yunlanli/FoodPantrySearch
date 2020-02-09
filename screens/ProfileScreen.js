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






          />
        </View>
        <View style={styles.buttonContainer3}>

          <Button
            onPress={this._onPressButton}
            title="Sign Up"
            color="#ffffff"
          />



  <Image source={require('assets/images/MainTitle.png')}
      style={{
      width: 400,
      height: 400,
      position: 'absolute',
      left: -40,
      bottom: 240,

  }}

/>


        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',

  },

  buttonContainer1: {
    margin: 20,
    backgroundColor: '#66ccff',
   right: 3,
    top: 150
  },

});
