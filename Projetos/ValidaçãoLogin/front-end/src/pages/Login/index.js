import React, { useState } from 'react';
import styles from "./login.module.scss"

import { Link } from 'react-router-dom';

import { toast } from "react-toastify"



function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e) => {
    
    e.preventDefault();

    try {

      // validação para saber se todo os capos estão preechidos
      if(email === '' || password === ''){
        toast.warning('Preencha todos os dados')
        return;
      }
      
      // Faz a requisição POST para o backend com as credenciais do usuário
      const response = await fetch('http://localhost:3333/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Se a requisição for bem-sucedida, redireciona para a página desejada
      if (response.ok) {
        toast.success('Tudo certo')
        window.location.href = '/Home'; // Substitua "/home" pela rota desejada
      }else{
        toast.error('Preencha os dados corretamente')
      }


    } catch (error) {
      // Se ocorrer um erro, exibe uma mensagem de erro
      console.error('Erro durante o login:', error);
      alert('Ocorreu um erro durante o login. Por favor, tente novamente.');
    }
  };

  return (
    <div className={styles.container}>
      <h1><strong>E - </strong>Commerce</h1>
      <form onSubmit={handleFormSubmit} className={styles.container_form}>

          <input
            type="email"
            value={email}
            placeholder='Email:'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            value={password}
            placeholder='Senha:'
            onChange={(e) => setPassword(e.target.value)}
          />


        <button type="submit">Entrar</button>

        <Link to="/signup">
        <a className={styles.text}>Não possui ums conta? Cadastre-se</a>         
        </Link>

      </form>
    </div>
  );
}

export default Login;
