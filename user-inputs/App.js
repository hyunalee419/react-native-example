import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
