import './App.css';
import Login from './components/features/login/Login';
import { NavBar } from './components/features/navbar/NavBar';
import { BrowserRouter,Routes , Route, Navigate } from "react-router-dom";
import HomePage from './components/features/homePage/HomePage';
import Detail from './components/features/Details/Details';
import {Provider} from 'react-redux';
import store from './store';


 


function App() {
  return (
      
    <Provider store={store}>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route exact path ="/" element={<Login/>}/>
            <Route exact path ="/home" element={<HomePage/>}/>
            {/* <Route path='/detail/:id'>
                  <Detail />
            </Route> */}
          </Routes>


         
        </BrowserRouter>
    </Provider>
  );
}

export default App;
