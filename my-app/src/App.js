import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode, setNewMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode= ()=>{
    if(mode==='light'){
      setNewMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("  Dark mode enabled", "success");
      document.title= 'TextUtils - Dark Mode'
    }
    else{
      setNewMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("  Light mode enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route path="/About Us" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Register" mode={mode} showAlert={showAlert}/>}>
            </Route>
          </Routes>      
      </div>
    </Router>
  </>
  );
}

export default App;
