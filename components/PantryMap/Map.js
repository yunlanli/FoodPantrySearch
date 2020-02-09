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
import { userMap } from '../../styles/Map';
import Pantry from './Pantry';
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

function pantryGenerator(pantryList){
    const pantryMarker = pantryList.map(pantry => {
        return(
            <Pantry
                key={pantry.name}
                location={pantry.coordinate}
                name={pantry.name}
                address={pantry.address}
                waitTime={pantry.waitTime}
                urL={pantry.urL}
            />
        );
    })

    return pantryMarker;
}

const NY = {
    latitude: 40.72285,
    longitude: -74,
    latitudeDelta: 0.18,
    longitudeDelta: 0.03,
}

const Map = props => {
    return(
        <MapView 
            style={userMap.mapContainer}
            initialRegion={NY}
            showsUserLocation={true}
            followsUserLocation={false}
            userLocationAnnotationTitle="You are here!">
            {donatorGenerator(props.donatorList)}
            {pantryGenerator(props.pantryList)}
        </MapView>
    )
}

export default Map;
