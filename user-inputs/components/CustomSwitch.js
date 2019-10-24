import React, { useState } from 'react';
import { Switch } from 'react-native';

export default () => {
	const [ value, setValue ] = useState(value);
	return (
		<Switch
			label="Disable Next Switch"
			value={value}
			onValueChange={(v) => setValue(v)}
		/>
	)
};
