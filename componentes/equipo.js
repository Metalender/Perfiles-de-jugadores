import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image, TouchableOpacity } from 'react-native';


function Equipo(props) {
  return (
      <>
        <TouchableOpacity
          style={styles.equipos}
          onPress={() => props.EquipoSeleccionado(props.nombre)}>
            
          <Text>{props.nombre}</Text>
        </TouchableOpacity>
      </>
    );
  }
  
export default Equipo;

const styles = StyleSheet.create({
  equipos: {  
    borderWidth: 1,
    borderColor: "#000000",
    margin: 10,
    height: 22,
  },
});