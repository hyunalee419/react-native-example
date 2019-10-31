import React from 'react';
import { StyleSheet, View } from 'react-native';

import Input from './components/Input';
import Select from './components/Select';
import CustomSwitch from './components/CustomSwitch';

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

      <Select/>

      <CustomSwitch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'center',
  }
});
