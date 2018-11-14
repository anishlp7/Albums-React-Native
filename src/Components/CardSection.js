import React from 'react';
import {View } from 'react-native';

const CardSection = (props) =>{
	return(
		<View style={styles.CardSectionStyle}>{props.children}</View>

		);
};


const styles ={
	CardSectionStyle:{
		borderBottomWidth:1,
		padding:5,
		backgroundColor:'#fff',
		justifyContent:'flex-start',
		flexDirection:'row',
		position:'relative',
	}
}
export default CardSection;