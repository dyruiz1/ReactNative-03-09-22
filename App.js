
import { StyleSheet, Text, View,TextInput,Button,Image,TouchableOpacity } from 'react-native';
import Header from './components/Header';
import {useState} from 'react';
import {styles} from './assets/styles/MyStyles.js'

//function App() = ()=>{} otra forma de esportar el modulo y tendriamos que agregar el export default al final del codigo
//hooks para estados con usState

export default function App() {
  const [valor1,setValor1]=useState('')
  const [valor2,setValor2]=useState('')
  const [Resultado,setResultado]=useState('')
  let sumar = () => {
    setResultado(parseInt(valor1)+parseInt(valor2))
  }
  let calcular = (oper)=>{
    let mresult=0;

    switch(oper){
      case '+':
        mresult= parseFloat(valor1)+parseFloat(valor2)
        break;
      case '-':
        mresult= parseFloat(valor1)-parseFloat(valor2)
        break;
      case '*':
        mresult= parseFloat(valor1)*parseFloat(valor2)
        break;
      case '/':
        mresult= parseFloat(valor1)/parseFloat(valor2)
        break;
      case '^':
        mresult= Math.pow(parseFloat(valor1),parseFloat(valor2))
        break;
      case '√':
        mresult= Math.sqrt(parseFloat(valor1),parseFloat(valor2))
        break; 

    }
    setResultado(mresult)
  }
  const limpiar = ()=>{
    setValor1('');
    setValor2('');
    setResultado(0);
  }
  return (
    <View style={[styles.container,styles.alingView]}>
      <Header src=".jpg"/>
      <View style={[styles.viewchild,{marginTop:10},styles.alingView]}>

      <Image
          source={{uri: "https://previews.123rf.com/images/kongvector/kongvector1711/kongvector171100451/88969237-dibujos-animados-de-graduaci%C3%B3n-linda-calculadora-personaje.jpg"}}
          style={{width:100, height:100}}
        />

      <Text style={{fontSize:30,marginTop:10}}>Valor 1</Text>
      <TextInput
        style={styles.textInputs}
        placeholder='Ingrese el valor 1'
        onChangeText={valor1 => setValor1(valor1)}
        value ={valor1}/>

        <Text style={{fontSize:30}}>Valor 2</Text>
        <TextInput
          style={styles.textInputs}
          placeholder='Ingrese el valor 1'
          onChangeText={valor2 => setValor2(valor2)}
          value ={valor2}
      />
      <Text style={{fontSize:30}}>Resultado</Text>
        <TextInput
          style={styles.textInputs}
         // placeholder='Ingrese el valor 1'
          onChangeText={Resultado => setResultado(Resultado)}
          value ={Resultado}
      />
      <Text>{'\n'}</Text>
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        <TouchableOpacity
        style={styles.Touchstile}
        onPress={()=>calcular('+')}>
          <Text style={styles.textoTouchable}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.Touchstile}
        onPress={()=>calcular('-')}>
          <Text style={styles.textoTouchable}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.Touchstile}
        onPress={()=>calcular('*')}>
          <Text style={styles.textoTouchable}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.Touchstile}
        onPress={()=>calcular('/')}>
          <Text style={styles.textoTouchable}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.Touchstile}
        onPress={()=>calcular('^')}>
          <Text style={styles.textoTouchable}>^</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.Touchstile}
        onPress={()=>calcular('√')}>
          <Text style={styles.textoTouchable}>√</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={styles.Touchstile}
        onPress={limpiar}>
          <Text style={styles.textoTouchable}>C</Text>
        </TouchableOpacity>


      </View>
      {/* <Button
     // style={{fontSize:60}}
      title='Sumar'
      onPress={sumar}
      />
      <Text>{'\n'}</Text>
      <Button
      style={{width:'100%'}}
      title='Limpiar'
      onPress={limpiar}
      /> */}
      </View>
    </View>
  );
}


