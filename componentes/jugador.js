import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { TouchableOpacity } from "react-native-web";
import React, { Component } from 'react';

class Jugador extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    
  return (
    <>
      <TouchableOpacity style={styles.equipos} onPress={() => this.props.jugadorSeleccionado(this.props.nombre)}><Text>{this.props.nombre}</Text></TouchableOpacity>
    </>
  );
  }
}
  
  export default Jugador;

const styles = StyleSheet.create({
  jugadores: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#000000",
  },
  equipos: {  
    borderWidth: 1,
    borderColor: "#000000",
    margin: 10,
    height: 22,
  }
});