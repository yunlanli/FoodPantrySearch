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
        <View style={styles.buttonContainer1}>
          <Button
            onPress={this._onPressButton}
            title="Donate"
            color = "#ffffff"

          />
        </View>
        <View style={styles.buttonContainer2}>
          <Button
            onPress={this._onPressButton}
            title="Search"
           color="#ffffff"
           
          />
        </View>
        <View style={styles.buttonContainer3}>
         
          <Button
            onPress={this._onPressButton}
            title="Sign Up"
              color="#ffffff"
          />


      <Image source =  "https://github.com/yunlanli/FoodPantrySearch/blob/master/assets/images/LOGO.png"
  style={{
    width: 150,
    height: 100,
    position: 'absolute',
      left: 55,
      bottom: 200,

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
    top: 100
  },

 buttonContainer2: {
    margin: 20,
    backgroundColor: '#ccff99',
   right: 3,
    top: 100
  },

   buttonContainer3: {
    margin: 20,
    backgroundColor: '#ccccff',
    right: 3,
    top: 100
  
  },
});

