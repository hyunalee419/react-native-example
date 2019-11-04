import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

const placeholder = require('../images/coinbox.png');

const Placeholder = ({ loaded, ...props }) => !loaded && <Image {...props} source={placeholder} />;

export default class LazyImage extends Component {
	static propTypes = {
		style: PropTypes.shape({
			width: PropTypes.number.isRequired,
			height: PropTypes.number.isRequired
		})
	}

	state = {
		loaded: false
	}

	render() {
		const { style: { width, height }} = this.props;
		const { loaded } = this.state;
		return (
			<View style={{ width, height }}>
				<Placeholder loaded={loaded} {...this.props} />
				<Image
					{...this.props}
					onLoad={() => this.setState({ loaded: true })}
				/>
			</View>
		)
	}
}