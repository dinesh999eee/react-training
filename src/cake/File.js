import React from 'react'
import axios from 'axios';

var upload=function(e){  
    console.log("file is uploading",e.target.files[0])
    let formdata=new FormData()
    formdata.append('file',e.target.files[0])
    axios({
        method:'post',
        data:FormData,
        url:'https://apifromashu.herokuapp.com/api/upload',
        // headers:{
        //     authtoken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmVzaDk5OWVlZUBnbWFpbC5jb20iLCJpYXQiOjE2MjU4MDAzMzl9.XMUOvRJP9fBOVKEkV_oKpl_O6e8ruDZnOAQ4G-P1Wp0"
        // }
    }).then((response)=>{
        console.log("response from login api is",response)
    },(error)=>{
        console.log("error from login api is",error)
    })

}

var handleSubmission=function(){  
    console.log("file is uploading")
}

//formData.append("file", this.state.file, this.state.file.name);
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmVzaDk5OWVlZUBnbWFpbC5jb20iLCJpYXQiOjE2MjU4MDAzMzl9.XMUOvRJP9fBOVKEkV_oKpl_O6e8ruDZnOAQ4G-P1Wp0"
//axios({
//     method:'post',
//     data:FormData,

// })
export default function File(){
    console.log("this is file")
    return (
        <div>  
         <h3>this is file.js</h3>
         <input type="file" name="file" onChange={upload} />
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
        </div>
      );
}