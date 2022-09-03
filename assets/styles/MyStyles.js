import { StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',     
      //flexDirection:'row'
    },
    viewchild: {
      flex:5,
      backgroundColor:'yellowgreen',
    width:'80%'
    },
    alingView:{
    alignItems: 'center',
    justifyContent: 'center'
    },
    textInputs:{
      fontSize:30,
      borderWidth:1,
      borderStyle:'solid',
      padding:5,
      textAlign:'center'
    },
    Touchstile:{
        backgroundColor:'green',
        padding:10,
        borderRadius:10,
        marginLeft:5|
    },
    textoTouchable:{
        color:'white',
        fontWeight:'bold'
    }
  });
  export {styles,myStyle}