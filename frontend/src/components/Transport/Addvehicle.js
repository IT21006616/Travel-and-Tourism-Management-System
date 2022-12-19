import React,{useState} from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
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
import { Card, Container, Row, Col} from "react-bootstrap";




export default function Addtransportinfo(){

    const [vreg, setvreg] = useState("");
    const [vname, setvname] = useState("");
    const [vowner, setvowner] = useState("");
    const [vprice, setvprice] = useState("");
    const [vdescription, setvdescription] = useState("");
   


   const navigate = useNavigate(); 
    

    function senddata(e)
    {
        
     
     
      e.preventDefault();
      
      const newtransportinfo ={
        
        vreg,
        vname,
        vowner,
        vprice,
        vdescription,
      }

      
       axios.post("http://localhost:8070/Transport/add",newtransportinfo).then(()=>{

        Swal.fire({
          title: 'Sucess!',
          text: 'Vehicle Added', 
          icon: 'success', 
          showConfirmButton: false, 
          timer: 1500})
        
        navigate("/allVehicle");

       })


    }


    return (

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
              <a className="nav-link" href="/add">transport Info</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>

   

      <div className="container"><br></br>
      <h2>Add Vehicle Details</h2>

      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>

          <form onSubmit={senddata}>
            <div className="form-group">

          <MDBCol md='6'>
           <label for="name">Vehicle registration number</label>
           <input type="Number" className="form-control" id="vreg" aria-describedby="emailHelp" placeholder="Enter vehicle registration number " 
           
           onChange={(e)=>{

               setvreg(e.target.value);

           }}/>
           <br></br>
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBCol md='6'>
           <label for="name">Vehicle name</label>
           <input type="text" className="form-control" id="vname" aria-describedby="emailHelp" placeholder="Enter vehicle name"
           
           onChange={(e)=>{

               setvname(e.target.value);

           }}/>
           <br></br>
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBCol md='6'>
             <label for="email">Vehicle owner</label>
             <input type="text" className="form-control" id="vowner" aria-describedby="emailHelp" placeholder="Enter vehicle owner"
             
             onChange={(e)=>{

                 setvowner(e.target.value);

             }}/>
             <br></br>
             </MDBCol> 
             </div>

              <div className="form-group">
        <MDBCol md='6'>
             <label for="nationality">Vehicle price</label>
             <input type="Number" className="form-control" id="vprice" aria-describedby="emailHelp" placeholder="Enter vehicle price"
             
             onChange={(e)=>{

                 setvprice(e.target.value);

             }}/>
             <br></br>
             </MDBCol>   
             </div>
    

        <div className="form-group">
        <MDBRow>
        
        <Col md='6'>
           <label for="tnds">Vehicle description</label>
           <input type="text" className="form-control" id="vdescription" aria-describedby="emailHelp" placeholder="Enter vehicle description"
           
           onChange={(e)=>{

               setvdescription(e.target.value);

           }}/>
           <br></br>
           </Col>
           </MDBRow>
        </div>

       <button type="submit" className="btn btn-primary">Proceed</button>
      </form>
      </MDBCard>
      </MDBRow>
      </MDBContainer>
      </div>

</div>
      
  )

 }