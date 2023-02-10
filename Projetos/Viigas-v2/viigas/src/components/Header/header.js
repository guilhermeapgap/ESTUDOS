import './header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header className='header-container'>
            <Link className='logo' to="/"> Home</Link>
            <div>
                <Link to='/contatos'> Contatos</Link>
                <Link to='/sobre'> Sobre</Link>
            </div>
        </header>
    )
}

export default Header;

