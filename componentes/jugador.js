import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import { TouchableOpacity } from "react-native-web";
import React, { Component } from 'react';

const coloresJugadores = {
  Jugador1: '#7aaff5',
  Jugador2: '#7aaff5',
  Jugador3: '#7aaff5',
  Jugador4: '#7aaff5',
  Jugador5: '#7aaff5',
  Jugador6: '#7df57a',
  Jugador7: '#7df57a',
  Jugador8: '#7df57a',
  Jugador9: '#7df57a',
  Jugador10: '#7df57a',
  Jugador11: '#f77272',
  Jugador12: '#f77272',
  Jugador13: '#f77272',
  Jugador14: '#f77272',
  Jugador15: '#f77272',
};

class Jugadores extends Component{
    constructor(props) {
      super(props);
    }
    render() {
      const jugadorColor = this.props.nombre === this.props.JugadorSeleccionado ? coloresJugadores[this.props.nombre] : 'white';

    return (
      <>
        <TouchableOpacity style={[styles.equipos, { backgroundColor: jugadorColor }]} onPress={() => this.props.jugadorSeleccionado(this.props.nombre)}><Text style={styles.texto}>{this.props.nombre}</Text></TouchableOpacity>
      </>
    );
    }
  }
  
  export default Jugadores;

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