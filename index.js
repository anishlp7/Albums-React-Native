/** @format */
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';

const App = () => {
	return (
		<View>
		<Header HeaderText={'Albums!'} />
		<AlbumList />
		</View>
		);
};

AppRegistry.registerComponent('nalbums', () => App);
