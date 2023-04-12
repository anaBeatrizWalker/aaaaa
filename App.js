import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [resultado, setResultado] = useState(0);

  function multiplicar(){
    setResultado(n1 * n2);
  }

  function limparCampos(){
    setN1('');
    setN2('');
    setResultado(0);
  }

  return (
    <View style={{alignItems: 'center', marginTop: 25}}>
      <Text  style={{fontWeight: 'bold', fontSize: 20}}>Multiplicação de Dois Números</Text>

      <Image style={{width: 150, height: 150, margin: 20}} source={require('./img/multiplicacao.png')}></Image>

      <TextInput style={{marginTop: 10, width: 200, padding: 10, backgroundColor: '#DCDCDC', borderRadius: 5}} placeholder="Digite um número: " onChangeText={(n) => setN1(n)} value={n1}></TextInput>

      <TextInput style={{margin: 10, width: 200, padding: 10, backgroundColor: '#DCDCDC', borderRadius: 5}}  placeholder="Digite mais um número: " onChangeText={(n) => setN2(n)} value={n2}></TextInput>

      <Button title='Calcular' onPress={multiplicar}></Button>

      <Button title='Limpar' onPress={limparCampos}></Button>

      <Text style={{margin: 15, fontWeight: 'bold', fontSize: 24}}>Resultado: {resultado}</Text>
    </View>
  );
}