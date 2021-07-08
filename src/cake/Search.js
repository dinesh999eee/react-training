import { useState,useEffect } from "react";
import React from "react";
import cakedata from "./cakedata";
import axios from 'axios'
import Card from "react-bootstrap/Card";




export default function Search(){

    var [textInput,setTextInput]=useState("")
    const [cakes,setCakes]=useState(cakedata)

    var search=function(){  
        console.log("final step is:",textInput)
        var a=textInput
        console.log("dinnnnnnnnnnnnnnnu is", a)
        var cakeArray=cakes.filter((textInput)=>{
            return textInput.name===a
        })
        setCakes(cakeArray)
        console.log("changed cakes are",cakes)
    }
    var handlechange=function(e){
        console.log("letter is",e.target.value)
        setTextInput(e.target.value)
        console.log("setTextInput is:",e.target.value)
    }
    let cakeArray=cakedata
    useEffect(()=>{
        console.log("i came to useEffect")
    },[])
  

    return(
        <div style={{paddingLeft:20}}>
            <input onChange={handlechange} name="" width="500" placeholder="search your cake"/>
            <button onClick={search}>Search</button>
            {
                cakes.map((item)=>{
                    console.log(item)
                   return(
                    <div style={{}}>
                        <Card style={{paddingTop:30}}>
                            <Card.Img variant="top" src={item.image} style={{width:150,height:150 }} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                                <button variant="primary" style={{color:"blue"}}>{`buy for ${item.price}/-`}</button>
                            </Card.Body>
                        </Card>




                        {/* <img src={item.image} alt="Third slide" width="150" height="150"></img>
                        <p>{item.name}</p> */}
                    </div>
                   )
                })
            }
        </div>
    )

}