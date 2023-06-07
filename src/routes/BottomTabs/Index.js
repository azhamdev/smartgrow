import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Promo from '../../screens/Promo/Promo';
import SmartMaps from '../../screens/SmartMaps/SmartMaps';
import Home from '../../screens/home/home';
import Edu from '../../screens/Edu/edu';
import { ms } from 'react-native-size-matters';


import HomeActive from '../../assets/icons/homeActive.png'
import Video from '../../assets/icons/Video.png'
import IC_Promo from '../../assets/icons/Promo.png'
import Maps from '../../assets/icons/maps2.png'

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: ms(70),
      },
      tabBarShowLabel: false
    }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={
          {
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={HomeActive}
                  resizeMode='contain'
                  style={{
                    width: ms(32),
                    height: ms(32),
                    tintColor: focused ? '#609966' : '#EEEEEE'
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#609966' : '#EEE',
                  }}
                >
                  Home
                </Text>
              </View>
            )
          }
        } />
      <Tab.Screen
        name='Course'
        component={Edu}
        options={
          options = {
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={Video}
                  resizeMode='contain'
                  style={{
                    width: ms(32),
                    height: ms(32),
                    tintColor: focused ? '#609966' : '#EEEEEE'
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#609966' : '#EEE',
                  }}
                >
                  Course
                </Text>
              </View>
            )
          }}
      />
      <Tab.Screen
        name='Promo'
        component={Promo}
        options={
          options = {
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={IC_Promo}
                  resizeMode='contain'
                  style={{
                    width: ms(32),
                    height: ms(32),
                    tintColor: focused ? '#609966' : '#EEEEEE'
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#609966' : '#EEE',
                  }}
                >
                  Promo
                </Text>
              </View>
            )
          }}
      />
      <Tab.Screen
        name='Maps'
        component={SmartMaps}
        options={
          options = {
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={Maps}
                  resizeMode='contain'
                  style={{
                    width: ms(32),
                    height: ms(32),
                    tintColor: focused ? '#609966' : '#EEEEEE'
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#609966' : '#EEE',
                  }}
                >
                  Maps
                </Text>
              </View>
            )
          }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  options: {
    backgroundColor: 'red',
  }
})