import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../components/Login';
import Signup from '../components/Login';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Main: Login,
  // Signup: Signup,
});
// switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
