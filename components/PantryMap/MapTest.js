import Map from './Map';
import React from 'react';

const DonatorList = [
    {
        coordinate: {latitude: 40.7484, longitude: -73.9857},
        address: "Empire State Building",
        name: "Hong Sen Du",
        items: ["Apple", "Avocado", "Bread", "Coke"],
        contact: "626-837-3897",
        addInfo: "No",
    },

    {
        coordinate: {latitude: 40.8075, longitude: -73.9626},
        address: "Columbia University",
        name: "Michelle Xu",
        items: ["Crackers, Tomatoes", "Cooked Pasta", "Peanut Butter"],
        contact: "282-010-8272",
        addInfo: "Peanut Butter Allergy",
    },

    {
        coordinate: {latitude: 40.7295, longitude: -73.9965},
        address: "New York University",
        name: "Aditi Dam",
        items: ["Curry", "Pancakes", "Strawberries"],
        contact: "202-282-9303",
        addInfo: "Food is Spicy",
    }
]

export default function MapTest(){
    return <Map donatorList = {DonatorList}/>
}