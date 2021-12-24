import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'COUNTRIES - 4',
              headerStyle: {backgroundColor: '#4895EC'},
              headerTintColor: '#FFFFFF',
              headerTitleAlign: 'center',
            }}
          />

          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              title: 'DETAIL - 4',
              headerStyle: {backgroundColor: '#4895EC'},
              headerTintColor: '#FFFFFF',
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
