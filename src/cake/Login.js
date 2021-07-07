import React from 'react'
import { render } from 'react-dom'

class LoginPage extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }
    
     login=function(){
         this.setState({
            email:"dinesh",
            password:"dinnu"
         })
        setTimeout(()=>{
            console.log("hello Dinnu")
        },3000)
    }

     handleEmail=function (e){
        // this.setState({
        //     email:e.target.value
        // })
    }
     handlePassword=function (e){
        // this.setState({
        //     password:e.target.value
        // })
        
    
    }
   render(){
    return (
      <div >
        <img height="200" width="500" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN" alt="Logo" />
        <h1>LOGIN PAGE</h1>
        <input onChange={this.handleEmail} type="email" />
        <input onChange={this.handlePassword} type="email" />
        <button onClick={this.login}>sumbit</button>
      </div>
    );
   }
  }
  
  export default LoginPage;