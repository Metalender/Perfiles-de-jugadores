import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
export default function Imagen() {
  const imagenURL = "https://images.ecestaticos.com/7m7n6jDG1Q8lzZYo1wBSf9TfkxY=/0x0:2272x1571/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3e1%2F46f%2Fe1b%2F3e146fe1be61002dec27581cd0e1a042.jpg"
  return (
    <View style={styles.image}>
    <Image style={styles.imagen} source={{
                  uri: imagenURL,
              }}></Image>
  </View>
  );
}

const styles = StyleSheet.create({
    image: {
        borderWidth: 2,
        borderColor: "#000000",
        flex: 4
      },
  imagen: {
    flex: 1
    
  }
});
