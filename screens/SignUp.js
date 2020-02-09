import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button} from 'react-native'




import { MonoText } from '../components/StyledText';


import Firebase from '../constants/ApiKeys';
import firebase from 'firebase';
var provider = new firebase.auth.GoogleAuthProvider();
require("firebase/firestore");
var db = firebase.firestore();

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    phoneNum: '',
    password: ''
  }

  handleSignUp = () => {
    const { name, email, phoneNum, password } = this.state
    Firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      db.collection("Donators").doc(Firebase.auth().currentUser.uid).set({
        id: firebase.auth().currentUser.uid,
        name: name,
        email: email,
        phoneNum: phoneNum
      })
      .then(() => {
        const { navigate } = this.props.navigation;
        navigate("Links");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    })
    .catch(error => console.log(error))
  }





  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.thanks}>
      Thank you for taking a step towards ending hunger in America!
      </Text>
      <TextInput
      style={styles.inputBox}
      value={this.state.name}
      onChangeText={name => this.setState({ name })}
      placeholder='Full Name'
      />
      <TextInput
      style={styles.inputBox}
      value={this.state.email}
      onChangeText={email => this.setState({ email })}
      placeholder='Email'
      autoCapitalize='none'
      />
      <TextInput
      style={styles.inputBox}
      value={this.state.phoneNum}
      onChangeText={phoneNum => this.setState({ phoneNum })}
      placeholder='Phone Number'
      autoCapitalize='none'
      />
      <TextInput
      style={styles.inputBox}
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      placeholder='Password'
      secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
      <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.signIn} onPress={() => {
        const { navigate } = this.props.navigation;
        navigate('SignIn');
      }}
      title = "Already have an account? Sign in here."
      />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  thanks: {
    textAlign:'center',
    fontSize:20,
    marginBottom: 30,
    width:'85%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '75%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#FFA611',
    borderColor: '#FFA611',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonSignup: {
    fontSize: 12
  },
  signIn: {
    fontSize: 10,

  }
})

SignUp.navigationOptions = {
  title: 'SignUp',
};

export default SignUp
