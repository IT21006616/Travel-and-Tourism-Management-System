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

function Edittransport(_userId) {
  const [transport, setTransport] = useState(["transport"]);
  const [vreg, setvreg] = useState("");
  const [vname, setvname] = useState("");
  const [vowner, setvowner] = useState("");
  const [vprice, setvprice] = useState("");
  const [vdescription, setvdescription] = useState("");
  const params = useParams();

  const navigate = useNavigate(); 


  useEffect(()=>{
    gettransportDetails();
  },[])

  const gettransportDetails = async()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/transport/get/${params.id}`);
    const {user} = await result.json();
    console.log(user)
   
    setvreg(user.vreg)
    setvname(user.vname)
    setvowner(user.vowner)
    setvprice(user.vprice)
    setvdescription(user.vdescription)
  }

  function updatetransport (e) {
    e.preventDefault();

    const updatetransport = {

      vreg,
      vname,
      vowner,
      vprice,
      vdescription,
    }
        axios.put(`http://localhost:8070/transport/update/${params.id}`,updatetransport).then((res) => {
         //   alert("Customer Details Updated");

            Swal.fire({
              title: 'Sucess!',
              text: 'Update successfully', 
              icon: 'success', 
              showConfirmButton: false, 
              timer: 1500})

            setTransport(res.data);

            navigate("/allVehicle");
            
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
          <a className="nav-link" href="/all">transport Details</a>
       </li>  
        
       
      </ul>
      </div>
      </div>
      
  </nav> 

  <div className="container"><br></br>
  <h2>Update transport Details</h2>

  <MDBContainer fluid>
    <MDBRow className='justify-content-center align-items-center m-5'>
    <MDBCard>

      <form onSubmit={updatetransport}>
        <div className="form-group">

      <MDBCol md='6'>
       <label for="name">Register number</label>
       <input type="Number" className="form-control" id="vreg" aria-describedby="emailHelp" placeholder="Enter Customer name" value={vreg}
       onChange={(e)=>{

           setvreg(e.target.value);

       }}/>
       </MDBCol>
    </div>
    
    <div className="form-group">
    <MDBCol md='6'>
       <label for="vname">Vehicle name</label>
       <input type="text" className="form-control" id="vname" aria-describedby="emailHelp" placeholder="Enter Passpoer ID" value={vname}
       onChange={(e)=>{

           setvname(e.target.value);

       }}/>
       </MDBCol>
    </div>

    <div className="form-group">
    <MDBCol md='6'>
       <label for="vname">Vehicle owner</label>
       <input type="text" className="form-control" id="vowner" aria-describedby="emailHelp" placeholder="Enter Passpoer ID" value={vowner}
       onChange={(e)=>{

           setvname(e.target.value);

       }}/>
       </MDBCol>
    </div>
    
    <div className="form-group">
    <MDBRow>
    <MDBCol md='6'>
         <label for="vprice">Vehicle price</label>
         <input type="Number" className="form-control" id="vprice" aria-describedby="emailHelp" placeholder="Enter Customer Age" value={vprice}
         onChange={(e)=>{

             setvprice(e.target.value);

         }}/>
         </MDBCol> 

         <MDBCol md='6'>
         <label for="vprice">Vehicle description</label>
         <input type="text" className="form-control" id="vprice" aria-describedby="emailHelp" placeholder="Enter Customer Age" value={vdescription}
         onChange={(e)=>{

             setvdescription(e.target.value);

         }}/>
         </MDBCol>   
    
       
     
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

export default Edittransport;