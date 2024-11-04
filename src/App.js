import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  
  const showAlert = (message, type)=>{
    setAlert({
    message: message,
    type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#010310';
      showAlert("Enabled Dark Mode","success");
    } else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled Light Mode","success");
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>,
    },
    {
      path: "/about",
      element: <About mode={mode}/>
    }
  ])
    return(
     
  <>

<Navbar title="Textility" about="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">  

    </div>
    <RouterProvider router={router} />
      
      </>
   
    );
  }
export default App;
  
