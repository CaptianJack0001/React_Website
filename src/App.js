import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router, //name of router is browseRouter
  Switch, //import switch
  Route,
  Link
} from "react-router-dom";  //package



function App() {
  const [mode, setmode] = useState('light');//check whether dark mode enabled or not
  
const [alert, setAlert] = useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null);
  }
,1000 );
}
  const toggleMode=()=>{
    if(mode==='light')
    {
    setmode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
    document.title="TextEditor -Dark mode";
  }
    else 
    {
      document.body.style.backgroundColor='white';
    setmode('light');
    showAlert("Light mode has been enabled","success");
    document.title="text Editor -Light mode";
  }
  }

  return (   
    <>
    {/* <Router> */}
      <Navbar title="Navbar" about="about" mode={mode} toggleMode={toggleMode}/>
           <Alert alert={alert}/>   
      <div className="container my-3"  >
      {/* <Switch>
          <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route>
          <Route  exact path="/"> */}
          <Textform    showAlert={showAlert} heading ="Enter the text here to convert..."  mode ={mode} toggleMode={toggleMode} />
          {/* </Route> */}
         
        {/* </Switch> */}
        
        {/* <About/> */}

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
