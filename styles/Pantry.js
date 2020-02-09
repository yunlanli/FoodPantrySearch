import { StyleSheet } from 'react-native';

export const pantry = StyleSheet.create({

    description: {
        display: 'flex',
        flexDirection: 'column',
    },

    name: {
        fontSize: 20,
        textAlign: 'center',
    },

    waitTime: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#60B3FB',
    },

    address: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#60B3FB',
    },

    reserve: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingTop: 3,
        paddingBottom: 3,
    }
})