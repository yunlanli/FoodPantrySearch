import { createAppContainer } from 'react-navigation';

import SignUpScreen from '../screens/SignUp';
import SignInScreen from '../screens/SignIn'


const MainNavigator = createStackNavigator({
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen }
});

const navigation = createAppContainer(MainNavigator);
export default navigation;
