import { useState,useEffect } from "react";
import axios from "axios";

function Signup(){
    var[text,setText]=useState({})
    var[errorMessage,setMessage]=useState()
    let user={}
    useEffect(()=>{
        //alert("Component Mounted")
    },[])

    var login = function(){
        console.log("user has Entered",user)
        let apiurl='https://apifromashu.herokuapp.com/api/register'
        axios({
            url:apiurl,
            method:"post",
            data:user
            //data:user
        }).then((response)=>{
            console.log("response from login api is",response)
        },(error)=>{
            console.log("error from login api is",error)
        })
    }
    var handleEmail=function(e){
        user.email=e.target.value
        // setText({...user,email:user.email})
        // console.log(text)
    }
    var handlePassword=function(e){
        user.password=e.target.value
        // setText({...user,password:user.password})
        // console.log(text)
    }
    var search=function(){  
        console.log("came to search function")
    }
    var handleName=function(e){
        user.name=e.target.value
    }
    const style = { flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' }

    return(
        <div style={style}>    
            <h2>signup</h2>
            <input onChange={handleName} type="name" name="" placeholder="enter name"/>
            <input onChange={handleEmail} type="email" name="" placeholder="enter email"/>
            <input onChange={handlePassword} type="password" name="" placeholder="enter password"/>  
            <button onClick={login}>Login</button>
        </div>
    )

}
export default Signup