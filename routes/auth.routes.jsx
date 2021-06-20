import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from '../pages/LogIn';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LogIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;