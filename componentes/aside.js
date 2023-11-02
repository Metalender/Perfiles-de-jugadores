import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Jugador from './jugador';

class Aside extends Component {
   
  render() {
      const { equipoSeleccionado } = this.props;
      const { jugadorSeleccionado, JugadorSeleccionado } = this.props;

      return (
          <View>
              {equipoSeleccionado === 'Equipo1' && (
                  <View>
                      <Jugador nombre={"Jugador1"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador2"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador3"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador4"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador5"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                  </View>
              )}
              {equipoSeleccionado === 'Equipo2' && (
                  <View>
                      <Jugador nombre={"Jugador6"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador7"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador8"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador9"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador10"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                  </View>
              )}
                 {equipoSeleccionado === 'Equipo3' && (
                  <View>
                      <Jugador nombre={"Jugador11"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador12"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador13"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador14"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                      <Jugador nombre={"Jugador15"} jugadorSeleccionado={jugadorSeleccionado} JugadorSeleccionado={JugadorSeleccionado}/>
                  </View>
              )}  
          </View>
      );
  }
}


export default Aside;

const styles = StyleSheet.create({
  aside:{
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  }
});
