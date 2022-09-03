import { Text,View,Image, requireNativeComponent } from "react-native";
import { myStyle } from "../assets/styles/MyStyles";
export default function Header(props){
    return (
        <View style={myStyle.ViewHeader}>
            <Image source={require(`../assets/img/${props.src}`)}
            style={{width:'100%',height:'100%',resizeMode:'stretch'}}/>
            {/*<Text style={{fontSize:80}}>{props.titulo}</Text>
            <Text style={{fontSize:80}}>{props.subtitulo}</Text>*/}
        </View>
    );
}

