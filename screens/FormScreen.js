import React, { Component } from 'react';
import { View, StyleSheet, Button,ScrollView, SafeAreaView, StatusBar } from 'react-native';

import t from 'tcomb-form-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  }
});

const Form = t.form.Form;

const Listing = t.struct({
  name: t.String,
  street: t.String,
  city: t.String,
  state: t.String,
  zipcode: t.Number,
  items: t.String,
  servings: t.Number,
  perishable: t.Boolean,
  addinfo: t.maybe(t.String),
  starttime: t.Date,
  endtime: t.Date
});

import Firebase from '../constants/ApiKeys';
import firebase from 'firebase';
require("firebase/firestore");
var db = firebase.firestore();

class FormScreen extends React.Component {
  handleSubmit = () => {
      const value = this._form.getValue(); // use that ref to get the form value
      console.log('value: ', value);
      var id = firebase.auth().currentUser.uid;
      var user = db.collection("Donators").doc(id);
      var fullAddress = value.street + ", " + value.city + ", " + value.state + ", " + value.zipcode;
      var items = value.items.replace(/\s/g, '').split(',');
      user.get().then((doc) => {
        var data = doc.data();
        db.collection("Donations").doc(id).set({
          id: id,
          name: data.name,
          email: data.email,
          phoneNum: data.phoneNum,
          addinfo: value.addinfo,
          address: fullAddress,
          items: items,
          startTime: value.starttime,
          endTime: value.endtime,
          servings: value.servings,
          addInfo: value.addinfo
        })
        .then(() => {
          const { navigate } = this.props.navigation;
          navigate("ProfileScreen");
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });


    }

  render() {
  	return (
      	<SafeAreaView style={styles.container}>
	      <ScrollView
	      	style={styles.scrollView}
	      	contentInset={{top:-75}}
	      	automaticallyAdjustContentInsets={false}
	      >
		      <View style={styles.container}>
		        <Form
		          ref={c => this._form = c}
		          type={Listing}
		          options={options}
		        />
		        <Button
		          title="Submit!"
		          onPress={this.handleSubmit}
		        />
		      </View>
	      </ScrollView>
  		</SafeAreaView>
    );
  }
}

var options = {
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Your name or restaurant name'
    },
    street: {
      label: 'Address of pickup location\nStreet',
    },
      city: {
      },
    state: {
    },
    zipcode: {
    },
    items: {
      label: 'Items Available',
      placeholder: 'List items separated by commas'
    },
    servings: {
      label: 'Number of servings'
    },
    perishable: {
      label: 'Perishable'
    },
    addinfo: {
      label: 'Additional Information',
      placeholder: 'Enter allergy info, food description, or any other additional information'
    },
    starttime: {
      label: 'Timeframe available - start and end time'
    },
    endtime: {
    }
  }
};

export default FormScreen;
