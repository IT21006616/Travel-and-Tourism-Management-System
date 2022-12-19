import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Container, Row, Col} from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio
}
from 'mdb-react-ui-kit';
import { get } from 'lodash';
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function EditPayment(userId) {

    const [Payment, setpayment] = useState([]);
  const[fristname , setfristname] = useState("");
   const[lastname , setlastname] = useState("");
   const[email, setemail] = useState("");
   const[nationality, setnationality] = useState("");
   const[phone, setphone] = useState("");
   const [tnds, settnds] = useState("");

   const navigate = useNavigate();



   const params = useParams();


  useEffect(()=>{
    getPaymentDetails();
  },[])

  const getPaymentDetails = async()=>{
    // console.warn(params)
    let result = await fetch(`http://localhost:8070/Payment/get/${params.id}`);
    // setpayment(user.)
    const {user} = await result.json();
    console.log(user)
    // setpayment(user.data);
    setfristname(user.fristname)
    setlastname(user.lastname)
    setemail(user.email)
    setnationality(user.nationality)
    setphone(user.phone)
    settnds(user.tnds)
   
   /* setName(result.name);
    setPassport(result.passport);
    setAge(result.age);
    setGender(result.gender);
    setMobile(result.mobile);
    setEmail(result.email); */
  }

  function updatePayment (e) {
    e.preventDefault();

    // console.log(params.id);

    const updatePayment = {
      fristname,
      lastname,
      email,
      nationality,
      phone,
      tnds,
    }
        axios.put(`http://localhost:8070/Payment/update/${params.id}`,updatePayment).then((res) => {
        //    alert("Customer Details Updated");

        Swal.fire({
          title: 'Sucess!',
          text: 'Customer Details Updated', 
          icon: 'success', 
          showConfirmButton: false, 
          timer: 1500})

          navigate("/allPayment");

            setpayment(res.data);
            
            
        }).catch((err) => {
            alert(err.message);
        })
}

      
    return(

      <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"red"}}>LSR</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="#">Payment Details</a>
       </li>  
        
       
      </ul>
      </div>
      </div>
      
  </nav> 

        <div className="container">
        <br></br>
        <br></br>
        <br></br>

  
  <form onSubmit={updatePayment} >
    <div class="mb-3">
  
      <label for="name" class="form-label" >Frist Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Your FristName" value={fristname}
      onChange={(e) =>{
  
  
       setfristname(e.target.value);
  
      }}/>
  
    </div>
  
    <div className="mb-3">

  
      <label for="name" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Your LastName" value={lastname}
      onChange={(e) =>{
  
  
        setlastname(e.target.value);
   
       }}/>
  
    </div>
  
  <div className="mb-3">
  
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" placeholder="Enter Email" value={email}
      onChange={(e) =>{
  
  
        setemail(e.target.value);
   
       }}/>
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">Nationality</label>
      <input type="text" class="form-control" id="Nationality" placeholder="Enter Your Nationality" value={nationality}
      onChange={(e) =>{
  
  
        setnationality(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">Phone Number</label>
      <input type="text" class="form-control" id="phone" placeholder="Enter Phone Number" value={phone}
      onChange={(e) =>{
  
  
        setphone(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">Total No Of Days in Sri Lanka</label>
      <input type="text" class="form-control" id="tnds" placeholder="Enter Total No Of Days in Sri Lanka" value={tnds}
      onChange={(e) =>{
  
  
        settnds(e.target.value);
   
       }} />
  
    </div>
    
  
  
    <button type="submit" class="btn btn-primary">Upadte</button>
  </form>
  
  
  
  
          </div>
          </div>
  
        
      )
     
       
}

export default EditPayment;