import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.equipos} >Equipo 1</Text>
        <Text style={styles.equipos}>Equipo 2</Text>
        <Text style={styles.equipos}>Equipo 3</Text>
      </View>
      <View style={styles.bodyStyle}>
        <View style={styles.aside}>
        <Text style={styles.jugadores}>Jugador 1.1</Text>
        <Text style={styles.jugadores}>Jugador 1.2</Text>
        <Text style={styles.jugadores}>Jugador 1.3</Text>
        <Text style={styles.jugadores}>Jugador 1.4</Text>
        <Text style={styles.jugadores}>Jugador 1.5</Text>
        </View>  
        <View style={styles.image}>
          <Image style={styles.imagen} source={{
                        uri: 'https://images.ecestaticos.com/7m7n6jDG1Q8lzZYo1wBSf9TfkxY=/0x0:2272x1571/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3e1%2F46f%2Fe1b%2F3e146fe1be61002dec27581cd0e1a042.jpg',
                    }}></Image>
        </View>
      </View>
      <View style={styles.headerStyle}>
      <Text style={styles.footerTexto}>www</Text>
      <Text style={styles.footerTexto}>Jugador 1.5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000",
  },
  headerStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row",
    padding: 30,
    height: 100
  },
  bodyStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1,
    flexDirection: "row"
  },
  equipos: {  
    borderWidth: 1,
    borderColor: "#000000",
    margin: 10,
    height: 22,
  },
  aside:{
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  },
  image: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 4
  },
  jugadores: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#000000",
  },
  imagen: {
    flex: 1
    
  },
  footerTexto: {
    margin: 10,
    height: 22,
    borderWidth: 1,
    borderColor: "#000000",
  }
});
