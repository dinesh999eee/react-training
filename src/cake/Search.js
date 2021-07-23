import { useState,useEffect } from "react";
import React from "react";
import cakedata from "./cakedata";
import axios from 'axios'
import Card from "react-bootstrap/Card";
import {makeStyles} from '@material-ui/core/styles';
import { Grid,Paper } from '@material-ui/core';

export default function Search(props){
    console.log("search props isssssssss")
    console.log(props)

    var [textInput,setTextInput]=useState("")
    const [cakes,setCakes]=useState(cakedata)

    var search=function(){  
        var a=textInput
        var cakeArray=cakes.filter((textInput)=>{
            return textInput.name===a
        })
        setCakes(cakeArray)
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
            
            
            <Grid container spacing={3}>
                
            {
                cakes.map((item)=>{
                   return(
                    <Grid item xs={3}>
                    <Paper style={{}}>
                        <Card >
                            <Card.Img variant="top" src={item.image} style={{width:275,height:170 }} />
                            <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                                <Card.Title style={{color:'purple'}}>{item.name}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                                <button variant="primary" style={{color:"blue"}}>{`buy for ${item.price}/-`}</button>
                            </Card.Body>
                        </Card>
                        {/* <img src={item.image} alt="Third slide" width="150" height="150"></img>
                        <p>{item.name}</p> */}
                    </Paper>
                    </Grid>
                   )
                })
            }
            
            </Grid>
            
           
        </div>
    )

}