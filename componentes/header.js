import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Equipo from './equipo';


export default function Header() {
  return (
      <View style={styles.headerStyle}>
        <Equipo nombre="Equipo 1"></Equipo>
        <Equipo nombre="Equipo 2"></Equipo>
        <Equipo nombre="Equipo 3"></Equipo>
      </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row",
    padding: 30,
    height: 100
  },
  equipos: {  
    borderWidth: 1,
    borderColor: "#000000",
    margin: 10,
    height: 22,
  },
});