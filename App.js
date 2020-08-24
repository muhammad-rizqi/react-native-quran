import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


import Main from './pages/Main';
import AyaList from './pages/AyaList';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} options={{ title: 'Hafizh Quran' }}/>
          <Stack.Screen name="AyaList" component={AyaList} options={{ title: 'Hafizh Quran' }}/>
      </Stack.Navigator>
      </NavigationContainer>      
    );
  }
};
