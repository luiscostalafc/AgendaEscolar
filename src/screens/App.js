
import React from 'react'
import {
	StyleSheet,
	Text,
	View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Header from '../components/Header'
import HorizontalMenu from '../components/HorizontalMenu'
import Gallery from '../components/Gallery'
import Announcements from '../components/Announcements'
import commomStyles from '../commomStyles'

import ActionButton from 'react-native-action-button'


export default function App() {
	return (
		<View style={styles.container}>
			<Header />
			<HorizontalMenu />
			<Gallery  />
			<ActionButton 
				renderIcon={ active => <Icon name="comment" size={25} color="#FFF" /> } 
				buttonColor={commomStyles.colors.mainColor} elevation={10}  />
			<Announcements />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F7F5FA",
		justifyContent: "space-between"
	}
})

