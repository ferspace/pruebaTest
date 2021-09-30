import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import axios from 'axios';


const BasicForm =()=>{
  const [comment, setComment] = useState("")

  const onChange=(e)=>{
    setComment(e.target.value)
  }

  const onFinish=()=>{
    axios.post('http://localhost:5000/api/comments', {
      data: comment
    })
    .then(function (response) {
      console.log(response, "post node");
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  console.log(comment, "comentarios")
  return(
    <div style={{marginTop:15, padding:10,boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)", borderRadius:7}}>
      <div>
        Comentarios
      </div>
      <Input showCount maxLength={100} row={4} onChange={(e)=>onChange(e)} />
      <Button type="primary" onClick={()=>onFinish()} block style={{marginTop:15}}>
        Enviar
      </Button>
    </div>
  )
}

export default BasicForm;
