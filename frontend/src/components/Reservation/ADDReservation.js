import React,{useState} from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
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
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





export default function Addreservationinfo(){

    const [HotelID, setHotelID] = useState("");
    const [Roomtype, setRoomtype] = useState("AcRoom(Single)");
    const [AvailableRooms, setAvailableRooms] = useState("");
    const [Capacity, setCapacity] = useState("");
    const [Price, setPrice] = useState("");
    const [Discount, setDiscount] = useState("");


   const navigate = useNavigate(); 
    

    function senddata(e)
    {
        
      
      e.preventDefault();
      
      const newreservationinfo ={
        HotelID,
        Roomtype,
        AvailableRooms,
        Capacity,
        Price,
        Discount,
      }

      console.log(newreservationinfo);
       axios.post("http://localhost:8070/reserve/add",newreservationinfo).then(()=>{
        
        navigate("/allRes");

       }).catch((e)=>{console.log(e)})


    }

    return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{color:"red"}}>LSR </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <a className="nav-link " aria-current="page" href="/CHotel">HOME</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="">ABOUT</a>
                  </li>
                  <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark"
                    title="HOTELS"
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="/Hotel1">MARINA PASSIKUDAH</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Hotel2">PASSI VILLAS PASSIKUDAH</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Hotel3">CATAMARAN BEACH HOTEL</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Hotel4">RANGIRI DAMBULLA RESORT</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Hotel5">MARINA BENTOTA</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Hotel6">KUDA OYA COTTAGE</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/Hotel7">REVERSIDE ALUTHGAMA</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                  {/*}
                  <Dropdown>
                  <Dropdown.Toggle variant="success" id="nav-dropdown-dark">
                    Hotel
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                  </Dropdown>*/}
                  <li className="nav-item">
                      <a className="nav-link" href="">GALLERY</a>
                  </li>
              </ul> 
          </div>
           <button class="btn btn-secondary" type="submit" justify-content-md-end>Admin</button>
          </div>
   </nav>


    <div className="container"><br></br>
    <center><h2>Add Booking Details</h2></center><br></br>
    </div>
    <Form onSubmit={senddata}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHotelid">
          <Form.Label>Hotel ID</Form.Label>
          <Form.Control type ="text" id="Hotel Id" placeholder="Enter Hotel Id" onChange={(e)=>{setHotelID(e.target.value)}}/>
        </Form.Group>
      

        <Form.Group as={Col} controlId="formGridRoomtype">
          <Form.Label>Roomtype</Form.Label>
          <Form.Select defaultValue="Choose..." id="Roomtype" placeholder="Enter Hotel Id" onChange={(e)=>{setRoomtype(e.target.value); console.log(e.target.value);}}>
            <option value="AcRoom(Single)">AcRoom(Single)</option>
            <option value="AcRoom(Double)">AcRoom(Double)</option>
            <option value="AcRoom(Family)">AcRoom(Family)</option>
            <option value="NonAcRoom(Single)">NonAcRoom(Single)</option>
            <option value="NonAcRoom(Double)">NonAcRoom(Doubale)</option>
            <option value="NonAcRoom(Family)">NonAcRoom(Family)</option>
          </Form.Select>
        </Form.Group>

      </Row>

      <Form.Group as={Col} controlId="formGridAvailableRooms">
        <Form.Label>AvailableRooms</Form.Label>
        <Form.Control type="text"  id="AvailableRooms"  placeholder="Capacity" onChange={(e)=>{setAvailableRooms(e.target.value)}}/>
      </Form.Group>    

      
      <Form.Group className="mb-3" controlId="formGridCapacities">
        <Form.Label>Capacity</Form.Label>
        <Form.Control type="text"  id="Capacity" placeholder="capacity" onChange={(e)=>{setCapacity(e.target.value)}}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGridPricess">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text"  id="Price"placeholder="Pricess for room" onChange={(e)=>{setPrice(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridDiscounts">
        <Form.Label>Discount</Form.Label>
        <Form.Control type="text"  id="Discount" placeholder="Discounts for room" onChange={(e)=>{setDiscount(e.target.value)}}/>
      </Form.Group>

      

      

      
      <Button variant="primary" type="submit">
        Booking
      </Button>
      
      <div>
      <p>If you can Transport</p>
      <Button variant="primary" type="submit">
        Transport
      </Button>
      </div>
    </Form>

    </div>
    )
   



  
 }