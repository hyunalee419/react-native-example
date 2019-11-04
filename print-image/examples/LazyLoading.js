import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import LazyImage from './LazyImage';

const remote = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
export default class LazyLoading extends Component {
	state = {
		source: null
	};

	render() {
		return (
			<View style={styles.container}>
				<LazyImage
					style={{ width: 200, height: 100 }}
					resizeMode="contain"
					source={this.state.source}
				/>
				<Button
					title="click me"
					onPress={() => this.setState({ source: { uri: remote }})}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
