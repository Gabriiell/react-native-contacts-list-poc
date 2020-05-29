import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SettingsScreen from './SettingsScreen';
import ContactScreen from './ContactScreen';

const Tab = createBottomTabNavigator();

const getIconName = ({ routeName, focused }: any): string => {
  if (routeName === 'Contact') {
    return `${focused ? 'md' : 'ios'}-contact`;
  }

  return `ios-list${focused ? '-box' : ''}`;
};

const screenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, color, size }: any) => {
    const iconName = getIconName({ routeName: route.name, focused });
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const MainScreen: FunctionComponent<{}> = () => (
  <Tab.Navigator initialRouteName='Contact' screenOptions={screenOptions}>
    <Tab.Screen name='Contact' component={ContactScreen} />
    <Tab.Screen name='Settings' component={SettingsScreen} />
  </Tab.Navigator>
);

export default MainScreen;
