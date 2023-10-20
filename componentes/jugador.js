import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

export default function Jugador({nombre}) {
  return (
        <Text style={styles.jugadores}>{nombre}</Text>
  );
}

const styles = StyleSheet.create({
  jugadores: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#000000",
  }
});