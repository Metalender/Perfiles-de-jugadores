import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image, TouchableOpacity } from 'react-native';



  function Equipo(props) {
    const equipoColor = props.nombre === props.equipoSeleccionado ? cambiarColor(props.nombre) : 'white';
  
    return (
      <>
        <TouchableOpacity
          style={[styles.equipos, { backgroundColor: equipoColor }]}
          onPress={() => props.EquipoSeleccionado(props.nombre)}>
  
          <Text>{props.nombre}</Text>
        </TouchableOpacity>
      </>
    );
  }
  const cambiarColor = (nombre) => {
    switch (nombre) {
      case 'Equipo1':
        return '#4a95f7';
      case 'Equipo2':
        return '#4df74a';
      case 'Equipo3':
        return '#f74a4a';
      default:
        return 'white';
    }
  };
  
export default Equipo;

const styles = StyleSheet.create({
  equipos: {  
    borderWidth: 1,
    borderColor: "#000000",
    margin: 10,
    height: 22,
  },
});
