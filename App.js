import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Header from './componentes/header';
import Body from './componentes/body';
import Imagen from './componentes/image';
import Aside from './componentes/aside';
import Footer from './componentes/footer';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        equipoSeleccionado: 'Equipo1',
    };
}


EquipoSeleccionado = (equipo) => {
  this.setState({ equipoSeleccionado: equipo });
  console.log("equipo", equipo);
}

  
render() {
  const { equipoSeleccionado } = this.state;

  return (
      <View style={styles.container}>
          <Header EquipoSeleccionado={this.EquipoSeleccionado} />
          <Body equipoSeleccionado={equipoSeleccionado} />
          <Footer />
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000000",
  
  }
});
