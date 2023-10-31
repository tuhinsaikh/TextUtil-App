import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About"
import React, {useState} from 'react'
import {
  BrouserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter

} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert =  (type,message) =>{
      setAlert({
        type:type,
        message:message
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background = "grey";
      showAlert("success","dark mood has beed enabled");
    } 
    else {
      setMode('light');
      document.body.style.background = "white";
      showAlert("success","light mood has been enabled");
    }
  }

  return (
    <>
    
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route exect path="/About" element={<About mode={mode}/>}/> 
          <Route exect path="/" element= {
            <div className='container my-3'>
              <TextForm heading="Enter your text" mode={mode} showAlert={showAlert} />
            </div>
            }
          />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
