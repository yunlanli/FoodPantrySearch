// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  View,
} from 'react-native';

import MapView from 'react-native-maps';
import DonatorTester from '../components/PantryMap/testcase/DonatorTester';
import MapTest from '../components/PantryMap/testcase/MapTest';
import PantryTester from '../components/PantryMap/testcase/PantryTester';
import { theme } from '../styles/GlobalStyles';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MapContainer = styled.View`
  flex: 1;
  background-color: #fff;
  margin: 0;
  padding: 0;
`;

const FilterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
`;

const PantryButton = styled.TouchableOpacity`
  width: 140;
  text-align: center;
  background-color: ${theme.lightBlue};
  border-radius: 10;
  padding-bottom: 10;
  margin-top: 15
`;

const DonationButton = styled.TouchableOpacity`
  width: 150;
  text-align: center;
  background-color: ${theme.lightPink};
  border-radius: 10;
  padding-bottom: 10;
  margin-top: 15;
`;

const PantryOn = styled.Button`
  width: 30%;
  height: 10%; 
`;

const DonatorOn = styled.Button`
  width: 30%;
  height: 10%;
`;

export default class MapScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showPantry: false,
      showDonator: false,
    }

    this.handleDonator = this.handleDonator.bind(this);
    this.handlePantry = this.handlePantry.bind(this);
  }

  handleDonator(){
    this.setState({showDonator: !this.state.showDonator});
  };

  handlePantry(){
    this.setState({showPantry: !this.state.showPantry});
  };

  render(){
    return (
      <MapContainer>
        <MapTest
          pantry={this.state.showPantry}
          donator={this.state.showDonator}/>

        <FilterContainer>

          <PantryButton>
            <PantryOn 
              title={this.state.showPantry? "Hide Pantry" : "Show Pantry"}
              color={theme.white}
              onPress={this.handlePantry}/>
          </PantryButton>

          <DonationButton>
            <DonatorOn
              title={this.state.showDonator? " Hide Donation " : "Show Donation"}
              color={theme.white}
              onPress={this.handleDonator}/>
          </DonationButton>
          

        </FilterContainer>
      </MapContainer>
    );
  }
}
