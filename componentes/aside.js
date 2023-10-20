import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Jugador from './jugador';

export default function Aside() {
  return (
        <View style={styles.aside}>
        <Jugador nombre="Jugador 1.1"></Jugador>
        <Jugador nombre="Jugador 1.2"></Jugador>
        <Jugador nombre="Jugador 1.3"></Jugador>
        <Jugador nombre="Jugador 1.4"></Jugador>
        <Jugador nombre="Jugador 1.5"></Jugador>
        </View>  
  );
}

const styles = StyleSheet.create({
  aside:{
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  }
});
