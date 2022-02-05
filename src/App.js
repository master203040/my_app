
import './components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Series from "./components/views/Series.jsx";
import Navbar from './components/navegacion/Navbar';
import Action from './components/views/Action.jsx';
import Comedy from './components/views/Comedy.jsx';
import Home from './components/views/Home.jsx';


function App() {
  return (

    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/series" element={<Series/>}/>
            <Route path="/action" element={<Action/>}/> 
            <Route path ="/comedy" element ={<Comedy/>}/>
            <Route path ="/" element ={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </div>
    
    
  );
}


export default App;
