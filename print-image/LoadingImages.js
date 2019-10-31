import React from 'react';
import PropTypes from 'prop-types';
import {
	StyleSheet,
	View,
	Image,
} from 'react-native';

const LoadingImages = ({
	reactSource,
	relaySource,
}) => (
	<View style={styles.container}>
		<Image
			style={styles.image}
			source={reactSource}
		/>
		<Image
			style={styles.image}
			source={relaySource}
		/>
	</View>
);

const sourceProp = PropTypes.oneOfType([
	PropTypes.shape({
		uri: PropTypes.string.isRequired,
	}),
	PropTypes.number,
]).isRequired;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20
	}
});

LoadingImages.propTypes = {
	reactSource: sourceProp,
	relaySource: sourceProp,
};

LoadingImages.defaultProps = {
	reactSource: {
		uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
	},
	relaySource: require('./images/coinbox.png'),
};

export default LoadingImages;
