import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Equipo from './equipo';


export default function Header() {
  const equipos = ["Equipo 1", "Equipo 2", "Equipo 3 ", "Equipo 4"];
  return (
      <View style={styles.headerStyle}>
        {equipos.map((equipo) =>(
          <Equipo nombre={equipo}></Equipo>
          ))}
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