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
import {useNavigate, useParams} from 'react-router-dom';
import Swal from 'sweetalert2';

function EditPackage(packageId) {

  const [packages, setPackages] = useState([]);
  const[name , setName] = useState("");
  const[description , setDescription] = useState("");
  const[price , setPrice] = useState("");

  const navigate = useNavigate();

  
  const params = useParams();

  useEffect(()=>{
    getPackageDetails();
  },[])

  const getPackageDetails = async()=>{
    console.warn(params)
    let result = await fetch(`http://localhost:8070/package/get/${params.id}`);
    const {user} = await result.json();
    console.log(user)
   
    setName(user.name);
    setDescription(user.description);
    setPrice(user.price); 
  }

  function updatePackage (e) {
    e.preventDefault();

    const updatePackage = {

        name,
        description,
        price,
    
    }
        axios.put(`http://localhost:8070/package/update/${params.id}`,updatePackage).then((res) => {
            Swal.fire({
              title: 'Sucess!',
              text: 'Package Updated',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            })
            setPackages(res.data);
            navigate("/allPackage")
            
        }).catch((err) => {
            alert(err.message);
        })
}
 

  return(       
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
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">All Package</a>
                </li>
            </ul>
            
          </div>
        </div>
      </nav>

        <div className="container">
       
        <br></br>
        <br></br>
        <h2>Update Package</h2>
        <br></br>

  
  <form onSubmit={updatePackage} >
  
      
  
    <div className="mb-3">
  
      <label for="name" class="form-label">Package Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter Package Name" value={name}
      onChange={(e) =>{
  
  
        setName(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">Description</label>
      <textarea class="form-control" id="description" placeholder="Enter Package Description" value={description}
      onChange={(e) =>{
  
  
        setDescription(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">Price</label>
      <input type="text" class="form-control" id="price" placeholder="Enter Package Price" value={price}
      onChange={(e) =>{
  
  
        setPrice(e.target.value);
   
       }} />
  
    </div>
    
  
  
    <button type="submit" class="btn btn-success">UPDATE</button>
  </form>
  
  
  
  
          </div>
  
       </div> 
      )
}

export default EditPackage;