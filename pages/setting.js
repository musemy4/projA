import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export const Setting = () => {
	return (
		<View style={styles.eachView} >
			<Text> 셋팅 화면 입니다.</Text>
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