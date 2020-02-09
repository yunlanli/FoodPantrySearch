import { StyleSheet } from 'react-native';

export const donator = StyleSheet.create({
    Description: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },

    Name: {
      fontSize: 20,
      fontWeight: 'bold',
    },

    Items: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: 11,
      // backgroundColor: 'beige',
    },
});