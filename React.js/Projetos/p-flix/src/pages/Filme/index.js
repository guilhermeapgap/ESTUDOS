import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import './filme.css'
import api from '../../services/api'
import {toast} from 'react-toastify'

function Filme(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "41197650cee4955634f34c9b6bd01ca5",
                    language: "pt-BR",     
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
                console.log('filme não encontrado')
                navigate('/', {replace: true})
                return;
            })
        }
        loadFilme()


        return() =>{
            console.log('componente foi desmontado');
        }
    },[navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeflix')
        let filmesSalvos = JSON.parse(minhaLista) || []
        const hasfilmes = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === filme.id)

        if(hasfilmes){
            toast.warn('esse filme ja esta na lista ')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
        toast.success('filme salvo com sucesso')
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}> Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;