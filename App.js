import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      n1: '',
      n2: '',
      resultado: 0
    }
    this.multiplicar = this.multiplicar.bind(this);
    this.limparCampos = this.limparCampos.bind(this);
  }

  multiplicar(){
    this.setState({
      resultado: this.state.n1 * this.state.n2
    })
  }

  limparCampos(){
    this.setState({
      n1: '',
      n2: '',
      resultado: 0
    })
  }

  render(){
    return (
      <View style={{alignItems: 'center', marginTop: 25}}>
        <Text  style={{fontWeight: 'bold', fontSize: 20}}>Multiplicação de Dois Números</Text>

        <TextInput style={{marginTop: 10, width: 200, padding: 10, backgroundColor: '#DCDCDC', borderRadius: 5}} placeholder="Digite um número: " onChangeText={(n) => this.setState({n1: n})} value={this.state.n1}></TextInput>

        <TextInput style={{margin: 10, width: 200, padding: 10, backgroundColor: '#DCDCDC', borderRadius: 5}}  placeholder="Digite mais um número: " onChangeText={(n) => this.setState({n2: n})} value={this.state.n2}></TextInput>

        <Button title='Calcular' onPress={this.multiplicar}></Button>

        <Button title='Limpar' onPress={this.limparCampos}></Button>

        <Text style={{margin: 15, fontWeight: 'bold', fontSize: 24}}>Resultado: {this.state.resultado}</Text>
      </View>
    );
  }
}