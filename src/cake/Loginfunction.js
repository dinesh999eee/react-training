import { useState,useEffect } from "react";
import axios from "axios";

function Loginfunction(){

    var[errorMessage,setMessage]=useState()
    let user={}
    useEffect(()=>{
        //alert("Componnet Mounted")
    },[])

    var login = function(){
        console.log("user has Entered",user)
        let apiurl='https://apifromashu.herokuapp.com/api/login'
        axios({
            url:apiurl,
            method:"post",
            data:user
        }).then((response)=>{
            console.log("response from login api is",response)
        },(error)=>{
            console.log("error from login api is",error)
        })
    }
    var handleEmail=function(e){
        user.email=e.target.value
    }
    var handlePassword=function(e){
        user.password=e.target.value
    }
    var search=function(){  
        console.log("came to search function")
    }
    const style = { flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' }
    return(

        <div style={style}>    
            <h2>Login</h2>
            <input onChange={handleEmail} type="email" name="" placeholder="enter email"/>
            <input onChange={handlePassword} type="password" name="" placeholder="enter password"/>  
            <button onClick={login}>Login</button>
        </div>
    )

}
export default Loginfunction