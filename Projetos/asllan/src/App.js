import logo from './logo.svg';
import './App.css';

//components
import Footer from './components/footer/index';
import Main from './components/main';

//bootstrap
import CollapsibleExample from './components/bootstrap/navbar';

function App() {
  return (
    <div className="App">
      <CollapsibleExample/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
