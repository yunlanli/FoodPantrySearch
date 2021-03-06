import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import SignUpScreen from './screens/SignUp';
import SignInScreen from './screens/SignIn';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MapScreen from './screens/MapScreen';
import FormScreen from './screens/FormScreen'
import LoadingScreen from './screens/LoadingScreen';





const MainNavigator = createStackNavigator({
  LoadingScreen: { screen: LoadingScreen,
    navigationOptions: {
      header: null,
      mode: 'modal',
      headerMode: null
    }
  },
  HomeScreen: { screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  MapScreen: {screen: MapScreen},
  ProfileScreen: { screen: ProfileScreen,
    navigationOptions: {
      header: null,
    }
  },
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen },
  FormScreen: { screen: FormScreen,
    navigationOptions: {
      headerMode: 'none',
      header: null,
      gesturesEnabled: false,
    }
  }
},
{
  initialRouteName: 'LoadingScreen',
},
);



const Stuff = createAppContainer(MainNavigator);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
      startAsync={loadResourcesAsync}
      onError={handleLoadingError}
      onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <>
      <Stuff/>
      </>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
