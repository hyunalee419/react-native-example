import React from 'react';
import {
	StyleSheet, Text, TextInput, View
} from 'react-native';

export default (props) => (
	<View style={styles.textInputContainer}>
		<Text style={styles.textInputLabel}>
			{props.label}
		</Text>
		<TextInput
			style={styles.textInput}
			{...props}
		/>
	</View>
);

const styles = StyleSheet.create({
	textInputContainer: {
		margin: 10
	},
	textInputLabel: {
		fontWeight: 'bold'
	},
	textInput: {
		backgroundColor: '#fff'
	}
});
