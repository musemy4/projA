import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

// pages
import { Home } from './pages/home';
import { Chat } from './pages/chat';
import { Profile } from './pages/profile';
import { Setting } from './pages/setting';


const App = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Chat: {
      screen: Chat,
    },
    Profile: {
      screen: Profile,
    },
    Setting: {
      screen: Setting,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(App);

export default () => (
  <AppContainer />
);

const styles = StyleSheet.create({
  HomeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})