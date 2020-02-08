import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';



export default class HomeScreen extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Donate"
            color = "#66ccff"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Search"
            color="#ccff99"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Create Account"
              color="#ccccff"
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
  buttonContainer: {
    margin: 20
  },

});

