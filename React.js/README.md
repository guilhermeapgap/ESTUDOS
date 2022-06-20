# Aula 28 

## para criar um novo projeto
>npx create-react-app <nome>
>
> para da iniciar o projeto basta da um cd para a pasta destino <nome>
>
>npm start

# Aula 29 

Quando criamos um projeto em react.js são criadas varias pastas porem no momento a que vamos modificar sera src/ 

* esse e o app.js, aqui que nos criamos as interfaces 
````js
export default function App(){
  return(
    <div>
      <h1>Bem Vindo ao sistema</h1>
    </div>
  )
}
````

>Posso apagar quase todos os arquivos de src/ deixamos normalmente apenas app.js e index.js
>
>obs: se apagar todos os outros preciso tirar o export desses arquivos no meu index.js


**Importante, o nome do componente sempre tem que esta com a primeira letra maiuscula**
>ex: <App/> ou Function Sobre(){} etc...

# **estudar sobre props aulas 31,32**

# Reforçando componentes
Vamos lá relembrar quais são os Tipos de Componentes?

Como você viu nas aulas no ReactJS nós temos 2 principais tipos de componentes: Componentes com Estados e Componentes sem Estados

Também são conhecidos por (StateLess e StateFull);

Os dois componentes tem as mesmas características, já citadas anteriomente, com a diferença que: um componente com estados possui atributos que poderão ter o seu valor alterado, e a cada alteração, impactarão diretamente na renderização do componente.

Já, os componentes sem estados, são componentes mais simples, que quase sempre só servem para renderizar uma responsabilidade pequena de nossa página.

Outra diferença muito importante é a forma como estes componentes são escritos.

Um componente com estados quase sempre vai ser representado, de fato, por uma classe, por exemplo:

````js
import React, { Component } from "react";
 
class App extends Component {
  render() {
    return(
    <h1>Olá ReactJS</h1>
    );
  }
}
````
 
export default App;
Note que para este componente nós temos obrigatoriamente que utilizar o método render() pois ele será o responsável por colocar e recolocar as informações na tela.

Mas, EXATAMENTE o mesmo componente, poderia ser escrito da seguinte forma:


````js
import React from "react";
 
const App = () => {
  return( 
    <h1>Olá ReactJS</h1>
  );
};
 
export default App;
````