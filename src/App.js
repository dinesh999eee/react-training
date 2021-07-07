//import logo from './logo.svg';
import './App.css';
//import Navbar from './Navbar';
import LoginPage from './cake/Login';
import React from 'react'; 
import ReactDOM from 'react-dom';
import Loginfunction from './cake/Loginfunction';
import Search from './cake/Search';
import Carousalview from '../src/cake/Corousel'
import cakedata from './cake/cakedata';


const style = { flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center' }
function App() {
  return (
    <div style={style}>
      <h1>DINESH CAKES</h1>
      {/* <Navbar/> */}
       {/* <LoginPage/> */}
       {/* <Loginfunction/> */}
       <Carousalview/>
       <Search/>
     
      
    </div>
  );
}

export default App;
