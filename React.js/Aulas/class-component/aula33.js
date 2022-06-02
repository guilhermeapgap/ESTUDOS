
//class component

import React, {Component} from 'react'

class Equipe extends Component {
    render(){
        return(
            <div>
                <h2>O profrssor chama {this.props.nome}</h2>
                <h2>Ele ensina {this.props.cargo}</h2>
            </div>
        )
    }
} 

function App(){
    return(
      <div>
        <h1> Conheça nossa equipe:</h1>
        <Equipe nome="Matheus" cargo="Programação"/>
      </div>
      
    )
  }
  
export default App