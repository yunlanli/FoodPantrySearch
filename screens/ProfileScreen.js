import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';

import Firebase from '../constants/ApiKeys';
import firebase from 'firebase';
require("firebase/firestore");
var db = firebase.firestore();

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "",
    email: "",
    phoneNum: ""
  }
}
componentDidMount() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      var id = firebase.auth().currentUser.uid;
      var user = db.collection("Donators").doc(id);
      user.get().then((doc) => {
        var data = doc.data();
        this.setState = ({ name:data.name,
                          email: data.email,
                          phoneNum: data.phoneNum
        },() => {
          console.log("hi");
        })
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    } else {
      console.log("boi");
    }
  });
}

  render() {
    return (
      <View style={styles.container}>


<Image source={require('assets/images/ProfileTitle.png')}
      style={{
      width: 150,
      height: 150,
      position: 'absolute',
      left: 115,
      bottom: 400,

  }}

/>

  <Image source={require('assets/images/Name.png')}
      style={{
      width: 150,
      height: 150,
      position: 'absolute',
      left: 20,
      bottom: 300,

  }}

/>

  <Image source={require('assets/images/Rating.png')}
      style={{
      width: 150,
      height: 150,
      position: 'absolute',
      left: 10,
      bottom: 175,

  }}

/>


<Image source={require('assets/images/Servings.png')}
     style={{
      width: 150,
      height: 150,
      position: 'absolute',
      left: 10,
      bottom: 30,

  return (
    <View style={styles.container}>
    <Text>
    { this.state.name}
    {console.log("bye")}
    </Text>
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

export default ProfileScreen
