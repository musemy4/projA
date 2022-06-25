import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// pages
import { Home } from './pages/home';
import { Chat } from './pages/chat';
import { Profile } from './pages/profile';
import { Setting } from './pages/setting';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  )
}


export default () => (
  <NavigationContainer>
    <BottomTabs />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  HomeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})