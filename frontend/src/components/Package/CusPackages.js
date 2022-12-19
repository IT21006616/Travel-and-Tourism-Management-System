import React , {useState , useEffect, useReducer} from "react";
import axios from "axios";
import _, { range, result } from "lodash";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CusPackages(){

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


      <h2 align="center">Packages</h2><br></br>

      
         
        
     
      <div class="container text-center">
        <div class="row row-cols-2 row-cols-lg-5 g-3 g-lg-3">
          <div class="col">
            <div class="card h-100">
              <img src="./images/package/pkg2.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Family Tour</h5>
                  <p class="card-text">◾ Visit all six World Heritage sites of Sri Lanka <br></br>◾ 7-night private tour <br></br>◾ Anuradhapura, Polonnaruwa, Sigiriya, and Kandy</p>
                </div>
              <div class="card-footer">
                <small class="text-muted">Price $569.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/Family Tour">Book Now</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
            <img src="./images/package/pkg4.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">4 Days Essence Of Sri Lanka</h5>
                <p class="card-text">◾ Explore Sri Lanka in a Short 4 days tour <br></br>◾ Wander the plains and hills of Central Sri Lanka</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $359.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/4 Days Essence Of Sri Lanka">Book Now</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
            <img src="./images/package/pkg5.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Sri Lankan South Beach Tour Package</h5>
                <p class="card-text">◾ Leisure package through Sri Lanka’s dreamy South Beaches <br></br>◾ This exclusive package features nature tours, stunning beaches, and the most breathtaking scenery imaginable</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $396.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/Sri Lankan South Beach Tour Package">Book Now</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="./images/package/pkg6.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">7 Days Sri Lanka Nature Private Tour</h5>
                <p class="card-text">◾ This 07-day Canoeing special tour <br></br>◾ Experience the Adventure while witnessing nature in Sri Lanka</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $1100.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/7 Days Sri Lanka Nature Private Tour">Book Now</a>
            </div>
          </div>

          <div class="col">
          <div class="card h-100">
              <img src="./images/package/pkg7.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Adventure Tours in Sri lanka</h5>
                <p class="card-text">◾ Follow the knuckles mountain range. mountain hiking, waterfalls, and see the biodiversity-grounded area.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $650.00</small>
              </div>
              <a type="button" class="btn btn-success" href="/addCusInfo/Adventure Tours in Sri lanka">Book Now</a>
            </div>
            </div>
          
         
          </div>
        </div><br></br>
      </div>



        
    )
    
}
export default CusPackages;