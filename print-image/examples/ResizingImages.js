import React from 'react';
import { StyleSheet, View, Text, Image, Slider } from 'react-native';

const ResizingImages = ({
  source
}) => {
	const [ width, setWidth ] = React.useState(100);
	const [ height, setHeight ] = React.useState(100);
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={source}
					style={{ width, height }}
				/>
			</View>
			<View style={styles.sliderContainer}>
				<Text>Width: {width}</Text>
				<Text>Height: {height}</Text>
				<Slider
					style={styles.slider}
					minimumValue={50}
					maximumValue={150}
					value={width}
					onValueChange={(v) => {
						setWidth(v);
						setHeight(v);
					}}
				/>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageContainer: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	sliderContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'ghostwhite',
	},
	slider: {
		width: 100
	}
})

ResizingImages.defaultProps = {
	source: {
		uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
	},
};
export default ResizingImages;