import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footerStyle}>
            <Text style={styles.footerTexto}>www.equipo.com</Text>
            <Text style={styles.footerTexto}>123456789</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    footerTexto: {
      margin: 10,
      height: 22,
      borderWidth: 1,
      borderColor: "#000000",
    },
    footerStyle: {
      borderWidth: 2,
      borderColor: "#000000",
      flexDirection: "row",
      padding: 30,
      height: 100,
      justifyContent: 'space-between'
    }
  });