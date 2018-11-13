import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const Header = () => {
	const {viewStyle , textStyle} = styles;
	return (
		<View style={viewStyle}>
		<Text style={textStyle}>Albums!</Text>
		</View>
		);
};

const styles = StyleSheet.create({
	textStyle:{
		fontSize: 25,
	},
	viewStyle:{
		backgroundColor:'#F8F8F8',
		justifyContent:'center',
		alignItems: 'center',
		height:60,
		paddingTop:15,
		paddingBottom:15,
		shadowColor: '#000',
		shadowOffset:{width: 0 , height: 2},
		shadowOpacity: 0.3,
		elevation:3,
		position:'relative'
	}
});


export default Header;