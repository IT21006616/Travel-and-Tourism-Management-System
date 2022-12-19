import React,{useState} from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
 
} 
from 'mdb-react-ui-kit';
import { Col} from "react-bootstrap";
import Swal from "sweetalert2";




export default function AddEmployee(){

    const [fristname, setfristname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [nationality, setnationality] = useState("");
    const [phone, setphone] = useState("");
    const [position, setposition] = useState("");


   const navigate = useNavigate(); 
    

    function senddata(e)
    {
        
     
     
      e.preventDefault();
      
      const newemployeeinfo ={
        
          fristname,
          lastname,
          email,
          nationality,
          phone,
          position,

      }

      
       axios.post("http://localhost:8070/Employee/add",newemployeeinfo).then(()=>{

        Swal.fire({
          title: 'Sucess!',
          text: 'Employee Details Added', 
          icon: 'success', 
          showConfirmButton: false, 
          timer: 1500})

         
        
        navigate("/allEmp");

       })


    }


    return (
      <div style={{
        backgroundImage: `url(../images/backg.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '870px',
        
      }}>

      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"red"}}>LSR </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">employee Info</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>

   

      <div className="container"><br></br>
      <h2 style={{textDecoration:'none',color:'white',float: 'middle'}}>Add Employee Details</h2>

      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>

          <form onSubmit={senddata}>
            <div className="form-group">

          <MDBCol md='7'>
           <label for="name">First Name</label>
           <input type="text" className="form-control" id="fristname"  placeholder="Enter frist name" 
           
           onChange={(e)=>{

               setfristname(e.target.value);

           }} required />
           <br></br>
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBCol md='7'>
           <label for="name">Last Name</label>
           <input type="text" className="form-control" id="lastname"  placeholder="Enter last name"
           
           onChange={(e)=>{

               setlastname(e.target.value);

           }}required />
           <br></br>
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBCol md='7'>
             <label for="email">Email</label>
             <input type="email" className="form-control" id="email"  placeholder="Enter Email"
             
             onChange={(e)=>{

                 setemail(e.target.value);

             }}required/>
             <br></br>
             </MDBCol> 
             </div>

              <div className="form-group">
        <MDBCol md='7'>
             <label for="nationality">Address</label>
             <input type="text" className="form-control" id="nationality"  placeholder="Enter Address"
             
             onChange={(e)=>{

                 setnationality(e.target.value);

             }}required/>
             <br></br>
             </MDBCol>   
             </div>
    

             <div className="form-group">
        <MDBRow>
        <Col md='7'>
           <label for="mobile">phone</label>
           <input type="tel" className="form-control" id="mobile"   max="100000" placeholder="Enter Your Telephone Number"  pattern="[0-9]{10}"
          
           onChange={(e)=>{

               setphone(e.target.value);

              }} required/>
           
           <br></br>
           </Col>
        
        <Col md='7'>
           <label for="position">Position</label>
           <input type="text" className="form-control" id="position"  placeholder="Enter Position"
           
           onChange={(e)=>{

               setposition(e.target.value);

           }} required/>
           <br></br>
           </Col>
           </MDBRow>
        </div>

       <button type="submit" className="btn btn-primary" href="#" >Finish</button>
      </form>
      </MDBCard>
      </MDBRow>
      </MDBContainer>
      </div>

</div>
      </div>
  )

 }