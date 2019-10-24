import React, { useState } from 'react';
import { Switch } from 'react-native';

export default () => {
	const [ value, setValue ] = useState(value);
	return (
		<Switch
			label="Disable Next Switch"
			value={false}
			onValueChange={(v) => { setValue(v); console.log(v)}}
		/>
	)
};
