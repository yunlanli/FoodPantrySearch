import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';



class HomeScreen extends React.Component {


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

  }}

/>

        <View style={styles.buttonContainer1}>
          <Button
            onPress={this._onPressButton}
            title = "Donate"
            color = "#000000"

          />
        </View>


        <View style={styles.buttonContainer2}>
          <Button
            onPress={this._onPressButton}
            title="Search"
            color="#000000"

          />


        </View>

        <View style={styles.buttonContainer3}>

          <Button
            onPress={this._onPressButton}
            title="Sign Up"
            color="#000000"

          />
</View>



  <Image source={require('assets/images/MainTitle.png')}
>>>>>>> 074f82f5cbabd52cd508bc56946ed8b6ec6197ab
      style={{
        width: 500,
        height: 500,
        position: 'absolute',
        right: -60,
        top: 20,

      }}

      />

      <View style={styles.buttonContainer1}>

      <Text onPress={() => {
        const { navigate } = this.props.navigation;
        navigate('SignUp');
      }}
      title = "Need a Account? Sign up here."
      />
      </View>
<<<<<<< HEAD

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

      </View>

>>>>>>> 074f82f5cbabd52cd508bc56946ed8b6ec6197ab
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
    color:'black',
    right: 3,
    top: 300,
>>>>>>> 074f82f5cbabd52cd508bc56946ed8b6ec6197ab
    borderRadius:15,



  },

  buttonContainer2: {
    margin: 20,
    backgroundColor: '#66ff99',
    right: 3,
    top: 150,
    borderRadius:15,
  },

  buttonContainer3: {
    margin: 20,
    backgroundColor: '#cc66ff',
    // right: 3,
    // top: 75,
>>>>>>> 074f82f5cbabd52cd508bc56946ed8b6ec6197ab
    borderRadius:15,

  },
});


export default HomeScreen
