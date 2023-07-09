import axios from "axios";

const api = axios.create({   
    //baseURL:'http:://localhost:3333'

    //notebook
    baseURL:'http://192.168.100.97:3333'

    //desktop
    //baseURL:'http://192.168.100.121:3333'

})

export {api}