import React from "react";
import { useHistory } from "react-router";
import { GoogleLogin } from 'react-google-login';
import { Card } from 'antd'
import Container from "../Container";
import GoogleButton from 'react-google-button'
import Image from '../../19199228.jpg'
const Login =()=>{

  const history=useHistory();

  const { Meta } = Card;

  const responseGoogle = (response) => {
    console.log(response);
    history.push('/dashboard')
  }

  const errorGoogle = (response) => {
    console.log(response, "error");
  }

  return(
    <Container isLogin={true}>
      <div style={{display:"flex", justifyContent:'center', margin:15}}>
        <Card
          hoverable
          style={{ width: 300, height:400 ,boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)"}}
          cover={<img alt="" src={Image} />}
        >
          
        <GoogleLogin
          clientId="984514923743-6rgqhfg7pimq9u7b67kek1ui0d88oosi.apps.googleusercontent.com"
          buttonText="Login"
          render={renderProps => (
            <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
          )}
          onSuccess={responseGoogle}
          onFailure={errorGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <Meta title="" description="" />

      </Card>
      </div>
    </Container>
   
  )
}

export default Login;
