import React, { useState } from 'react';
import server from '../../../server';

const loginUser = async (user,password)=>{
    const data = await  server.post('/login',{info:{
        name:user,
        pwd:password,
    }},{
        withCredentials: true,
      })    
    console.log(data)
}

export default function login(){

    const [user,setUser]=useState();
    const [password,setpwd]=useState();
    return(
        <div>
        <input type='text' onChange={(e)=>{
            setUser(e.target.value)
        }}></input>
        <input type='text' onChange={(e)=>{
            setpwd(e.target.value)
        }}></input>
        <button onClick={()=>{
            loginUser(user,password);
        }}>submit</button>
        </div>
    )
}