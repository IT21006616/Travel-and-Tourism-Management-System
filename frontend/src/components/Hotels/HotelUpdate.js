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

function EditUpdateHotel(userId) {

  const navigate = useNavigate();

  const [hotel, setHotels] = useState([]);
  const[name , setName] = useState("");
  const[address , setAddress] = useState("");
  const[contact , setContact] = useState("");
  const[email , setEmail] = useState("");
  
  const params = useParams();

  useEffect(()=>{
    gethotelDetails();
  },[])

  const gethotelDetails = async()=>{
    //console.warn(params)
    let result = await fetch(`http://localhost:8070/hotel/get/${params.id}`);
    const {hotel} = await result.json();
    console.log(hotel)

    setName(hotel.name);
    setEmail(hotel.email);
    setContact(hotel.contact);
    setAddress(hotel.address);
  }

  function updatehotel (e) {
    e.preventDefault();

    const updatehotel = {

        name,
        address,
        contact,
        email,
    }
        axios.put(`http://localhost:8070/hotel/update/${params.id}`,updatehotel).then((res) => {
          //  alert("hotel Details Updated");

            Swal.fire({
              title: 'Sucess!',
              text: 'hotel Details Updated', 
              icon: 'success', 
              showConfirmButton: false, 
              timer: 1500})
  
              navigate("/allHotel");

            

            setHotels(res.data);
            
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
                <a className="nav-link" href="/allHotels">All Hotels</a>
                </li>
            </ul>
            
          </div>
        </div>
      </nav>

        <div className="container">
        <br></br>
        <br></br>
        <br></br>

  
  <form onSubmit={updatehotel} >
  
      
  
    <div className="mb-3">
  
      <label for="name" class="form-label">hotel Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter hotel Name" value={name}
      onChange={(e) =>{
  
  
        setName(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">Email</label>
      <input type="text" class="form-control" id="email" placeholder="Enter hotel Description" value={email}
      onChange={(e) =>{
  
  
        setEmail(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" class="form-label">Contact</label>
      <input type="text" class="form-control" id="price" placeholder="Enter Hotel Contact" value={contact}
      onChange={(e) =>{
  
  
        setContact(e.target.value);
   
       }} />
  
    </div>

    <div className="mb-3">
  
      <label for="name" class="form-label">Address</label>
      <input type="text" class="form-control" id="price" placeholder="Enter Hotel Address" value={address}
      onChange={(e) =>{
  
  
        setAddress(e.target.value);
   
       }} />
  
    </div>
    
  
  
    <button type="submit" class="btn btn-success">UPDATE</button>
  </form>
  
  
  
  
          </div>
  
       </div> 
      )
}

export default EditUpdateHotel;