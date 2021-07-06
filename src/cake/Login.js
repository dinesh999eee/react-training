import React from 'react'

function LoginPage() {
    var user ={}
    var Login=function(){
        console.log("use has entered")
    }
    var handleEmail=function (e){
        user.email=e.target.value
    }
    var handlePassword=function (e){
        user.password=e.target.value
    }
    setTimeout(()=>{
        
    })
    return (
      <div >
        <img height="200" width="500" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN" alt="Logo" />;
        <h1>LOGIN PAGE</h1>
        <input onChange={handleEmail} type="email" />
        <input onChange={handleEmail} type="email" />
        <button onClick={Login}>sumbit</button>
      </div>
    );
  }
  
  export default LoginPage;