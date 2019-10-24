import React, { useState } from 'react';
import { Picker } from 'react-native';

export default ({ onValueChange }) => {
	const [ language, setLanguage ] = useState('');
	return (
		<Picker
			selectedValue={language}
			style={{height: 50, width: 100}}
			onValueChange={(itemValue, itemIndex) => {
				setLanguage(itemValue);
				if (onValueChange) onValueChange(itemValue, itemIndex);
			}}
		>
			<Picker.Item label="Java" value="java" />
			<Picker.Item label="JavaScript" value="js" />
		</Picker>
	);
};
