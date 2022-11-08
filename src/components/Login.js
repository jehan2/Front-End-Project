import './Login.css';
import { useNavigate } from 'react-router-dom';
import React, {useState , useEffect} from 'react';
//import axios from "axios";
import Routers from './Routers'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const navigate =useNavigate()

    const LogIn = ()=>{
        if(email.length==0 && password.length==0){
            alert("required")
        }else{
           // alert(`welcome ${email}`)
            navigate('/')
        }
    }
    const Submit =()=>{
        LogIn()
    }

  return (
    
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-" style={{color: 'hsl(218, 81%, 95%)'}}>
             سجل وستجد  <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}> افضل العروض</span>
          </h1>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              
                <label>البريد الالكتروني</label>
              <MDBInput wrapperClass='mb-4'  id='form3' type='email' value={email} onChange={e=>setEmail(e.target.value)}/>

              <label>كلمة المرور</label>
              <MDBInput wrapperClass='mb-4'  id='form4' type='password' value={password} onChange={e=>{setPassword(e.target.value)}}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='ذكرني' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' onClick={Submit}>تسجيل الدخول</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer> 
     );
}

export default Login;