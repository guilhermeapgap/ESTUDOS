import React from 'react'
import './whatsapp.css'
import {Link} from 'react-router-dom'
import whatsappLogo from '../../../public/img/whatsapp-logo-1.png'

function Whatsapp(){
    return(
        <div className='container-whatsapp'>
            <Link className='logo-whatsapp-fixed'> </Link>
            <img src={whatsappLogo }/>
        </div>
    )
}

export default Whatsapp;


//<div class="whatsapp-fixed">
//<a href="https://wa.link/cy3eof" target="_blank"><img src="img/whatsapp-logo-1.png" alt="whatsapp"></a>
//</div>