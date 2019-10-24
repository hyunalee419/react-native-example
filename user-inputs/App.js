import React, { useState }  from 'react';
import { StyleSheet, Text, TextInput, View, Picker } from 'react-native';

const Input = props => (
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

const Select = ({ onValueChange }) => {
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
}

export default function App() {
  return (
    <View style={styles.container}>
      <Input label="Basic Text Input:" />

      <Input label="Password Input:" secureTextEntry />

      <Input label="Return Key:" returnKeyType="search" />

      <Input label="Placeholder Text:" placeholder="Search" />

      <Input
        label="Input Events:"
        onChangeText={(e) => {console.log(e)}}
        onSubmitEditing={(e) => {console.log('Submit: ', e)}}
        onFocus={() => console.log('focus')}
      />
      <Select />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'center',
  },
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
