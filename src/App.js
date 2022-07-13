// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const [bodyColor, setBodyColor] = useState('white')
  const [btnColor1, setbtnColor1] = useState('primary')
  const [btnColor2, setbtnColor2] = useState('primary')
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState("Dark Mode")
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setModeText("Dark Mode")
      showAlert("Light mode enabled", "sucess")
      document.body.style.backgroundColor = 'white';
    }
    else {
      setModeText("Light Mode")
      setMode('dark');
      showAlert("Dark mode enabled", "sucess")
      document.body.style.backgroundColor = 'rgb(36 17 89)';
    }
  }
  const changeColor1 = () => {
    // if (mode === 'dark') {
      if (bodyColor === 'green') {
        setBodyColor('blue');
        setbtnColor1('success');
        document.body.style.backgroundColor = bodyColor;

      }
      else {
        setBodyColor('green');
        setbtnColor1('primary');
        document.body.style.backgroundColor = bodyColor;
      }
    // }

  }
  
  const changeColor2 = () => {
    // if (mode === 'dark') {
      if (bodyColor === 'blue' || 'green' || 'white') {
        setBodyColor('black');
        setbtnColor2('primary');
        document.body.style.backgroundColor = bodyColor;

      }
      if(bodyColor==='black'){
        setBodyColor('blue');
        setbtnColor2('dark');
        document.body.style.backgroundColor = bodyColor;
      }
    // }

  }
  return (
    <>
      <BrowserRouter>
      <Navbar tittle="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} btnColor1={btnColor1} btnColor2={btnColor2} changeColor1={changeColor1} changeColor2={changeColor2} modeText={modeText} />
      <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Try TextUtils - Word counter | character counter | Uc to lc" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </BrowserRouter>
      {/* <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} /> */}

    </>
  );
}
export default App;


