import {useEffect, useState} from 'react'
import api from '../../services/api'

// URL da API: https://api.themoviedb.org/3/movie/550?api_key=41197650cee4955634f34c9b6bd01ca5


function Home(){
    const[filmes, setFilmes] = useState([])


    useEffect(()=>{
        async function loadfilmes(){
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key: "41197650cee4955634f34c9b6bd01ca5",
                    language: "pt-BR",
                    page: 1,
                }
            })
            console.log(response)
        }

        loadfilmes()
    },[])

    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home;