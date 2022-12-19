import React from "react";
import "./Box.css";
import {Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function AdminHome () {
    
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
                
            </ul>

            
            
          </div>
          <a class="btn btn-secondary" type="submit" justify-content-md-end href="/">Log out</a>
        </div>
      </nav>
      <br></br>

         <div class="container text-center">
          <div class="row row-cols-2 row-cols-lg-4 g-3 g-lg-3">
          <div class="col">
            <div class="card h-100">
              <img src="./images/admin/customer.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Customer Management</h5>
                <p class="card-text"></p>
              </div>
              <a type="button" class="btn btn-success" href="/all">Go</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
             <img src="./images/admin/Accommodation.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Accommodation Management</h5>
                <p class="card-text"></p>
              </div>
              <a type="button" class="btn btn-success" href="/allHotel">Go</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
             <img src="./images/admin/Transport.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Transport Management</h5>
                <p class="card-text"></p>
              </div>
              <a type="button" class="btn btn-success" href="/allVehicle">Go</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="./images/admin/Package.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Package Management</h5>
                <p class="card-text"></p>
              </div> 
              <a type="button" class="btn btn-success" href="/allPackage">Go</a>
            </div>
          </div>
          
          <div class="col">
            <div class="card h-100">
              <img src="./images/admin/payment.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Expenses Management</h5>
                <p class="card-text"></p>
              </div>
              <a type="button" class="btn btn-success" href="/allPayment">Go</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="./images/admin/Itinerary.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Itinerary Management</h5>
                <p class="card-text"></p>
              </div>
              <button type="button" class="btn btn-success">Go</button>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="./images/admin/Reservation.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Reservation Management</h5>
                <p class="card-text"></p>
              </div>
              <a type="button" class="btn btn-success" href="/allRes">Go</a>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="./images/admin/Employee.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Employee Management</h5>
                <p class="card-text"></p>
              </div>
              <a type="button" class="btn btn-success" href="/allEmp">Go</a>
            </div>
          </div>

        </div>
        </div>
        </div>
      
        
        );
    };

export default AdminHome;

