import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
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

function EditCustomer(userId) {

  const navigate = useNavigate();

  const [customer, setCustomers] = useState([]);
  const[name , setName] = useState("");
  const[passport , setPassport] = useState("");
  const[age , setAge] = useState("");
  const[gender , setGender] = useState("");
  const[mobile , setMobile] = useState("");
  const[email , setEmail] = useState("");
  
  const params = useParams();

  useEffect(()=>{
    getCustomerDetails();
  },[])

  const getCustomerDetails = async()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/customer/get/${params.id}`);
    const {user} = await result.json();
    console.log(user)
   
    setName(user.name);
    setPassport(user.passport);
    setAge(user.age);
    setGender(user.gender);
    setMobile(user.mobile);
    setEmail(user.email); 
  }

  function updateCustomer (e) {
    e.preventDefault();

    const updateCustomer = {

        name,
        passport,
        age,
        gender,
        mobile,
        email,
    }
        axios.put(`http://localhost:8070/customer/update/${params.id}`,updateCustomer).then((res) => {
          //  alert("Customer Details Updated");

            Swal.fire({
              title: 'Sucess!',
              text: 'Customer Details Updated', 
              icon: 'success', 
              showConfirmButton: false, 
              timer: 1500})
  
              navigate("/all");

            setCustomers(res.data);
            
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
          <a className="nav-link" href="/all">Customer Details</a>
       </li>  
        
       
      </ul>
      </div>
      </div>
      
  </nav> 

  <div className="container"><br></br>
  <h2>Update Customer Details</h2>

  <MDBContainer fluid>
    <MDBRow className='justify-content-center align-items-center m-5'>
    <MDBCard>

      <form onSubmit={updateCustomer}>
        <div className="form-group">

      <MDBCol md='6'>
       <label for="name">Customer Name</label>
       <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Customer name" value={name}
       onChange={(e)=>{

           setName(e.target.value);

       }}/>
       </MDBCol>
    </div>
    
    <div className="form-group">
    <MDBCol md='6'>
       <label for="passport">Passport ID</label>
       <input type="text" className="form-control" id="passport" aria-describedby="emailHelp" placeholder="Enter Passpoer ID" value={passport}
       onChange={(e)=>{

           setPassport(e.target.value);

       }}/>
       </MDBCol>
    </div>
    
    <div className="form-group">
    <MDBRow>
    <MDBCol md='6'>
         <label for="age">Customer Age</label>
         <input type="text" className="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter Customer Age" value={age}
         onChange={(e)=>{

             setAge(e.target.value);

         }}/>
         </MDBCol>            
  
    <MDBCol md='6'>
       <label for="gender" value={gender}>Gender</label><br></br>
       <MDBRadio name='inlineRadio' id='inlineRadio1' value='Female' label='Female' inline 
       onChange={(e)=>{

           setGender(e.target.value);

       }}/>
       <MDBRadio name='inlineRadio' id='inlineRadio2' value='Male' label='Male' inline
       onChange={(e)=>{

           setGender(e.target.value);

       }}/>
       <MDBRadio name='inlineRadio' id='inlineRadio3' value='Other' label='Other' inline
       onChange={(e)=>{

           setGender(e.target.value);

       }}/>
       </MDBCol>
       </MDBRow>
    </div>
    

    <div className="form-group">
    <MDBRow>
    <Col md='6'>
       <label for="mobile">Mobile No</label>
       <input type="text" className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Enter Mobile No" value={mobile}
       onChange={(e)=>{

           setMobile(e.target.value);

       }}/>
       </Col>
    

    
    <Col md='6'>
       <label for="email">email</label>
       <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Customer email" value={email}
       onChange={(e)=>{

           setEmail(e.target.value);

       }}/>
       </Col>
       </MDBRow>
    </div>

   <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </MDBCard>
  </MDBRow>
  </MDBContainer>
  </div>
  </div>

  )
}

export default EditCustomer;