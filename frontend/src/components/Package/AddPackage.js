import React,{useState} from "react";
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBSelect,MDBRadio}from 'mdb-react-ui-kit';
import axios from "axios";
import { Card, Container, Row, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function AddPackage(){

   
   const[name , setName] = useState("");
   const[description , setDescription ]= useState("");
   const[price , setPrice] = useState("");

const initialValues = { name: ""};
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [PriceErr, setPriceNoErr] = useState("");

const navigate = useNavigate();



/*const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

 
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Package name is required!";
    }

    return errors;
  };*/

    function sendData (e) {

    e.preventDefault();

      //const priceValid = PriceValidation();
      const newPackage = {name,description,price}
      
    

      axios.post("http://localhost:8070/package/add",newPackage).then(()=>{
        Swal.fire({
          title: 'Sucess!',
          text: 'Package Added',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
       
        navigate("/allPackage");
        /*if (response.ok) {
          Swal.fire({
              title: 'Success!',
              text: `${message}`,
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
          }
          ).then(() => {
              window.location.reload();
              window.location.replace("/all");
          })
      }
      else {
          Swal.fire({
              title: 'Oops!',
              text: `${message}`,
              icon: 'error',
              showConfirmButton: false,
              timer: 1500
          })
      }*/
        
        //console.log(newPackage);

      }).catch((err)=>{

        alert(err)

      })}

     /* const NameValidation = () => {

        const NameErr = {}; //State
        let teleValid = true; //setting flag

        if (mobileNo.trim().length > 10) {

            NameErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
            nameValid = false;
        } else if (mobileNo.trim().length < 10) {
            TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
            teleValid = false;
        }

        setTeleNoErr(TeleErr);//update error objects
        return teleValid;

    }*/

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
                <li className="nav-item">
                <a className="nav-link" href="/allPackage">All Package</a>
                </li>
            </ul>
            
          </div>
        </div>
      </nav>

      
       
        <div className="container" ><br></br>
            <h2>Add Package</h2>
    
            <MDBContainer fluid>
            <MDBRow className='justify-content-center align-items-center md-5' >
            <MDBCard >
    
                <form onSubmit={sendData}>


                <div className="form-group">
                <br></br>
                <MDBCol md='6'>
                <label for="name" >Package Name</label>
                <input required type="text"  className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Package Name" 
                onChange={(e)=>{
        
                    setName(e.target.value);
    
                }}/>
                </MDBCol>
                </div> <p>{formErrors.username}</p><br></br>
            
                <div className="form-group">
                <MDBCol md='6'>
                    <label for="description">Package Description</label>
                    <textarea required class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Package Description"
                    onChange={(e)=>{
        
                        setDescription(e.target.value);
        
                    }}/>
                    </MDBCol>
                </div><br></br>
            
               
               
                <div className="form-group">
                <MDBCol md='6'>
                    <label for="price">Package Price</label>
                    <div className="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input required type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Enter Package Price"  min="0" max="9" 
                    onChange={(e)=>{
        
                        setPrice(e.target.value);
        
                    }}/></div>
                    
                    </MDBCol>            
                    
                </div>
                <br></br> 

            
                <button type="submit" className="btn btn-success">ADD PACKAGE</button><br></br>
            

            </form><br></br>
            </MDBCard>
            </MDBRow>
            </MDBContainer>
        </div>
        </div>
        
    )
    

}