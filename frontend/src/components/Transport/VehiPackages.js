import React , {useState , useEffect, useReducer} from "react";
import axios from "axios";
import _, { range, result } from "lodash";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function VehiclePackages(){

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

                            <li className="nav-item">
                                <a className="nav-link" href="/package">PACKAGES</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/vehicles">TRANSPORT</a>
                            </li>
                        </ul> 
                    </div>
                     
                    </div>
             </nav>

      <br></br>


      <h2 align="center">Vehicle Packages</h2><br></br>

      
         
        
     
      <div class="container text-center">
        <div class="row row-cols-2 row-cols-lg-5 g-3 g-lg-3">
          <div class="col">
            <div class="card h-100">
              <img src="./images/Transport/vehi1.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Car</h5>
                  <p class="card-text">◾Good condition<br></br>◾ 5 seats with driver <br></br></p>
                </div>
              <div class="card-footer">
                <small class="text-muted">Price $50.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/Car">Book Now</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
            <img src="./images/Transport/vehi2.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Van</h5>
                <p class="card-text">◾Good condition<br></br>◾ 13 seats with driver <br></br></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $60.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/Van">Book Now</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
            <img src="./images/Transport/vehi3.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Bus</h5>
                <p class="card-text">◾Good condition<br></br>◾ 53 seats with driver <br></br></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $100.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/Bus">Book Now</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="./images/Transport/vehi4.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Tuk Tuk</h5>
                <p class="card-text">◾Good condition<br></br>◾ 4 seats with driver <br></br></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $20.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/Tuk Tuk">Book Now</a>
            </div>
          </div>

          <div class="col">
          <div class="card h-100">
              <img src="./images/Transport/vehi5.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">caravan</h5>
                <p class="card-text">◾Good condition<br></br>◾ You can arrange the seats as you like <br></br></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $50.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/caravan">Book Now</a>
            </div>
            </div>
          
         
          </div>
        </div><br></br>
      </div>



        
    )
    
}
export default VehiclePackages;