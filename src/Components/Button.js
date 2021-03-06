import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress , children}) =>{
	const {ButtonStyle, textStyle}=styles;

	return(
		<TouchableOpacity onPress={onPress} style={ButtonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
		);
};

const styles={
	ButtonStyle:{
		flex:1,
		alignSelf:'stretch',
		backgroundColor:'#fff',
		borderRadius:5,
		borderWidth:1,
		borderColor:'#007aff',
		marginLeft:5,
		marginRight:5
	},
	textStyle:{
		alignSelf:'center',
		fontSize:16,
		fontWeight:'600',
		color:'#007aff',
		paddingTop:10,
		paddingBottom:10
	}
}

export default Button;