import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/home/home';
import Edu from '../../screens/Edu/edu';
import Promo from '../../screens/Promo/Promo';
import Blog from '../../screens/Blog/Blog';
import SmartMaps from '../../screens/SmartMaps/SmartMaps';

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