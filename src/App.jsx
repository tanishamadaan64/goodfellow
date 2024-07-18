import React from'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './about';
import {Route, Link} from 'react-router-dom';



function App(){
  return(
    <div className='App'>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </div>
  )
}
export default App;