import React from "react";
import axios from "axios";
import { createPopper } from '@popperjs/core';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Hotel4(){
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
                    <img src="./images/rdlSlide11.jpg" class="d-block w-100" alt="..." width= "1024" height= "768"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/rdlSlide2.jpg" class="d-block w-100" alt="..." width= "1024" height= "768"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/rdlSlide3.jpg" class="d-block w-100" alt="... " width= "1024" height= "768"/>
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
                            <img src="./images/rdl31.jpg" class="card-img-top" width= "400" height= "355"/>
                          </div>
                        </div>
                        <div class="col">
                          <div class="p-3">
                            <h4><strong>Rangiri Dambulla Resort</strong></h4>
                            <h4><strong>Kingdom of Nature serves on a palanquin</strong></h4>
                            <p>Rangiri Dambulla Resort, owned by LSR Group is a green and glamorous luxury resort situated in Dambulla within the Cultural Triangle and in the vicinity of World Heritage Site, Rangiri Dambulla Raja Maha Viharaya, globally known as “Golden Temple”. LSR has created this serene resort in keeping with the theme “Vegetation, Relaxation & Meditation”. It is a unique resort located in a green environment enriched with edible landscaping.</p>
                            <p>In the Resort, you will be totally detached from the crowded, busy, polluted and noisy city life. The natural charm created by vegetation and green environment itself is the most exquisite, unique and salient feature of the Resort which connects you to the nature and revitalize your mind and body through calm environment. The Resort which combines comforts, conveniences and modern facilities with the warmth and personalized attention of traditional Sri Lankan hospitality invite you to experience the excellence of edible landscaping, vegetation and relaxation.</p>
                          </div>
                        </div>
                      </div>
                      <div class="card-footer text-muted">
                        <a href="#" class="btn btn-success btn-lg">BOOK NOW</a>
                      </div>
                      <p><br/>The resort is spread over 13 acres of land and offers 06 Luxury Chalets 18 Luxury Swiss Cottage Tents and 02 Luxury Villas which are spacious, well furnished and air conditioned to ensure comfortable and memorable stay for you. All the units are aesthetically done with elegant interiors, antique furniture and modern amenities. Other facilities available in the Resort includes full size swimming pool and a toddler's pool for kids with a large deck, open restaurant, spacious and comfortable lobby beautifully furnished with antique furniture, open bar, ample vehicle parking facilities etc.</p>
                    </div><br/>
                    <div class="border bg-light">
                    <br/>
                    <div class="container overflow-hidden text-center">
                     <h2><b>Lodging</b></h2><b></b><br/>
                      <div class="row gx-5">
                        <div class="col">
                          <div>
                            
                          <h3>LUXURY CHALETS</h3>
                            <img src="./images/rdl4.jpg" class="card-img-top" width= "200" height= "300"/>
                            
                          </div>
                        </div>
                        <div class="col">
                          <div>

                          <h3>LUXURY SWISS COTTAGE TENTS</h3>
                            <img src="./images/rdl41.jpg" class="card-img-top" width= "200" height= "300"/>
                            
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
                          <p>Out of nineteen Luxury Swiss Cottages, eight are erected in a semi circle around the large green compound to offer picturesque view of the swimming pool and the vegetation. Twelve cottages are located overlooking our own green vegetable yard and vegetation. These cottages are extremely luxurious with traditional well designed furniture consist of king size beds, dressing table, writing table, bed side cupboards, wall cupboard and electric lamps including LED ground flood lights that light tents interior and verandahs beautifully. The guests who do not use air conditioners can use the windows with pull up flaps that allow fresh air and light to come through. Permanent insect netting enables the windows to keep the unwelcomed visitors out from the cottages.</p>
                          <p>These luxury cottages are of pleasing medley of styles and spacious. Each unit offers a bedroom area of 255 sq.ft, attached bathroom area of 80 sq.ft, utility area of 40 sq.ft and open verandah of 105 sq.ft. totaling to 480 sq.ft.</p>
                          <p>The resort offers 19 Luxury Swiss Cottage Tents. Each unit is air-conditioned, spacious and well-furnished to ensure a comfortable and memorable stay. These Units are aesthetically done in keeping with the theme “Vegetation, Relaxation and Meditation” completed with classy interiors and unique furniture with each tent having picturesque view overlooking the pool, green garden and the vegetable yard. The cottages are aluminium framed and made out of super fine durable all weather material with 100% water proofing with roll up windows and doors. They have been erected on raised solid platforms and sealed from bottom to the roof to ensure that insects and other small creatures do not creep in. Well appointed attached bathrooms with running hot and cold water are fully tiled and fitted with modern luxury fixtures and fittings to ensure hygiene factor. The best part of the cottages is that they are very safe and secure as they are lockable from both in and out. The interior walls and ceiling of the cottages with attractive designs are innovatively crafted in a colorful way with the highest quality fixtures and the most comfortable furnishings. Every cottage is fully air conditioned and beautifully furnished with antique furniture with other modern amenities such as Wi-Fi facility, mini fridge, TV, coffee / tea making facility etc.</p>
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
                            <h3>Rangiri Dambulla Resort</h3>
                            <MDBIcon fas icon="paper-plane" /><h5>Pohoranwewa, Kurunegala Rd, Dambulla, Sri Lanka</h5>
                            <MDBIcon fas icon="phone" /><h5>+94-11-282-4500</h5>
                            <MDBIcon fas icon="envelope" /><h5>rangirires@lsrhotels.com</h5>
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
                        <a href="/Hotel3"><button class="btn btn-dark" ><img src="./images/caterman.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel4"><button class="btn btn-dark active" ><img src="./images/rangiri-dambulla-resort-logo.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel5"><button class="btn btn-dark" ><img src="./images/benthota-150x671.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel6"><button class="btn btn-dark" ><img src="./images/kudaoya.png"></img></button></a>&emsp;&emsp;
                        <a href="/Hotel7"><button class="btn btn-dark" ><img src="./images/riverside.png"></img></button></a>&emsp;&emsp;
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </nav>
            </div>

        </div>
    )
}

export default Hotel4;