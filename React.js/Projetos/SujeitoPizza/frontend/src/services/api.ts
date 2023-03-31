import axios,{AxiosError} from "axios";
import { parseCookies } from "nookies";

export function setupAPIClient(ctx= undefined){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        
    })
}