//import logo from './logo.svg';
import './App.css';
//import Navbar from './Navbar';
import Dinnu from './cake/Dinnu';
import LoginPage from './cake/Login';
import React from 'react'; 
import ReactDOM from 'react-dom';
import Loginfunction from './cake/Loginfunction';
import Search from './cake/Search';
import Carousalview from '../src/cake/Corousel';
import cakedata from './cake/cakedata';
import Signup from './cake/Signup';
import Home from './cake/Home';
import File from './cake/File';
import {BrowserRouter as Router,Route,Redirect,Switch,useParams,} from "react-router-dom"
import {makeStyles} from '@material-ui/core/styles'
import { Grid,Paper } from '@material-ui/core';
import Loader from "react-loader-spinner";


const style = { flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center' }
function App() {

  const OnButtonclicked=()=>{
      console.log("welcome ra dinnu")
    }
    
  return (
    // <div>
    //   <Grid></Grid>
    // </div>

    // <div>
    //   <button onClick={OnButtonclicked}>signin</button>
    // </div>

    <div>
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
      />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Loginfunction} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/search' exact component={Search} />
          {/* <Route path='/addcake' exact component={Addcake} /> */}
          <Route path='/**'><Redirect to="/"></Redirect></Route>
        </Switch>
      </Router>
    </div>

    // <div style={style}>
    //   <File/>
    //   <h1>DINESH CAKES</h1>
    //    {/* <Navbar/> */}
    //    {/* <LoginPage/> */}
    //    <Signup/>
    //   <Loginfunction/> 
    //    <Carousalview/>
    //    <Search/>
    // </div>
  );
}

export default App;
