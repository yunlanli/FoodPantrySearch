import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'




import { MonoText } from '../components/StyledText';


import Firebase from '../constants/ApiKeys';
import firebase from 'firebase';


class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  }
  handleSignIn = () => {
    const { email, password, phoneNum} = this.state
    Firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      const { navigate } = this.props.navigation;
      navigate('FormScreen');
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }





  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.thanks}>
      Thank you for taking a step towards ending hunger in America!
      </Text>
      <TextInput
      style={styles.inputBox}
      value={this.state.email}
      onChangeText={email => this.setState({ email })}
      placeholder='Email'
      autoCapitalize='none'
      />
      <TextInput
      style={styles.inputBox}
      value={this.state.password}
      onChangeText={password => this.setState({ password })}
      placeholder='Password'
      secureTextEntry={true}
      />
      <TextInput
      style={styles.inputBox}
      value={this.state.phoneNum}
      onChangeText={phoneNum => this.setState({ phoneNum })}
      placeholder='Phone Number'
      autoCapitalize='none'
      />
      <TouchableOpacity style={styles.button} onPress={this.handleSignIn}>
      <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text>
      <Text style={styles.signIn} onPress={() => {
        const { navigate } = this.props.navigation;
        navigate('SignUp');
      }}>Don't Have An Account? Sign Up Here.</Text>
      </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  thanks: {
    textAlign:'center',
    fontSize:20,
    marginBottom: 30,
    marginTop:-50,
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
    fontSize: 12,

  }
})

SignIn.navigationOptions = {
  title: 'SignIn',
};

export default SignIn
