import { useState,useEffect } from "react";
import React from "react";
import cakedata from "./cakedata";
import axios from 'axios'
import Card from "react-bootstrap/Card";

export default function Cakelist(cakename){

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

    return(
          <div>
              
         </div>   
    )
}