import Pantry from '../Pantry';
import React from 'react';

const pantry1 = {
        coordinate: {latitude: 40.7663, longitude: -73.9884},
        name: 'Just Food',
        address: "424 W 54th St, New York, NY",
        waitTime: '20min',
        urL: 'https://www.justfood.org/',
    }

export default function DonatorTester(){
    return <Pantry
                location={pantry1.coordinate}
                name={pantry1.name}
                address={pantry1.address}
                waitTime={pantry1.waitTime}
                urL={pantry1.urL}/>
}