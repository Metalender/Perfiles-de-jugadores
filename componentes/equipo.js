import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

export default function Equipo({nombre}) {
  return (
        <Text style={styles.equipos}>{nombre}</Text>
  );
}

const styles = StyleSheet.create({
  equipos: {  
    borderWidth: 1,
    borderColor: "#000000",
    margin: 10,
    height: 22,
  },
});