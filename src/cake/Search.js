import { useState,useEffect } from "react";
import React from "react";
import cakedata from "./cakedata";

export default function Search(){

    const [textInput,setTextInput]=useState(0)
    const [cakes,setCakes]=useState(cakedata)

    var search=function(){  
        console.log("hi")
        cakeArray=cakedata.filter((item)=>{
            return item.name
        })
        setCakes(cakeArray)
    }
    var handlechange=function(){
        console.log("dinnu")
    }
    let cakeArray=cakedata
    useEffect(()=>{
        console.log("i came to useEffect")
    },[])
    return(
        <div>
             <input onChange={handlechange} name="" width="500" placeholder="search your cake"/>
            <button onClick={search}>Search</button>
            {
                cakedata.map((item)=>{
                   return(
                     <div>
                    <img src={item.image} alt="Third slide" width="150" height="150"></img>
                    <p>{item.name}</p>
                    </div>
                   )
                })
            }

            
           
        </div>
    )

}