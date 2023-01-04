import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import Detail from './Screens/Details';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen 
        name='HomeScreen'
        component={HomeScreen}/>
        <Stack.Screen
        name='Detail'
        component={Detail}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}