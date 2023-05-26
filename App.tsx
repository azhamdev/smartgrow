import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import BottomTab from './src/routes/BottomTabs/Index';
import Blog from './src/screens/Blog/Blog';
import Praktik from './src/screens/Category-Course/Praktik';
import Teori from './src/screens/Category-Course/Teori';
import DetailVideo from './src/screens/DetailVideo/DetailVideo';
import IntroEdu from './src/screens/Edu/Intro';
import Edu from './src/screens/Edu/edu';
import SmartClean from './src/screens/SmartClean/SmartClean';
import SmartEvent from './src/screens/SmartEvent/SmartEvent';
import SmartFood from './src/screens/SmartFood/SmartFood';
import SmartKit from './src/screens/SmartKit/SmartKit';
import SmartMaps from './src/screens/SmartMaps/SmartMaps';
import SmartPlant from './src/screens/SmartPlant/SmartPlant';
import SmartTech from './src/screens/SmartTech/SmartTech';
import Home from './src/screens/home/home';

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
          name="IntroEdu"
          component={IntroEdu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TeoriEdu"
          component={Teori}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PraktikEdu"
          component={Praktik}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SmartMaps"
          component={SmartMaps}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SmartPlant"
          component={SmartPlant}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SmartKit"
          component={SmartKit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailVideo"
          component={DetailVideo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SmartTech"
          component={SmartTech}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SmartClean"
          component={SmartClean}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SmartEvent"
          component={SmartEvent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SmartBlog"
          component={Blog}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SmartFood"
          component={SmartFood}
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
