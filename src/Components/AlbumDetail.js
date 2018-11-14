import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) =>{
	const { title, artist, thumbnail_image, image, url}= album;
	const {HeaderContainerStyle, thumbnailImage, HeaderText, thumbnailContainerStyle, imageStyle} = styles;
	return(
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image
					style={thumbnailImage}
					source={{uri: thumbnail_image}}
					 />
				</View>

				<View style={HeaderContainerStyle}>
					<Text style={HeaderText}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image 
				style={imageStyle}
				source={{uri: image}}
				 />
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
				Buy Now!
				</Button>
			</CardSection>
		</Card>
		);

};

const styles ={
	HeaderContainerStyle:{
		flexDirection:'column',
		justifyContent:'space-around'
	},
	HeaderText:{
		fontSize:20
	},
	thumbnailImage:{
		height:50,
		width:50,
	},
	thumbnailContainerStyle:{
		justifyContent:'center',
		alignItems:'center',
		marginLeft:10,
		marginRight:10
	},
	imageStyle:{
		height:300,
		flex:1,
		width:null
	}
}

export default AlbumDetail;