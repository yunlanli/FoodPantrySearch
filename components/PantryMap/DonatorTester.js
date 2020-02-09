import Donator from './Donator';
import React from 'react';

const p1 = {
        location: {latitude: 40.7484, longitude: -73.9857},
        address: "Empire State Building",
        donator: "Hong Sen Du",
        items: ['Apple', 'Avocado', 'Bread', 'Coke'],
        phone: "626-837-3897",
        addInfo: "No",
    }

export default function DonatorTester(){
    return <Donator 
                location={p1.location}
                donator={p1.donator}
                items={p1.items}
                address={p1.address}
                phone={p1.phone}
                addInfo={p1.addInfo}/>
}