import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/home/home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Edu from './src/screens/Edu/edu';
import BottomTab from './src/routes/BottomTabs/Index';
import SmartMaps from './src/screens/SmartMaps/SmartMaps';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edu"
          component={Edu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SmartMaps"
          component={SmartMaps}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

// <View style={{flex: 1, backgroundColor: '#ECECEC'}}>
//   <Home />
// </View>
