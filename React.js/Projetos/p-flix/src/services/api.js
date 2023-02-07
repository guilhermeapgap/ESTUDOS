
// Base da URL: https://api.themoviedb.org/3/

//https://api.themoviedb.org/3/movie/550?api_key=41197650cee4955634f34c9b6bd01ca5

import axios from 'axios'
 


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'

});

export default api