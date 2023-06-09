import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import Promo from '../../screens/Promo/Promo';
import Home from '../../screens/home/home';
import Edu from '../../screens/Edu/edu';
import { ms } from 'react-native-size-matters';


import HomeActive from '../../assets/icons/homeActive.png'
import Video from '../../assets/icons/Video.png'
import IC_Promo from '../../assets/icons/Promo.png'
import Maps from '../../assets/icons/maps2.png'
import SmartFood from '../../screens/SmartFood/SmartFood';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: ms(54),
        position: 'absolute',
        bottom: ms(20),
        borderRadius: ms(16),
        marginHorizontal: ms(12)
      },
      tabBarShowLabel: false,
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
                    width: focused ? ms(24) : ms(20),
                    height: focused ? ms(24) : ms(20),
                    tintColor: focused ? '#609966' : '#EEEEEE'
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#609966' : '#EEE',
                    fontSize: focused ? ms(12) : ms(10),
                    fontWeight: focused ? '700' : '600'
                  }}
                >
                  Home
                </Text>
              </View>
            )
          }
        } />
      <Tab.Screen
        name='SmartFood'
        component={SmartFood}
        options={
          options = {
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={Maps}
                  resizeMode='contain'
                  style={{
                    width: focused ? ms(24) : ms(20),
                    height: focused ? ms(24) : ms(20),
                    tintColor: focused ? '#609966' : '#EEEEEE'
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#609966' : '#EEE',
                    fontSize: focused ? ms(12) : ms(10),
                    fontWeight: focused ? '700' : '600'
                  }}
                >
                  Food
                </Text>
              </View>
            )
          }}
      />
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
                    width: focused ? ms(24) : ms(20),
                    height: focused ? ms(24) : ms(20),
                    tintColor: focused ? '#609966' : '#EEEEEE'
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#609966' : '#EEE',
                    fontSize: focused ? ms(12) : ms(10),
                    fontWeight: focused ? '700' : '600'
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
                    width: focused ? ms(24) : ms(20),
                    height: focused ? ms(24) : ms(20),
                    tintColor: focused ? '#609966' : '#EEEEEE'
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#609966' : '#EEE',
                    fontSize: focused ? ms(12) : ms(10),
                    fontWeight: focused ? '700' : '600'
                  }}
                >
                  Promo
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