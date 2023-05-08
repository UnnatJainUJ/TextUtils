import './Appa.css';
// import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React  from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Link,
// } from "react-router-dom";
function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= () => {
    if(mode === 'light')
    {
      setmode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" , "success");
      document.title = "TextUtils - Dark"
    }
      else{
        setmode('light');

        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled" , "success");
        document.title = "TextUtils - Light"

      }
  }
  return (
   <>

  <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
  <Alert alert={alert}/>

  {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </BrowserRouter> */}

  <div className="container">

  <Textform showAlert={showAlert} heading ="Enter the text to analyze" mode={mode}/>
 

  </div>
  
   </>
  );
} 

export default App;
