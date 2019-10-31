import React from 'react';
import { StyleSheet, View, Text, Image, Slider } from 'react-native';

const ResizingImages = ({
  reactSource,
  relaySource,
}) => {
	const [ width, setWidth ] = React.useState(100);
	const [ height, setHeight ] = React.useState(100);
	return (
		<View style={styles.container}>
			<Image
				style={{ width, height }}
				source={relaySource}
			/>

			<Text>Width: {width}</Text>
			<Text>Height: {height}</Text>

			<Slider
				style={styles.slider}
				minimumValue={30}
				maximumValue={150}
				value={width}
				onValueChange={(v) => {
					setWidth(v);
					setHeight(v);
				}}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	slider: {

	}
})

ResizingImages.defaultProps = {
	reactSource: {
		uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
	},
	relaySource: require('./images/coinbox.png'),
};
export default ResizingImages;