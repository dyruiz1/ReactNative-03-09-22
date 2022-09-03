import { StyleSheet,Text,View } from "react-native";

export default function Header(props){
    return (
        <View style={myStyle.ViewHeader}>
            <Text style={{fontSize:80}}>{props.titulo}</Text>
            <Text style={{fontSize:80}}>{props.subtitulo}</Text>
        </View>
    );
}

const myStyle= StyleSheet.create({
    ViewHeader:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'orange',
        //flexDirection:'row'
        width:'80%'
        
    }
})