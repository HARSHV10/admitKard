import React, { useState } from 'react';
import server from '../../../server';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const data =async()=>{
    const user_name = await server.get('/auth_check',{
        withCredentials: true,
      }).then((d)=>{
        return d;
    })
    return user_name

}

export default function Navbar(){
    const navigateTo=useNavigate();
    const [name,setName]=useState();
    useEffect( () => {
      const user=async ()=>{

          const data =await server.get('/auth_check',{
              withCredentials: true,
            }).then((d)=>{
                console.log(d.data);
                setName(d.data);
            }).catch((e)=>{
                console.log(e)
            })
            
        }
        user()
      return () => {
        console.log("Hello")
      }
    }, [])
    
    return (
        <div>
        {name? <h1>{name}</h1>: <h1>login to upload the file </h1>}
        <button onClick={async ()=>{
            const logout=await server.get('/logout',{
                withCredentials: true,
              }).then((d)=>{
                return d;
            })
        }}>logout</button>

        <button onClick={()=>{
            navigateTo('/login')
        }}>login</button>
        </div>
    )
}