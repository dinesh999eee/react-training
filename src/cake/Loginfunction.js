import { useState,useEffect } from "react";

function Loginfunction(){

    var[errorMessage,setMessage]=useState()
    let user=[]
    useEffect(()=>{
        alert("Componnet Mounted")
    })

    var login = function(){
        console.log("user has Entered",user)
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
            <img height="200" width="500" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN" alt="Logo" />
{/*  
             <input onChange={handleEmail} type="email" name=""/>
            <input onChange={handlePassword} type="password" name=""/>  
            <button onClick={login}>Login</button>*/}
            <input  name="" width="500"/>
            <button onClick={search}>Search</button>

        </div>
    )

}
export default Loginfunction