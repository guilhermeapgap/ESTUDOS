import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Home from './pages/Home/home'
import Contacts from './pages/Contact/contact'
import About from './pages/About/about'

//componentes
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Whatsapp from './components/Whatsapp/whatsapp'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/>}/>
                <Route path='/contatos' element={ <Contacts/>}/>
                <Route path='/sobre' element={ <About/>}/>
            </Routes>
            <Footer/>
            <Whatsapp/>
        </BrowserRouter>
    )
}

export default RoutesApp;