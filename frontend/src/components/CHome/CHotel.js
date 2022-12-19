import React from "react";
import "./CHome.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';


function CHotel(){
    return(
        
        <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: "red" }}>LSR </a>
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

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./images/catamaranbeach.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "1280" height= "800"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/PassiVilla.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "1280" height= "800"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/RangiriDambulla.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "1280" height= "800"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/MarinaBentota.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "1280" height= "800"/>
                </div>
                <div class="carousel-item">
                    <img src="./images/MarinaBeach.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "1280" height= "800"/>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        
                        &emsp;&emsp;&emsp;&emsp;<a href="/Hotel1"><button class="btn btn-dark"><img src="./images/marinapasi.png"></img></button></a>&emsp;
                        <a href="/Hotel2"><button class="btn btn-dark" ><img src="./images/passi-loge.png"></img></button></a>&emsp;
                        <a href="/Hotel3"><button class="btn btn-dark" ><img src="./images/caterman.png"></img></button></a>&emsp;
                        <a href="/Hotel4"><button class="btn btn-dark" ><img src="./images/rangiri-dambulla-resort-logo.png"></img></button></a>&emsp;
                        <a href="/Hotel5"><button class="btn btn-dark" ><img src="./images/benthota-150x671.png"></img></button></a>&emsp;
                        <a href="/Hotel6"><button class="btn btn-dark" ><img src="./images/kudaoya.png"></img></button></a>&emsp;
                        <a href="/Hotel7"><button class="btn btn-dark" ><img src="./images/riverside.png"></img></button></a>&emsp;
                        
                </nav>
            </div>

        <br></br>
        <br></br>
         <div className="container">
         <div class="container overflow-hidden text-center">
                      <div class="row gx-5">
                        <div class="col">
                          <div>
                            <img src="./images/90057706.jpg" class="card-img-top" width= "400" height= "300"/>
                          </div>
                        </div>
                        <div class="col">
                          <div class="p-3">
                            <h4>Who<strong>WE ARE</strong></h4>
                            <p>We provide you hotels from Luxurious to urban retreats. LSR hotels spreads around the country within cities of Negombo, Bentota, Passikudah, Belihul Oya, Kuda Oya and Dambulla. We offer you a unique experience for anyone and everyone with inimitable hospitality.</p>
                            <p>Each hotel has its uniqueness in its attractions, being Bentota & Passikudah with Water Sports & Diving facilities & for the Adventurers, Cottage Accommodation in Dambulla & Kuda Oya.</p>
                            <p>So pick your desired destination and allow us to greet you with a traditional Sri Lankan greeting.</p>
                            <p>AYUBOWAN!</p>
                          </div>
                        </div>
                      </div>
                      </div>
            <br/>
            <h2 align="center" >TOURISM IS EVERYWHERE</h2>
            <h4 align="center">MAKE YOUR NEXT VACATION WITH US</h4>
         </div>

        <br></br>
        <br></br>
         <div>
         <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
        <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

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

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        
        <a className='text-reset fw-bold' href=''>  
         All Rights Reserved by LSR Travel. </a>
      </div>
    </MDBFooter>
         </div>


         </div>
         
       
    
    )
}

export default CHotel;