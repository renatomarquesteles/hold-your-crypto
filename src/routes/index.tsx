import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SelectUser } from '../screens/SelectUser';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="SelectUser" component={SelectUser} />
      </Navigator>
    </NavigationContainer>
  );
};
