import React from 'react';
import 'antd/dist/antd.css';
import CryptoTable from '../CryptoTable';
import Container from '../Container';
import Calendar from '../Calendar/index.js';
import CommentsTable from '../CommentsTable';
import BasicForm from '../BasicForm';

const Dashboard =()=>{
  return(
    <Container isLogin={false}>
        <Calendar/>
        <CryptoTable/>
        <BasicForm/>
        <CommentsTable/>
    </Container>
  )
}
export default Dashboard; 