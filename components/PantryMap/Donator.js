/* Marker Component on the map showing location of donator
 * When pressed, a callout - containing name, pick-up address,
 * contact info, and available items - will appear.
 * 
 * Takes in the following parameters as props
 * location -> {latitude, longitude} of the donator
 * donator -> name of the donator
 * items -> available items
 * address -> pick up address
 * phone -> phone # of the donator
 * addInfo -> Additional info such as allergy
 */
import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Marker, Callout, CalloutSubview } from 'react-native-maps';
import { donator } from '../../styles/Donator';
// import Unorderedlist from 'react-native-unordered-list';

function itemGenerator(list) {
    const itemComponent = list.map(item =>{
        return(
            <Text key={item}>{item}</Text>
        );  
    });

    return itemComponent;
}

const Donator = props => { 
    const donatorMarker = (
        <Marker coordinate={props.location}>

            <Callout>
                <View style={donator.Description}>
                    <Text style={donator.Name}>{props.donator}</Text>
                    
                    <CalloutSubview>
                        <ScrollView>
                            <Text>Available items:</Text>
                            <ScrollView style={donator.Items}>
                                {itemGenerator(props.items)}
                            </ScrollView>
                        </ScrollView>
                    </CalloutSubview>
                    
                    <View>
                        <Text>Pick-Up:</Text>
                        <Text>{props.address}</Text>

                        <Text>Phone: {props.phone}</Text>
                        <Text>Additional Info: {props.addInfo}</Text>
                    </View>

                </View>
            </Callout>

        </Marker>
    );

    return donatorMarker;
}

export default Donator;