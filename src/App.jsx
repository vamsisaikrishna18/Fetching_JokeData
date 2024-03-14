import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import JokesComponent from './JokesComponent';
import Login from './Login';
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<JokesComponent/>}/>
    </Routes>
   </BrowserRouter>
    
  )
}

export default App