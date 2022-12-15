import React, {Component} from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = { 
      nome: 'Matheus', 
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this)
    this.diminuiu = this.diminuiu.bind(this)
  }

  aumentar(){
    let state = this.state;
    state.contador +=1
    state.nome = 'Guilherme'
    this.setState(state)
  }
  diminuiu(){
    let state = this.state;
    if(state.contador === 0){
      alert('chegou a 0')
      return
    }
    state.contador -=1
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h1>Contador</h1>
        <h3>
          <button onClick={this.diminuiu}>-</button>
            {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    )
  }
}

export default App;