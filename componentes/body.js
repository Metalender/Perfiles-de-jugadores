import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Aside from './aside';
import Imagen from './image';


export default function Body() {
  return (
      <View style={styles.bodyStyle}>
        <Aside></Aside> 
        <Imagen></Imagen>
      </View>
  );
}

const styles = StyleSheet.create({
  bodyStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1,
    flexDirection: "row"
  }
});
