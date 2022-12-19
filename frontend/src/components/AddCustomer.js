import React,{useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
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

export default function AddCustomer(){

  const navigate = useNavigate();


  const {register,handleSubmit, formState:{errors}} = useForm();

   const[name , setName] = useState("");
   const[passport , setPassport] = useState("");
   const[age , setAge] = useState("");
   const[gender , setGender] = useState("");
   const[mobile , setMobile] = useState("");
   const[email , setEmail] = useState("");

   const onSubmit =(e)=>{
    e.preventDefault();
    console.log(e)
   }

    

 
  /* useEffect(()=>{
    function sendData(){
      
      const newCustomer = {
        name,
        passport,
        age,
        gender,
        mobile,
        email
      }

      axios.post("http://localhost:8070/customer/add",newCustomer).then((res)=>{
        alert("Customer Added");
        
        setName("");
        setPassport("");
        setAge("");
        setGender("");
        setMobile("");
        setEmail("");

      }).catch((err)=>{
        alert(err.message);
      })
    }
    sendData();
   },[])*/
   function sendData (e){
      e.preventDefault();

        const newCustomer = {
          name,
          passport,
          age,
          gender,
          mobile,
          email
        }
  
        axios.post("http://localhost:8070/customer/add",newCustomer).then(()=>{
        
          Swal.fire({
            title: 'Sucess!',
            text: 'Customer Added', 
            icon: 'success', 
            showConfirmButton: false, 
            timer: 1500})

            navigate("/all");

            setTimeout(function(){
              window.location.reload();
           }, 1700);
  
        setName("");
        setPassport("");
        setAge("");
        setGender("");
        setMobile("");
        setEmail("");
        
      }).catch((err)=>{
        alert(err)
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
      <h2>Add Customer Details</h2>

      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>

          <form onSubmit={sendData}>
            <div className="form-group">

          <MDBCol md='6'>
           <label for="name">Customer Name</label>
           <input required type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Customer name" 
           {...register("name",{required:"Name is required"})}
           onChange={(e)=>{

               setName(e.target.value);

           }}/>
           {errors.name && (<small className="text-danger">Name is required</small>)}
           
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBCol md='6'>
           <label for="passport">Passport ID</label>
           <input required type="text" className="form-control" id="passport" aria-describedby="emailHelp" placeholder="Enter Passpoer ID" pattern="[0-9]{10}"
           {...register("passport",{required:"PassortID is required"})}
           onChange={(e)=>{

               setPassport(e.target.value);

           }}/>
           {errors.name && (<small className="text-danger">PassortID is required</small>)}
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBRow>
        <MDBCol md='6'>
             <label for="age">Customer Age</label>
             <input required type="number" className="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter Customer Age"
             {...register("age",{required:"Age is required"})}
             onChange={(e)=>{

                 setAge(e.target.value);

             }}/>
             {errors.name && (<small className="text-danger">Age is required</small>)}
             </MDBCol>            
      
        <MDBCol md='6'>
           <label for="gender" {...register("gender",{required:"Gender is required"})}>Gender</label><br></br>
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

           }}/><br></br>
           {errors.name && (<small className="text-danger">Gender is required</small>)}
           </MDBCol>
           </MDBRow>
        </div>
        

        <div className="form-group">
        <MDBRow>
        <Col md='6'>
           <label for="mobile">Mobile No</label>
           <input required type="tel" className="form-control" id="mobile" aria-describedby="emailHelp" placeholder="Enter Mobile No" max="100" pattern="[0-9]{10}"
           {...register("mobile",{required:"Mobile is required"})}
           onChange={(e)=>{

               setMobile(e.target.value);

           }}/>
           {errors.name && (<small className="text-danger">Mobile is required</small>)}
           </Col>
        

        
        <Col md='6'>
           <label for="email">email</label>
           <input  type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Customer email"
           {...register("email",{required:"Email is required"})}
           onChange={(e)=>{

               setEmail(e.target.value);

           }}/>
           {errors.name && (<small className="text-danger">Email is required</small>)}
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