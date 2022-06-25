import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export const Profile = () => {
  return (
    <View style={styles.eachView} >
      <Text> 프로필 화면 입니다.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  eachView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})