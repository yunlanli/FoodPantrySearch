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
  Text,
  View,
  Linking,
} from 'react-native';

import { Marker, Callout, CalloutSubview } from 'react-native-maps';
import { pantry } from '../../styles/Pantry';

function handleReserve(urL){
    // Linking.openURL(urL);
}

const Pantry = props => (
    <Marker 
        coordinate={props.location}
        pinColor='orange'>

        <Callout>
            <View style={pantry.description}>
                <Text style={pantry.name}>{props.name}</Text>
                
                <Text style={pantry.waitTime}>
                    Wait time: {props.waitTime} 
                </Text>

                <View>
                    <Text style={pantry.address}>Address:</Text>
                    <Text>{props.address}</Text>
                </View>
                
                <CalloutSubview onPress={handleReserve(props.urL)}>
                    <Text style={pantry.reserve}> Reserve Here </Text>
                </CalloutSubview>
            </View>
        </Callout>

    </Marker>
    
)

export default Pantry;