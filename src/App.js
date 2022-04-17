

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
//import About from './components/About';

import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
 
  Route,
  Routes
} from "react-router-dom";








function App() {

const [mode, setmode] = useState('light')
const [alert, setalert] = useState(null);
const showAlert = (message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
    
  }, 1500);

}

const toggleMode =()=>{
  if(mode ==='dark'){
  setmode('light')
  document.body.style.backgroundColor='white'
showAlert("Light mode has enabled","success")}
else{
  setmode('dark')
  document.body.style.backgroundColor='#063768'
  showAlert("Dark mode has enabled","success")
}
}
  return (
 <>
  
<Router>
  
<Navbar mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>
<div className='container my-3'>
<Routes>
        
  <Route exact path='/about' element={<About/>} /> 
{<Route exact path='/' element={<Textform showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>} />}
  
 
{/*<Textform showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>*/}
          
        </Routes>
        
        </div>
       </Router>

</>


);
}

export default App;


        
          
         
         
          
          
            
          


            
         



