import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MapView from 'react-native-maps';
import { homeStyle } from '../styles/GlobalStyles';
import { MonoText } from '../components/StyledText';
import DonatorTester from '../components/PantryMap/testcase/DonatorTester';
import MapTest from '../components/PantryMap/testcase/MapTest';
import PantryTester from '../components/PantryMap/testcase/PantryTester';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={homeStyle.container}>
        <MapTest/>
        {/* <MapView style={homeStyle.pantryMap}>
          <PantryTester/>
          <DonatorTester/>
        </MapView> */}
        <ScrollView
          style={homeStyle.container}
          contentContainerStyle={homeStyle.contentContainer}>
          <View style={homeStyle.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={homeStyle.welcomeImage}
            />
          </View>
  
          <View style={homeStyle.getStartedContainer}>
            <DevelopmentModeNotice />
  
            <Text style={homeStyle.getStartedText}>Get started by opening</Text>
  
            <View
              style={[homeStyle.codeHighlightContainer, homeStyle.homeScreenFilename]}>
              <MonoText>screens/HomeScreen.js</MonoText>
            </View>
  
            <Text style={homeStyle.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>
  
          <View style={homeStyle.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={homeStyle.helpLink}>
              <Text style={homeStyle.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
  
        <View style={homeStyle.tabBarInfoContainer}>
          <Text style={homeStyle.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>
  
          <View
            style={[homeStyle.codeHighlightContainer, homeStyle.navigationFilename]}>
            <MonoText style={homeStyle.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View>
      </View>
    );
  }
  
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={homeStyle.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={homeStyle.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={homeStyle.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}
