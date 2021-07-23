import React from 'react'
import Carousalview from './Corousel'
import Loginfunction from './Loginfunction'
import Search from './Search'
import Navbar  from './Navbar'

export default function Home() {
    return (
        <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',color:'orange'}}>
                <h1> ONLINE CAKES SHOPPING </h1>
            </div>
           
            <Navbar/>
            <Carousalview/>
            <Loginfunction/>
            <Search/>
        </div>
    )
}