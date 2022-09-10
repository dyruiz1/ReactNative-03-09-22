

import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import  Header  from './components/Header';
import {styles} from './assets/styles/Mystyles'
export default function App() {

// hooks para estados con use State

const [valor1, setValor1] = useState ('');
const [valor2, setValor2] = useState ('');
const [resultado, setResultado] = useState ('');

//para el metodo mostrar

let mostrar = ()=>{
  alert(`el valor 1 es ${valor1}`)
}

const limpiar = ()=>{
  setValor1('');
  setValor2('');
  setResultado(0);
}

// creamos a sumar como una funcion anonima
let sumar = function(){
  setResultado(parseFloat (valor1) + parseFloat(valor2));
}

// crear funcion de calcular

let calcular = (oper)=>{
  let mresult = 0;
  switch(oper){
    case "+":
    mresult = parseFloat(valor1) + parseFloat(valor2);
      break;
    case "-":
    mresult = parseFloat(valor1) - parseFloat(valor2);
      break
    case "*":
    mresult = parseFloat(valor1) * parseFloat(valor2);
      break
    case "/":
    mresult = parseFloat(valor1) / parseFloat(valor2);
      break
    case '^':
    mresult= Math.pow(parseFloat(valor1),parseFloat(valor2))
      break;
    case '√':
    mresult= Math.sqrt(parseFloat(valor1),parseFloat(valor2))
      break; 
  }
  setResultado(mresult)
}
  return (
    <View style={[styles.container,styles.alingView]}>
      <Header src="calc1.jpg"></Header>
      <View style={[styles.viewChild,{marginTop:10}]}>

        <Image
          source={{uri: "https://previews.123rf.com/images/kongvector/kongvector1711/kongvector171100451/88969237-dibujos-animados-de-graduaci%C3%B3n-linda-calculadora-personaje.jpg"}}
          style={{width:100, height:100}}
        />
        <Text>Valor 1</Text>
        <TextInput
          placeholder='Ingrese Valor 1'
          style={{borderWidth:1, borderStyle:"solid", padding:5, textAlign:"center"}}
          onChangeText= {valor1 => setValor1(valor1)}
          value = {valor1}
        />

        <Text>Valor 1</Text>
        <TextInput
          placeholder='Ingrese Valor 2'
          style={{borderWidth:1, borderStyle:"solid", padding:5, textAlign:"center"}}
          onChangeText= {valor2 => setValor2(valor2)}
          value = {valor2}
        />
        <Text>Resultado</Text>
        <Text>{resultado}</Text>
        <Text>{'\n'}</Text>
        {/* <Button
          title = "sumar"
          onPress = {sumar} 
        /> 
        <Text>{'\n'}</Text>
        <Button
          title='limpiar'
          onPress={limpiar}
        />                 */}

        {/* boton mas configurable */}
      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <TouchableOpacity
          style={{backgroundColor: "gray", padding: 10, borderRadius:10}}
          onPress={()=>calcular('+')}
        >
        <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>+</Text>       
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: "blue", padding: 10, borderRadius:10, marginLeft:10}}
          onPress={()=>calcular('-')}
        >
        <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>-</Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: "black", padding: 10, borderRadius:10, marginLeft:10}}
          onPress={()=>calcular('*')}
        >
        <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>*</Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: "gray", padding: 10, borderRadius:10, marginLeft:10}}
          onPress={()=>calcular('/')}
        >
        <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>/</Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: "black", padding: 10, borderRadius:10, marginLeft:10}}
          onPress={()=>calcular('^')}
        >
        <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>^</Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: "black", padding: 10, borderRadius:10, marginLeft:10}}
          onPress={()=>calcular('√')}
        >
        <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>√</Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: "black", padding: 10, borderRadius:10, marginLeft:10}}
          onPress={limpiar}
        >
        <Text style={{color:'white', fontWeight:'bold', borderRadius:'15'}}>C</Text>       
        </TouchableOpacity>


        
      </View>


      </View>
    </View>
  );
}

