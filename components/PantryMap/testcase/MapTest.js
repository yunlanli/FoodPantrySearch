import Map from '../Map';
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

const PantryList = [
    {
        coordinate: {latitude: 40.7663, longitude: -73.9884},
        name: 'Just Food',
        address: "424 W 54th St, New York, NY",
        waitTime: '20min',
        urL: 'https://www.justfood.org/',
    },

    {
        coordinate: {latitude: 40.7958, longitude: -73.9492},
        name: 'New York Common Pantry',
        address: "8 E 109th St, New York, NY",
        waitTime: '10min',
        urL: 'http://nycommonpantry.org/',
    },

    {
        coordinate: {latitude: 40.7467, longitude: -73.9849},
        name: 'City Harvest',
        address: "6 E 32nd St, New York, NY",
        waitTime: '15min',
        urL: 'https://www.cityharvest.org/',
    },

    {
        coordinate: {latitude: 40.7230, longitude: -73.9864},
        name: 'University Community Social Services',
        address: "137 E 2nd St, New York, NY",
        waitTime: '40min',
        urL: 'http://www.meatloafkitchen.org/',
    },

    {
        coordinate: {latitude: 40.7889, longitude: -73.9773},
        name: 'West Side Campaign Against Hunger',
        address: "263 W 86th St, New York, NY",
        waitTime: '5min',
        urL: 'https://www.wscah.org/',
    },
]

const MapTest = (props) => {
    const {pantry, donator} = props;
        return (<Map 
            showPantry = {pantry}
            showDonator = {donator}
            donatorList = {DonatorList}
            pantryList = {PantryList}/>
        );
}

export default MapTest;