import {useEffect, useState} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'
// URL da API: https://api.themoviedb.org/3/movie/550?api_key=41197650cee4955634f34c9b6bd01ca5


function Home(){
    const[filmes, setFilmes] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadfilmes(){
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key: "41197650cee4955634f34c9b6bd01ca5",
                    language: "pt-BR",
                    page: 1,
                }
            })
           // console.log(response.data.results.slice(0,10))
           setFilmes(response.data.results.slice(0,10))
           setLoading(false)
        }

        loadfilmes()
    },[])

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;