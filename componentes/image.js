import { StatusBar } from 'expo-status-bar';
import { Component } from "react";
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

export default class Imagen extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
        Imagenes1:[{Jugador1: "https://okdiario.com/img/2022/05/29/la-tecnica-infalible-para-calcular-la-edad-de-los-gatos.jpg"},
        {Jugador2: "https://dovet.es/wp-content/uploads/2017/01/gato-768x658.jpg"},
        {Jugador3: "https://estaticos-cdn.prensaiberica.es/clip/b84dc4c1-d4db-4bd4-896c-37986d62b6b4_16-9-discover-aspect-ratio_default_0.jpg"},
        {Jugador4: "https://preview.redd.it/dwmbwypw3g291.jpg?auto=webp&s=d01ce5fb03bdfe6fcc7ca3dea0bfbf04b0855eea"},
        {Jugador5: "https://i.ytimg.com/vi/viszafbV3lg/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgWCg9MA8=&rs=AOn4CLDTtFada9kefIl-99Lm-IKgyLzBAQ"},
        {Jugador6: "https://estaticos-cdn.prensaiberica.es/clip/86d500b6-3a63-4361-8e90-90e611ccf4ae_16-9-discover-aspect-ratio_default_0.jpg"},
        {Jugador7: "https://images.hola.com/imagenes/mascotas/20220728214490/estres-gatos-senales-alerta-dn/1-120-704/cosas-que-pueden-estresar-a-un-gato-m.jpg?tx=w_680"},
        {Jugador8: "https://www.portalveterinaria.com/upload/20230629120132gripeaviargatospolonia.jpg"},
        {Jugador9: "https://hips.hearstapps.com/hmg-prod/images/gatito-regalos-para-gatos-1613566520.jpg?crop=1xw:0.84375xh;center,top"},
        {Jugador10: "https://estaticos-cdn.prensaiberica.es/clip/8e873eb9-d504-4223-ab7f-f4df56dfbd44_16-9-discover-aspect-ratio_default_0.jpg"},
        {Jugador11: "https://pbs.twimg.com/media/FMXqX51XIAQBRkO.jpg:large"},
        {Jugador12: "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-gatos-se-protegen-contra-las-plagas-de-insectos-al-danar-ciertas-plantas/9621844-10-esl-MX/Los-gatos-se-protegen-contra-las-plagas-de-insectos-al-danar-ciertas-plantas.jpg"},
        {Jugador13: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fuerte_Al_Koot%2C_Doha%2C_Catar%2C_2013-08-06%2C_DD_02.JPG/640px-Fuerte_Al_Koot%2C_Doha%2C_Catar%2C_2013-08-06%2C_DD_02.JPG"},
        {Jugador14: "https://www.oasysparquetematico.com/wp-content/uploads/2019/04/shutterstock_199591094-1280x720.jpg"},
        {Jugador15: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Llama_lying_down.jpg"}] ,
        
      }
  }
  
  render() {
    const { jugadorSeleccionado } = this.props;
    const imagenJugador = this.state.Imagenes1.find(jugador => jugador[jugadorSeleccionado]);

    return (
        <View style={styles.imagen}>
               <Image style={styles.image} source={{ uri: imagenJugador ? imagenJugador[jugadorSeleccionado] : '' }} />
        </View>
    )
}
}


const styles = StyleSheet.create({
    image: {
        borderWidth: 2,
        borderColor: "#000000",
        flex: 4
      },
  imagen: {
    flex: 1
    
  }
});
