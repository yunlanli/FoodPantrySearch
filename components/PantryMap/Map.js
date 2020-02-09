/* Takes in the information of pantry and dontaors,
 * and generates a map with markers displaying 
 * these information
 * 
 * Props:
 * pantryList
 * donatorList
 */
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import MapView from 'react-native-maps';
import { homeStyle } from '../../GlobalStyles';
import Donator from './Donator';

function donatorGenerator(donatorList){
    const donatorMarker = donatorList.map(donator => {
        return(
            <Donator
                key={donator.name}
                location={donator.coordinate}
                address={donator.address}
                donator={donator.name}
                items={donator.items}
                phone={donator.contact}
                addInfo={donator.addInfo}
            />
        );
    })

    return donatorMarker;
}

const Map = props => {
    return(
        <MapView style={homeStyle.pantryMap}>
            {donatorGenerator(props.donatorList)}
        </MapView>
    )
}

export default Map;
