import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/screens/home/home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Edu from './src/screens/Edu/edu';
import BottomTab from './src/routes/BottomTabs/Index';
import SmartMaps from './src/screens/SmartMaps/SmartMaps';
import DetailVideo from './src/screens/DetailVideo/DetailVideo';
import SmartPlant from './src/screens/SmartPlant/SmartPlant';
import SmartKit from './src/screens/SmartKit/SmartKit';
import SmartFood from './src/screens/SmartFood/SmartFood';
import WonderFood from './src/screens/WonderFood/WonderFood';
import SmartTech from './src/screens/SmartTech/SmartTech';
import SmartClean from './src/screens/SmartClean/SmartClean';
import SmartEvent from './src/screens/SmartEvent/SmartEvent';
import Blog from './src/screens/Blog/Blog';
import IntroEdu from './src/screens/Edu/Intro';

import WonderEdu from './src/screens/WonderEdu/edu';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomTab">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="WonderEdu"
                    component={WonderEdu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="WonderFood"
                    component={WonderFood}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="IntroEdu"
                    component={IntroEdu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SmartMaps"
                    component={SmartMaps}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SmartPlant"
                    component={SmartPlant}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SmartKit"
                    component={SmartKit}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DetailVideo"
                    component={DetailVideo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SmartTech"
                    component={SmartTech}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SmartClean"
                    component={SmartClean}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SmartEvent"
                    component={SmartEvent}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SmartBlog"
                    component={Blog}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="BottomTab"
                    component={BottomTab}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});

// <View style={{flex: 1, backgroundColor: '#ECECEC'}}>
//   <Home />
// </View>
