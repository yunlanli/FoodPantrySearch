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

function donatorGenerator(donatorList, show){
    const donatorMarker = donatorList.map(donator => {
        return(
            <Donator
                key={donator.name}
                show={show}
                location={donator.coordinate}
                address={donator.address}
                donator={donator.name}
                items={donator.items}
                phone={donator.contact}
                addInfo={donator.addInfo}
            />
        );
    })

    return show && donatorMarker;
}

function pantryGenerator(pantryList, show){
    const pantryMarker = pantryList.map(pantry => {
        return(
            <Pantry
                key={pantry.name}
                show={show}
                location={pantry.coordinate}
                name={pantry.name}
                address={pantry.address}
                waitTime={pantry.waitTime}
                urL={pantry.urL}
            />
        );
    })

    return show && pantryMarker;
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
            {donatorGenerator(props.donatorList, props.showDonator)}
            {pantryGenerator(props.pantryList, props.showPantry)}
        </MapView>
    )
}

export default Map;
