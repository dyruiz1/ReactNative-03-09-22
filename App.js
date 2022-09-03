
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import Header from './components/Header';
import {useState} from 'react';

//function App() = ()=>{} otra forma de esportar el modulo y tendriamos que agregar el export default al final del codigo
//hooks para estados con usState

export default function App() {
  const [valor1,setValor1]=useState('')
  const [valor2,setValor2]=useState('')
  const [Resultado,setResultado]=useState('')
  let sumar = () => {
    setResultado(parseInt(valor1)+parseInt(valor2))
  }
  const limpiar = ()=>{
    setValor1('');
  }
  return (
    <View style={[styles.container,styles.alingView]}>
      <Header titulo="Banner" subtitulo="principal"/>
      <View style={[styles.viewchild,{marginTop:10},styles.alingView]}>
      <Text style={{fontSize:80}}>Valor 1</Text>
      <TextInput
        style={styles.textInputs}
        placeholder='Ingrese el valor 1'
        onChangeText={valor1 => setValor1(valor1)}
        value ={valor1}/>

        <Text style={{fontSize:80}}>Valor 2</Text>
        <TextInput
          style={styles.textInputs}
          placeholder='Ingrese el valor 1'
          onChangeText={valor2 => setValor2(valor2)}
          value ={valor2}
      />
      <Text style={{fontSize:80}}>Resultado</Text>
        <TextInput
          style={styles.textInputs}
         // placeholder='Ingrese el valor 1'
          onChangeText={Resultado => setResultado(Resultado)}
          value ={Resultado}
      />
      <Text>{'\n'}</Text>
      <Button
     // style={{fontSize:60}}
      title='Sumar'
      onPress={sumar}
      />
      <Text>{'\n'}</Text>
      <Button
     // style={{fontSize:60}}
     
      title='Limpiar'
      onPress={limpiar}
      />
      </View>
    </View>
  );
}

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
    fontSize:40,
    borderWidth:1,
    borderStyle:'solid',
    padding:5,
    textAlign:'center'
  }
});
