import React, { useState } from 'react';
import server from '../../../server';

const register_user = async (user,password)=>{
    const data = await  server.post('/register',{info:{
        name:user,
        pwd:password,
    }})    
    console.log(data)
}

export default function Register(){

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
            register_user(user,password);
        }}>submit</button>
        </div>
    )
}