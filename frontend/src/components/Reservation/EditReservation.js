import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Container, Row, Col} from "react-bootstrap";
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
import { get } from 'lodash';
import {useParams} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Editreservation(RoomID) {

    const [reservation, setreservation] = useState([]);
    const [HotelID, setHotelID] = useState("");
    const [Roomtype, setRoomtype] = useState("AcRoom(Single)");
    const [AvailableRooms, setAvailableRooms] = useState("");
    const [Capacity, setCapacity] = useState("");
    const [Price, setPrice] = useState("");
    const [Discount, setDiscount] = useState("");

    const navigate = useNavigate();

   const params = useParams();


  useEffect(()=>{
    getreservationDetails();
  },[])

  const getreservationDetails = async()=>{
    // console.warn(params)
    let result = await fetch(`http://localhost:8070/reservation/get/${params.id}`);
    // setpayment(user.)
    const {reserves} = await result.json();
    console.log(reserves)
    
    setreservation(reserves.reservation)
    setHotelID(reserves.HotelID)
    setRoomtype(reserves.Roomtype)
    setAvailableRooms(reserves.AvailableRooms)
    setCapacity(reserves.Capacity)
    setPrice(reserves.Price)
    setDiscount(reserves.Discount)
   
  
  }

  function updatereservation (e) {
    e.preventDefault();

    // console.log(params.id);

    const updatereservation = {
      HotelID,
      Roomtype,
      AvailableRooms,
      Capacity,
      Price,
      Discount,
    }
        axios.put(`http://localhost:8070/reservation/update/${params.id}`,updatereservation).then((res) => {
            alert("Customer Details Updated");
            setreservation(res.data);

            navigate("/allRes");
           
            
        }).catch((err) => {
            alert(err.message);
        })
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
    <center><h2>update reservation Details</h2></center><br></br>
    </div>
    <Form onSubmit={updatereservation}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHotelid">
          <Form.Label>Hotel ID</Form.Label>
          <Form.Control type ="text" id="Hotel Id" placeholder="Enter Hotel Id" value={HotelID}
           onChange={(e)=>{setHotelID(e.target.value)}}/>
        </Form.Group>
      

        <Form.Group as={Col} controlId="formGridRoomtype">
          <Form.Label>Roomtype</Form.Label>
          <Form.Select defaultValue="Choose..." id="Roomtype" placeholder="Enter Hotel Id"  value={Roomtype}
          onChange={(e)=>{setRoomtype(e.target.value); console.log(e.target.value);}}>
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
        <Form.Control type="text"  id="AvailableRooms"  placeholder="Capacity" value={AvailableRooms}
        onChange={(e)=>{setAvailableRooms(e.target.value)}}/>
      </Form.Group>    

      
      <Form.Group className="mb-3" controlId="formGridCapacities">
        <Form.Label>Capacity</Form.Label>
        <Form.Control type="text"  id="Capacity" placeholder="capacity" value={Capacity}
        onChange={(e)=>{setCapacity(e.target.value)}}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGridPricess">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text"  id="Price"placeholder="Pricess for room" value={Price}
        onChange={(e)=>{setPrice(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridDiscounts">
        <Form.Label>Discount</Form.Label>
        <Form.Control type="text"  id="Discount" placeholder="Discounts for room" value={Discount}
         onChange={(e)=>{setDiscount(e.target.value)}}/>
      </Form.Group>

    
    </Form>

    <button type="submit" class="btn btn-success">UPDATE</button>

    </div>

    )
       
                }

export default Editreservation;