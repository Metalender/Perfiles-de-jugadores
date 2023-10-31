import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Equipo from './equipo';



class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {
          equipos: ['Equipo1', 'Equipo2', 'Equipo3'],
      };
  }

  render() {
      const { EquipoSeleccionado } = this.props;
      const { equipos } = this.state;

      return (
          <View style={styles.headerStyle}>
              {equipos.map((equip, index) => {
                  return (
                      <Equipo key={index} nombre={equip} EquipoSeleccionado={EquipoSeleccionado} />
                  )
              })}
          </View>
      );
  }
}

export default Header

const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 2,
    borderColor: "#000000",
    flexDirection: "row",
    padding: 30,
    height: 100
  },
  equipos: {  
    borderWidth: 1,
    borderColor: "#000000",
    margin: 10,
    height: 22,
  },
});