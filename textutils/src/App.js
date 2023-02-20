import logo from './logo.svg';
import Newnavbar from './components/Newnavbar';
import TextForm from './components/TextForm';
import Login from './components/Login'
import About from './components/About';
import React ,{useState} from 'react';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Main from './components/Main';
import Log from './components/Log';
import User from './components/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode ,setMode ]=useState('light');
  const [alert ,setAlert ]=useState(null);
  
  const showAlert=(message, type)=>{
   setAlert({
     msg:message,
     type:type
   })
   setTimeout (()=>{
    setAlert(null);
   }
   ,1000);
  }
  const toggleMode =()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.Color ='#FFFFFF';
    document.body.style.backgroundColor ='#001933';
    showAlert("Dark mode has been enabled","success");
    setInterval(()=>{
      document.title=' Home';
    },1000);
    setInterval(()=>{
    document.title='Infinte scrolling';
  },5000);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enabled","success");
    setInterval(()=>{
      document.title='Infinite Scroller';
    },1000);
    setInterval(()=>{
      document.title='Scroll now';
    },5000);
  }
}
  return (
    <>
    <Router>
    <Newnavbar title ="TextUtils" mode={mode} toggleMode={toggleMode} about= "About" />
    <Alert alert={alert}/>
     <div className="container my-3">
  
   <Switch>
   <Route exact path="/main">
            <User/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
  <Route exact path="/">
          <Login/>
          </Route>
        </Switch>
  </div> 
</Router>
  
    </>
  );
}

export default App;
