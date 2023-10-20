import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Header from './componentes/header';
import Body from './componentes/body';
import Imagen from './componentes/image';
import Aside from './componentes/aside';
import Footer from './componentes/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000",
  
  }
});
