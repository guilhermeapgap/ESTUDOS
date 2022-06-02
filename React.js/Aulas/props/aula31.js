

const BemVindo = (props) =>{
  return(
    <div>
      <h1>Bem-Vindo {props.nome}</h1>
      <h2>tenho {props.idade} anos</h2>
    </div>
  )
}


export default function App(){
  return(
    <div>
      <h1>Fundamentos react</h1>
      <div>
        <BemVindo nome="guilherme" idade="20"/>
      </div>
    </div>
  )
}
