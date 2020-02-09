import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';

import Firebase from '../constants/ApiKeys';
import firebase from 'firebase';
require("firebase/firestore");
var db = firebase.firestore();

export default function toList(){
  var listOfEntries = [];
  var entries = db.collection("Donations");
  entries.get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      listOfEntries.push(doc.data());
    })
    console.log(listOfEntries);
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  });
}
