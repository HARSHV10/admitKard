import React from 'react';
import { useState } from 'react'
import server from '../../../server';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const handleFileChange=(e)=>{
    setFile(e.target.files[0])
  }
  const handleFileUpload= async()=>{
    if(!file) return ;
      // const formData=new FormData();
      console.log("okay to the system")
      const formData = new FormData();
      formData.append('file', file);

      const data_from_server = await server.post("uploadFile",formData,{
        withCredentials: true,
      }).then((d)=>{
        console.log("post",d)
      }).catch((e)=>{
        console.log(e);
      });
      console.log(data_from_server);
      console.log(file)
  }

  return (
    <div className="App">
    <div className='navBar'>
    add from excel
    </div>
    <div className='data'>
    <h2>Add candidates to database</h2>
    <div className='fileuploader'>
    <input type="file" accept=".txt" onChange={handleFileChange} />
    <button onClick={handleFileUpload}>Upload</button>
    </div>
    </div>
    </div>
  )
}


