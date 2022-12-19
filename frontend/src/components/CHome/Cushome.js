import React from "react";
import axios from "axios"; 
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import ImageButton from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Blur from 'react-blur';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Cushome(){
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
                     <a class="btn btn-secondary" type="submit" justify-content-md-end href="/Home">Admin</a>
                    </div>
             </nav>

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/img1.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "100" height= "650" />
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:"white",fontFamily:"",fontWeight: 'bold'}}>Discover Sri Lanka</h2>
        <h2 style={{color:"white",fontFamily:"",fontWeight: 'bold'}}>"LSR" Your specialized travel partner in sri lanka</h2>
      </div>
    </div>
    <div class="carousel-item">
    <img src="./images/img2.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "100" height= "650" />
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:"white",fontFamily:"",fontWeight: 'bold'}}>Discover Sri Lanka</h2>
        <h2 style={{color:"white",fontFamily:"",fontWeight: 'bold'}}>"LSR" Your specialized travel partner in sri lanka</h2>
      </div>
    </div>
    <div class="carousel-item">
    <img src="./images/img3.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "100" height= "650"/>
      <div class="carousel-caption d-none d-md-block">
        <h2 style={{color:"white",fontFamily:"",fontWeight: 'bold'}}>Discover Sri Lanka</h2>
        <h2 style={{color:"white",fontFamily:"",fontWeight: 'bold'}}>"LSR" Your specialized travel partner in sri lanka</h2>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>

       <br></br>
       <br></br>
       <div class="container overflow-hidden text-center">
       <div class="row gx-5">    
         <div class="col">
         <i class="fas fa-hand-holding-usd fa-4x"></i><br/>
         <div class=""><h4 style={{color:"#5B5EA6",fontFamily:"monospace"}}>BEST PRICE GUARANTEE</h4>
         <p style={{fontFamily:"Verdana"}}>Tourism has witnessed some of the toughest price competition in today's world. 
            Yet for all most customers do not treat, the price is The vital point in their decision making process.
             Although LSR Prices might not be the lowest in the Marketplace, customers will be rest assured that,
            They will get a service proportionate to the price they have paid, which will offer them a "Money's Worth " Experience.</p>
         
         </div>
        </div>
       <div class="col">
       <i class="fas fa-check fa-4x"></i><br/>
          <div class=""><h4 style={{color:"#5B5EA6",fontFamily:"monospace"}}>TRUST AND SAFETY</h4>
          <p style={{fontFamily:"Verdana"}}>Capability to offer its service with great confidence places LSR's customers on a foundation on which they would engage in activities /
             programmes based on built-up trust knowing that LSR will lay great emphasis on their safety through out the encounters.</p>
          </div>
        </div>

        <div class="col">
        <i class="fas fa-hiking fa-4x"></i><br/>
         <div class=""><h4 style={{color:"#5B5EA6",fontFamily:"monospace"}}>BEST TRAVEL AGENT</h4>
         <p style={{fontFamily:"Verdana"}}>Being able to provide any tailor-made tour programme / 
            activity with its own resources such as the Water Sports Centres, 
            Adventure Bases,Fleet of Vehicles etc. puts LSR in a unique position.</p>
         
         </div>
        </div>

        <div class="col">
        <i class="fas fa-hands-helping fa-4x"></i><br/>
         <div class=""><h4 style={{color:"#5B5EA6",fontFamily:"monospace"}}>TRAVEL INSURANCE</h4>
         <p style={{fontFamily:"Verdana"}}>From the very beginning The LSR has been helping travelers in travel with responsibility.
            In order to minimize the risks can be occurred during the tour, 
            LSR provides you a range of travel insurance options specifically designed to give you peace of mind when you travel with us.</p>
         
         </div>
        </div>

        </div>
         </div>
        <br></br>
        <br></br>

        
      <div>
        {/* 👇️ react router link */}
        <a href="">
         
          <img src= "./images/grid/img1.jpg" class="text-center" alt="..." width= "384" height= "300" /> 
          <img src= "./images/grid/img2.jpg" class="text-center" alt="..." width= "384" height= "300" />
          <img src= "./images/grid/img3.jpg" class="text-center" alt="..." width= "384" height= "300" />
          <img src= "./images/grid/img4.jpg" class="text-center" alt="..." width= "384" height= "300" />

        </a>
        
        </div>
        
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-4">
            <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
             <h2 style={{color:"#009B77"}}>Popular Destinations</h2>
               <a class="p-1 rounded" href="#simple-list-item-1" style={{color:"#5B5EA6",fontFamily:"monospace"}}>Sigiriya Rock</a>
               <a class="p-1 rounded" href="#simple-list-item-2" style={{color:"#5B5EA6",fontFamily:"monospace"}}>Hill Country</a>
               <a class="p-1 rounded" href="#simple-list-item-3" style={{color:"#5B5EA6",fontFamily:"monospace"}}>Passikudah Beach</a>
               <a class="p-1 rounded" href="#simple-list-item-4" style={{color:"#5B5EA6",fontFamily:"monospace"}}>Yala National park</a>
               
             </div>
          </div>
          <div class="col-8">
             <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
               <h4 id="simple-list-item-1" style={{color:"green"}}>Sigiriya Rock</h4>
               <img src="./images/img5.jpg" class="text-center" alt="..." width= "100" height= "100"/><br/>
              <a href="">read more</a><br/>
                <h4 id="simple-list-item-2" style={{color:"green"}}>Hill Country</h4>
                <img src="./images/img6.jpg" class="text-center" alt="..." width= "100" height= "100"/><br/>
              <a href="">read more</a><br/><br/>
                <h4 id="simple-list-item-3" style={{color:"green"}}>Passikudah Beach</h4>
                <img src="./images/img7.jpg" class="text-center" alt="..." width= "100" height= "100"/><br/>
              <a href="">read more</a><br/><br/>
                <h4 id="simple-list-item-4" style={{color:"green"}}>Yala National park</h4>
                <img src="./images/img8.jpg" class="text-center" alt="..." width= "100" height= "100"/><br/>
              <a href="">read more</a><br/>
                
             </div>
           </div>
         </div>


        <br></br>
        <br></br>
         <div className="container">
            <h2 align="center" style={{color:"blue",fontFamily:"Lucida Handwriting"}}>TOURISM IS EVERYWHERE</h2>
            <h4 align="center" style={{color:"blue",fontFamily:"monospace"}}>MAKE YOUR NEXT VACATION WITH US</h4>
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
              <h6 className='text-uppercase fw-bold mb-4'>Recent posts</h6>
              <p>
                <a href='#!' className='text-reset'>
                  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  
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
                LSR, Sri Lanka
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

export default Cushome;