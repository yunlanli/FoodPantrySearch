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
import Unorderedlist from 'react-native-unordered-list';
import styled from 'styled-components';

const Description = styled.View`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Name = styled.Text`
    font-size: 20;
    font-weight: bold;
    text-align: center;
`;

const Heading = styled.Text`
    font-size: 12;
    font-weight: bold;
    margin-left: 2;
    margin-bottom: 4;
`;

const Content = styled.Text`
    font-size: 10;
    margin-left: 2;
    margin-top: 2;
`;

const RowContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

function itemGenerator(list) {
    const itemComponent = list.map(item =>{
        return(
            <Unorderedlist bulletUnicode={0x25E6}>
                <Content key={item}>{item}</Content>
            </Unorderedlist>
        );  
    });

    return itemComponent;
}

const Donator = props => { 
    const donatorMarker = (
        <Marker coordinate={props.location}>

            <Callout>
                <Description>
                    <Name>{props.donator}</Name>
                    
                    <CalloutSubview>
                        {/* <ScrollView>
                            <ScrollView style={donator.Items}>
                                {itemGenerator(props.items)}
                            </ScrollView>
                        </ScrollView> */}
                        <Heading>Available items:</Heading>
                            {itemGenerator(props.items)}
                    </CalloutSubview>
                    
                    <View>
                        <RowContainer>
                            <Heading>Pick Up: </Heading>
                            <Content>{props.address}</Content>
                        </RowContainer>

                        <RowContainer>
                            <Heading>Phone:</Heading>
                             <Content>{props.phone}</Content>
                        </RowContainer>
                        
                        <RowContainer>
                            <Heading>Additional Info: </Heading>
                            <Content>{props.addInfo}</Content>
                        </RowContainer>
                        
                    </View>

                </Description>
            </Callout>

        </Marker>
    );

    return donatorMarker;
}

export default Donator;