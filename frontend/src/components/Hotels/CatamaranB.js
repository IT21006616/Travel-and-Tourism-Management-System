import React from "react";
import axios from "axios";
import { createPopper } from '@popperjs/core';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Hotel3(){
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
                    <img src="./images/cbhSlide111.jpg" class="d-block w-100" alt="..." width= "1024" height= "768"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/cbhSlide2.jpg" class="d-block w-100" alt="..." width= "1024" height= "768"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/cbhSlide3.jpg" class="d-block w-100" alt="... " width= "1024" height= "768"/>
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
                            <img src="./images/cbh4.jpg" class="card-img-top" width= "400" height= "400"/>
                          </div>
                        </div>
                        <div class="col">
                          <div class="p-3">
                            <h4><strong>Catamaran Beach Hotel</strong></h4>
                            <h4><strong>Cosy Breezy seaside escapade</strong></h4>
                            <p>Within 20 minutes drive away from the Bandaranaike International Airport, at the Negombo Tourist Area is located the Catamaran Beach Hotel. Recently refurbished, this 46 roomed Hotel has all the amenities of a Tourist Hotel such as a Restaurant, a Bar with a Specialty Restaurant, a Swimming Pool complete with a Kiddies Pool – all located within a Wi-Fi environment and is in close proximity to all the other tourist facilities that are there in the area. The Garden opens to a clean white sandy beach which acts as an ornament to the Hotel.</p>
                            <p>Spacious luxury A/C rooms are complete with a small sitting area outside the room, Tea / Coffee Service, Mini Bar, Plasma TV, Telephones with IDD Facilities and attached Toilets with hot & cold water.</p>
                            <p>Left Luggage services are available while a limited room service is possible upon requests.</p>
                          </div>
                        </div>
                      </div>
                      <div class="card-footer text-muted">
                        <a href="#" class="btn btn-success btn-lg">BOOK NOW</a><br/>
                      </div><br/>
                      <p>The fully A/C Restaurant could accommodate 100 covers and will serve different kinds of food including Indian, Chinese and Western Menus. In addition all types of authentic Sri Lankan Menus will be prepared by experienced Chefs and will cater to the needs of the Guests.</p>
                        <p>Banquet facilities for 100 Guests could be provided both for buffets and Ala carte menus.</p>
                        <p>The Upper Deck Bar combined with the Specialty Restaurant facing the Indian Ocean and the Swimming Pools will tempt the Guests to spend more time enjoying the cool breeze.</p>
                        <p>Staying in Negombo, then it should be at the Catamaran Beach Hotel.</p>
                    </div><br/>
                    <div class="border bg-light">
                    <br/>
                    <div class="container overflow-hidden text-center">
                     <h2><b>Lodging</b></h2><b></b><br/>
                      <div class="row gx-5">
                        <div class="col">
                          <div>
                            <img src="./images/cbh5.jpg" class="card-img-top" width= "200" height= "300"/>
                            <p></p>
                            <img src="./images/cbh52.jpg" class="card-img-top" width= "200" height= "300"/>
                            <p><br/>The rooms of Catamaran Beach Hotel are extremely comfortable, equipped with warm and precious materials. Rooms are light and comfortable and well-appointed with a two Queen size beds.</p>
                          </div>
                        </div>
                        <div class="col">
                          <div>
                            <img src="./images/cbh6.jpg" class="card-img-top" width= "200" height= "300"/>
                            <p></p>
                            <img src="./images/cbh62.jpg" class="card-img-top" width= "200" height= "300"/>
                            <br/>
                            <p><br/>The rooms of Catamaran Beach Hotel are extremely comfortable, equipped with warm and precious materials. Rooms are light and comfortable and well-appointed with two Queen size beds.</p>
                          </div>
                        </div>
                        {/*<div class="col">
                          <div>
                            <img src="./images/resturent.jpg" class="card-img-top" width= "200" height= "200"/>
                            <h3>Restaurent</h3>
                          </div>
                          </div>*/}
                        <div>
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
                            <h3>Catamaran Beach Hotel</h3>
                            <MDBIcon fas icon="paper-plane" /><h5>209, Lewis Place, Negombo, Sri Lanka</h5>
                            <MDBIcon fas icon="phone" /><h5>+94-31-222-8801</h5>
                            <MDBIcon fas icon="envelope" /><h5>catamaranresv@LSRhotels.com</h5>
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
                        <a href="/Hotel2"><button class="btn btn-dark" ><img src="./images/passi-loge.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel3"><button class="btn btn-dark active" ><img src="./images/caterman.png"></img></button></a>&emsp;&emsp;
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

export default Hotel3;