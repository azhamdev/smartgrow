import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import Promo from '../../screens/Promo/Promo';
import SmartMaps from '../../screens/SmartMaps/SmartMaps';
import Home from '../../screens/home/home';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Tab.Screen name='Promo' component={Promo} options={{ headerShown: false }} />
      <Tab.Screen name='Maps' component={SmartMaps} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})