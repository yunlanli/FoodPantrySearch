import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

import t from 'tcomb-form-native';

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
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
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
  buttonText: {
      fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
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

export default class App extends Component {
  handleSubmit = () => {
      const value = this._form.getValue(); // use that ref to get the form value
      console.log('value: ', value);
    }

  render() {
      return (
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
    );
  }
});

var options = {
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Your name or restaurant name'
    },
    street: {
      label: 'Address of pickup location',
      placeholder: 'Street'
    },
      city: {
        placeholder: 'City'
      },
    state: {
      placeholder: 'State'
    },
    zipcode: {
      placeholder: 'Zipcode'
    },
    items: {
      label: 'Items Available'
      placeholder: 'List items separated by commas'
    },
    servings: {
      label = 'Number of servings'
    },
    perishable: {
      label: 'Perishable'
    },
    addinfo: {
      label: 'Additional Information',
      placeholder: 'Enter allergy info, food description, or any other additional information'
    }
    starttime: {
      label: 'Timeframe available - start and end time'
    }
    endtime: {
    }
  }
};
