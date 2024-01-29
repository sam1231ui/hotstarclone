import './App.css';
import Login from './components/features/login/Login';
import { NavBar } from './components/features/navbar/NavBar';
import { BrowserRouter,Routes , Route} from "react-router-dom";
import HomePage from './components/features/homePage/HomePage';
import { ToastContainer} from 'react-toastify';
import Detail from './components/features/Details/Details';



 


function App() {
  return (
      
        // route context and path
        <BrowserRouter>
        <ToastContainer/>
          <NavBar/>
          <Routes>
            <Route exact path ="/" element={<Login/>}/>
            <Route exact path ="/home" element={<HomePage/>}/>
            <Route path='/detail/:id' element={<Detail/>}/> 
          </Routes>
        </BrowserRouter>
  );
}

export default App;
