// van los estilos de app js y de header se importa lo verde los componentes
import { StyleSheet } from "react-native";



const myStyle = StyleSheet.create({
    viewHeader:{
        flex:2,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "orange",
        width:"80%",
    
    }
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      // flexDirection: "row"
    },
    viewChild:{flex:5,backgroundColor:"green",
     width:"80%", 
     justifyContent:"center", 
     alignItems:"center"
    },
    alingView:{
      justifyContent: "center",
      alignItems:"center"
  
    }
  });
// se exportan las constantes
  export{styles, myStyle}
  