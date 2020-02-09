import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import toList from '../scripts/DatabaseToList';
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
  return(
    <Text>
    hi
    </Text>
  )}
}

export default ProfileScreen
