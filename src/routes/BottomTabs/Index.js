import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import Promo from '../../screens/Promo/Promo';
import SmartMaps from '../../screens/SmartMaps/SmartMaps';
import Home from '../../screens/home/home';
import Edu from '../../screens/Edu/edu';
import { ms } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        borderTopStartRadius: ms(30),
        borderTopEndRadius: ms(30),
        height: ms(60),
        paddingBottom: ms(14)
      }
    }}>
      <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Tab.Screen name='Course' component={Edu} options={{ headerShown: false }} />
      <Tab.Screen name='Promo' component={Promo} options={{ headerShown: false }} />
      <Tab.Screen name='Maps' component={SmartMaps} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  options: {
    backgroundColor: 'red',
  }
})