import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
   BrowserRouter,
   Routes,
   Route,
   Link
} from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route exact path ='/detail' element={<Detail/>}></Route>
          <Route exact path ='/' element={<Home/>}></Route>          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

