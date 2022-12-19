import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function EditEmployee(userId) {

   const [Employee , setemployee] = useState([]);
   const[fristname , setfristname] = useState("");
   const[lastname , setlastname] = useState("");
   const[email, setemail] = useState("");
   const[nationality, setnationality] = useState("");
   const[phone, setphone] = useState("");
   const [position, setposition] = useState("");

   const navigate = useNavigate();

   const params = useParams();


  useEffect(()=>{
    getEmployeeDetails();
  },[])

  const getEmployeeDetails = async()=>{
    // console.warn(params)
    let result = await fetch(`http://localhost:8070/Employee/get/${params.id}`);
    // setemployee(user.)
    const {user} = await result.json();
    console.log(user)
    // setemployee(user.data);
    setfristname(user.fristname)
    setlastname(user.lastname)
    setemail(user.email)
    setnationality(user.nationality)
    setphone(user.phone)
    setposition(user.position)

  }

  function updateEmployee (e) {
    e.preventDefault();



    const updateEmployee = {
      fristname,
      lastname,
      email,
      nationality,
      phone,
      position,
    }
        axios.put(`http://localhost:8070/Employee/update/${params.id}`,updateEmployee).then((res) => {
         //   alert("Employee Details Updated");

         Swal.fire({
          title: 'Sucess!',
          text: 'Employee Details Updated', 
          icon: 'success', 
          showConfirmButton: false, 
          timer: 1500})

          navigate("/allEmp");

            setemployee(res.data);
       
            
        }).catch((err) => {
            alert(err.message);
        })
}

      
    return(
      <div style={{
        backgroundImage: `url(../images/backg.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '870px'
      }}>


        <div className="container">
        <br></br>
        <br></br>
        <br></br>

  
  <form onSubmit={updateEmployee} tyle={{textDecoration:'none',color:'white'}} >
    <div className="mb-3">
  
      <label for="name" className="form-label" >First Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter Your FristName" value={fristname}
      onChange={(e) =>{
  
  
       setfristname(e.target.value);
  
      }}/>
  
    </div>
  
    <div className="mb-3">

  
      <label for="name" className="form-label">Last Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter Your LastName" value={lastname}
      onChange={(e) =>{
  
  
        setlastname(e.target.value);
   
       }}/>
  
    </div>
  
  <div className="mb-3">
  
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" placeholder="Enter Email" value={email}
      onChange={(e) =>{
  
  
        setemail(e.target.value);
   
       }}/>
    </div>
  
    <div className="mb-3">
  
      <label for="name" className="form-label">Address</label>
      <input type="text" className="form-control" id="Nationality" placeholder="Enter Your Address" value={nationality}
      onChange={(e) =>{
  
  
        setnationality(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" className="form-label">Phone Number</label>
      <input type="text" className="form-control" id="phone" placeholder="Enter Phone Number" value={phone}
      onChange={(e) =>{
  
  
        setphone(e.target.value);
   
       }}/>
  
    </div>
  
    <div className="mb-3">
  
      <label for="name" className="form-label">Position</label>
      <input type="text" className="form-control" id="position" placeholder="Enter Position" value={position}
      onChange={(e) =>{
  
  
        setposition(e.target.value);
   
       }} />
  
    </div>
    
  
  
    <button type="submit" className="btn btn-primary" > Update</button>
  </form>
          </div>
          </div>  
        
      )
     
    
}

export default EditEmployee;
