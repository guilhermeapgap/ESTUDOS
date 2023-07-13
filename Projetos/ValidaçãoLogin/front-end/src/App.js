import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

//tostify 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
        <ToastContainer autoClose={3000}/>
    </Router>
    </div>
  );
}

export default App;
