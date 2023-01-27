import api from '../utils/api'

import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import useFlashMessage from './useFlashMessage'


export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const history = useNavigate()
    const { setFlashMessage } = useFlashMessage()

    async function register(user){

        let msgText = 'Cadastro realizado com sucesso!'
        let msgType = 'sucess'
        try{
            const data = await api.post('users/register', user).then((response)=>{
                return response.data
            })
            console.log(data)
        }catch(error){

        msgText = error.response.data.message
        msgType = 'error'
        }


        setFlashMessage(msgText, msgType)
    }
    async function authUser(data) {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
    
        history.push('/')
      }
      function logout() {
        const msgText = 'Logout realizado com sucesso!'
        const msgType = 'success'
    
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        history.push('/login')
    
        setFlashMessage(msgText, msgType)
      }
    return ( register )
}