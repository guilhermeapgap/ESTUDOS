//aula 32


const Equipe = (props) =>{
  return(
    <div>
      <Sobre nome={props.nome} cargo= {props.cargo} idade= {props.idade}/>
      <Social facebook= {props.facebook}/>
      <hr/>
    </div>

  )
}

const  Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou o {props.nome},</h2>
      <h2>tenho {props.idade} anos de idade,</h2>
      <h2>meu cargo e de {props.cargo}.</h2>

    </div>

  )
}

const Social = (props) => {
  return(
    <div>
      <a href={props.facebook}>Facebook </a> 
      <a>Instagram </a>
      <a>LinkedIn </a>
    </div>
  )
}

export default function App(){
  return(
    <div>
      <h1> Conheça nossa equipe:</h1>
      <Equipe nome="Guilherme" cargo="programador" idade="20" facebook="https://www.facebook.com"/>
      <Equipe nome="lucaas" cargo="ux" idade="28"/>
    </div>
    
  )
}




