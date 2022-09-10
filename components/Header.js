import { StyleSheet, Text, View, Image } from "react-native";
import { myStyle } from "../assets/styles/Mystyles";

export default function Header(props){
    return(
        <View style= {myStyle.viewHeader}>
            {/* <Text>{props.titulo}</Text>
            <Text>{props.subtitulo}</Text> */}

            <Image
            // sacar la imagen de una ruta loca
            source={require(`../assets/images/${props.src}`)}
            style={{width:'50%', height:'90%', resizeMode:'stretch'}}
            />
        </View>
    );
}

