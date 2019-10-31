import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import LoadingImages from './LoadingImages';
import ResizingImages from './ResizingImages';

export default function App() {
  return (
    <View>
      <ResizingImages/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
