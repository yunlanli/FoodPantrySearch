/* Marker Component on the map showing location of donator
 * When pressed, a callout - containing name, pick-up address,
 * contact info, and available items - will appear.
 * 
 * Takes in the following parameters as props
 * location -> {latitude, longitude} of the pantry
 * name -> name of the pantry
 * address -> pantry's address
 * waitTime -> live wait time before getting food
 * urL -> link to the pantry's website
 */
// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  View,
  Linking,
} from 'react-native';

import { Marker, Callout, CalloutSubview } from 'react-native-maps';
import styled from 'styled-components';
import { theme } from '../../styles/GlobalStyles';

const Description = styled.View`
    width:100%;
    display: flex;
    flex-direction: column;
`;

const Name = styled.Text`
    width: 100%;
    font-size: 20;
    text-align: center;
    font-weight: bold;
    padding-top: 1;
    padding-bottom: 3;
    /* margin-left: ; */
    margin-bottom: 2;
`;

const WaitTime = styled.Text`
    font-size: 14;
    font-weight: bold;
    color: ${theme.lightBlue};
    margin-left: 2;
    margin-bottom: 2;
`;

const Address = styled.Text`
    font-size: 14;
    font-weight: bold;
    color: ${theme.lightPink};
    margin-left: 2;
    margin-bottom: 2;
`;

const AddressFull = styled.Text`
    font-size: 13;
    color: ${theme.black};
    margin-left: 2;
`;

const Reserve = styled.Button`
    width: 140;
    font-size: 16;
    font-weight: bold;
`;

function handleReserve(urL){
    // Linking.openURL(urL);
}

const Pantry = props => {
    const pantryMarker = (
        <Marker 
            coordinate={props.location}
            pinColor='orange'>

            <Callout>
                <Description>
                    <Name>{props.name}</Name>
                    
                    <WaitTime>
                        Wait time:   {props.waitTime} 
                    </WaitTime>

                    <View>
                        <Address>Address:</Address>
                        <AddressFull>{props.address}</AddressFull>
                    </View>
                    
                    <CalloutSubview>
                        <Reserve
                            title='Reserve Here'
                            color={theme.grey}
                            onPress={handleReserve(props.urL)}/>
                    </CalloutSubview>
                </Description>
            </Callout>

        </Marker>
    );

    return pantryMarker;

}

export default Pantry;