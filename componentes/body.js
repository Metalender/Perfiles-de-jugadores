import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Aside from './aside';
import Imagen from './image';


export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
          jugadorSeleccionado: "Jugador1"
    }
  }

 
jugadorSeleccionado = (jugador) => {
  this.setState({ jugadorSeleccionado: jugador });
  console.log("jugador", jugador)
}

  render() {
    const { equipoSeleccionado } = this.props;
    const { jugadorSeleccionado } = this.state;


    return (
      <View style={styles.bodyStyle}>
        <Aside equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={this.jugadorSeleccionado}/>
        <Imagen jugadorSeleccionado={jugadorSeleccionado}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1,
    flexDirection: "row"
  }
});
