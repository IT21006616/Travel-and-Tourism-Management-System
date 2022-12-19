import React from "react";
import axios from "axios";
import { createPopper } from '@popperjs/core';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Hotel2(){
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
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./images/pvpkSlide1.jpg" class="d-block w-100" alt="..." width= "1024" height= "768"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/pvpkSlide2.jpg" class="d-block w-100" alt="..." width= "1024" height= "768"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/pvpSlide33.jpg" class="d-block w-100" alt="... " width= "1024" height= "768"/>
                </div>
            </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div><br/>
                    <div class="container overflow-hidden text-center">
                      <div class="row gx-5">
                        <div class="col">
                          <div>
                            <img src="./images/pvpkIntro.jpg" class="card-img-top" width= "400" height= "300"/>
                          </div>
                          
                        </div>
                        <div class="col">
                          <div class="p-3">
                            <h4><strong>PASSI VILLAS PASSIKUDAH</strong></h4>
                            <h4><strong>Gateway for a heaven reigns with luxury </strong></h4>
                            <p>Located in the beautiful East coast of Sri Lanka is our second property, Passi Villas. While enjoying the sun and the sea with stunning views across the renowned beach, one could take a break to dip in the fabulous infinity pool. Take the advantage of special discounts at our sister hotel, Marina Passikudah where the water sports centre (seasonal) and food and beverage outlets are just a short stroll along the beach. This is the ideal place to relax and unwind.</p>
                            <p>54 luxurious villa type accommodations are facing the bay of Passikudah. All villas are en suite with bath. The villas are equipped with A/C, LED TV, Wi-Fi, Tea/Coffee makers in room safe and running hot water.</p>
                          </div>
                          
                        </div>
                      </div>
                      <div class="card-footer text-muted">
                        <a href="#" class="btn btn-success btn-lg">BOOK NOW</a>
                      </div>
                      <br/>
                          <p>The restaurant could accommodate up to guests and specializes in western and Sri Lankan cuisines.</p>
                    </div><br/>
                    <div class="border bg-light">
                    <br/>
                    <div class="container overflow-hidden text-center">
                     <h2><b>DELUXE ROOM</b></h2><b></b><br/>
                      <div class="row gx-5">
                        <div class="col">
                          <div>
                            <img src="./images/pvpkBook1.jpg" class="card-img-top" width= "250" height= "200"/>
                            
                          </div>
                        </div>
                        <div class="col">
                          <div>
                            <img src="./images/pvpkBook2.jpg" class="card-img-top" width= "250" height= "200"/>
                            
                          </div>
                        </div>
                        <div class="col">
                          <div>
                            <img src="./images/pvpkBook3.jpg" class="card-img-top" width= "200" height= "200"/>
                            
                          </div>
                          </div>
                        <div>
                          <br/>
                        <p>The rooms of Passi Villas are extremely comfortable, equipped with warm and precious materials.<br/>Rooms are light and comfortable and well-appointed with a two Queen size beds.</p>
                          <br/>
                          <hr/>
                          <br/>
                          <div class="container overflow-hidden text-center">
                     <h3><strong>Get in touch</strong></h3><br/>
                      <div class="row gx-5">
                        <div class="col">
                          <div>
                            <h3>Room Reservations</h3>
                            <MDBIcon fas icon="phone" /> <h5>+94-11-282-4500</h5>
                            <MDBIcon fas icon="tty" /><h5>+94-11-282-9734</h5>
                            <MDBIcon fas icon="envelope" /><h5>LSRhotels@sltnet.lk</h5>
                          </div>
                        </div>
                        <div class="col">
                          <div>
                            <h3>Passi Villas Passikudah </h3>
                            <MDBIcon fas icon="paper-plane" /><h5>No. 12, Land Side,Kalkudah, Passikudah, Sri Lanka</h5>
                            <MDBIcon fas icon="phone" /><h5>+94-65-205-0288</h5>
                            <MDBIcon fas icon="envelope" /><h5>passivillasgm@lsrhotels.com</h5>
                          </div>
                        </div>
                        <div class="col">
                          <div>
                            <h3>Head Office</h3>
                            <MDBIcon fas icon="phone" /><h5>+94-11-282-4500</h5>
                            <MDBIcon fas icon="tty" /><h5>+94-11-282-9734</h5>
                            <MDBIcon fas icon="envelope" /><h5>LSRhotels@sltnet.lk</h5>
                          </div>
                        </div>
                        </div>
                      </div>
                        </div>
                      </div>
                    </div>
                    <br/>
                    </div>
            </div>
            <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                LSR TRAVEL AGENCY
              </h6>
              <p>
              Your Specialized Travel Partner in Sri Lanka<br/>
              Headquarters:<br/>
              29 B, S.De. S. Jayasinghe Mawatha,
              Kalubowila, Dehiwela,<br/>
              Sri Lanka
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                &nbsp;&nbsp;LSR, Sri Lanka
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                LSR@discoverSl.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +94-11-282-4500 
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +94-11-282-4501
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <a href="/Hotel1"><button class="btn btn-dark"><img src="./images/marinapasi.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel2"><button class="btn btn-dark active" ><img src="./images/passi-loge.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel3"><button class="btn btn-dark" ><img src="./images/caterman.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel4"><button class="btn btn-dark" ><img src="./images/rangiri-dambulla-resort-logo.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel5"><button class="btn btn-dark" ><img src="./images/benthota-150x671.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel6"><button class="btn btn-dark" ><img src="./images/kudaoya.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel7"><button class="btn btn-dark" ><img src="./images/riverside.png"></img></button></a>&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </nav>
            </div>

        </div>
    )
}

export default Hotel2;