
import './App.css';
import About from './components/About';
import Alert1 from './components/Alert1';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React ,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#021945";
      showAlert('warning','dark mode enabled')
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert('warning','light mode enabled')
      document.title = "TextUtils - light Mode"
    }
  }
  const showAlert = (type,content) =>{
    setAlert({
      type:  type ,
      content: content
    })

    setTimeout(() => {
      setAlert(null)
    },2000)
  }
  return (
    <>
      <Router>
        <Alert1 alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} /> { /*path do partial maching for complete and accurate maching is done by exact path*/} 
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}    

export default App;
