import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Jugador from './jugador';

class Aside extends Component {
   
  render() {
      const { equipoSeleccionado } = this.props;
      const { jugadorSeleccionado } = this.props;

      return (
          <View>
              {equipoSeleccionado === 'Equipo1' && (
                  <View>
                      <Jugador nombre={"Jugador1"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador2"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador3"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador4"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador5"} jugadorSeleccionado={jugadorSeleccionado}/>
                  </View>
              )}
              {equipoSeleccionado === 'Equipo2' && (
                  <View>
                      <Jugador nombre={"Jugador6"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador7"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador8"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador9"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador10"} jugadorSeleccionado={jugadorSeleccionado}/>
                  </View>
              )}
                 {equipoSeleccionado === 'Equipo3' && (
                  <View>
                      <Jugador nombre={"Jugador11"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador12"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador13"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador14"} jugadorSeleccionado={jugadorSeleccionado}/>
                      <Jugador nombre={"Jugador15"} jugadorSeleccionado={jugadorSeleccionado}/>
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
