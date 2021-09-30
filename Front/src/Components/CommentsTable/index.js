import React, { useState, useEffect } from "react";
import Tables from '../Tables'
import Chart from "../Chart";
import axios from 'axios'
import { Row, Col, Input } from 'antd';

const CommentsTable =()=>{
  const [comment, setComment] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/api/comments')
        .then((response) => {
          console.log(response.data, "comentarios")
          var parsedata=[]
          response.data.map((item)=>{
            parsedata.push(item.id)
            parsedata.push(item.firstName)
            parsedata.push(item.comment)
          })
          setComment(parsedata)
    })
  })

  const data = [
    comment
   ];

  console.log(comment, "bitcoin")

  return(
    <Tables
        columns={["id", "nombre", "Comment",
      ]} tableData={data} title={"Ultimos comentarios"}/>
  )
}

export default CommentsTable;