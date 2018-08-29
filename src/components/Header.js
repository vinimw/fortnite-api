import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const Header = (props) => {
	console.log(props)
	return (
		<View >
			<TextInput style={styles.input} />
			<Text>
				<FontAwesome name="desktop" size={25} style={{ color: 'red' }} />
				<Ionicons  name="logo-playstation"  size={25} style={{ color: 'red' }} />
				<Ionicons name="logo-xbox" size={25} style={{ color: 'red' }} />
				<Ionicons  name="md-trophy"  size={25} style={{ color: 'red' }} />
				<Ionicons  name="logo-playstation"  size={25} style={{ color: 'red' }} />
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

export default Header;