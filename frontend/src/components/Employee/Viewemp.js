import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";
function Viewemp(userId) {

  const [Employee, setemployee] = useState([]);
  const [fristname, setfristname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [nationality, setnationality] = useState("");
  const [phone, setphone] = useState("");
  const [position, setposition] = useState("");

  const params = useParams();


  useEffect(() => {
    getEmployeeDetails();
  }, [])

  const getEmployeeDetails = async () => {
    // console.warn(params)
    let result = await fetch(`http://localhost:8070/Employee/get/${params.id}`);
    // setemployee(user.)
    const { user } = await result.json();
    console.log(user)
    // setemployee(user.data);
    setfristname(user.fristname)
    setlastname(user.lastname)
    setemail(user.email)
    setnationality(user.nationality)
    setphone(user.phone)
    setposition(user.position)

  }

  function Viewemp(e) {
    e.preventDefault();



    const Viewemp = {
      fristname,
      lastname,
      email,
      nationality,
      phone,
      position,
    }

  }


  return (

    <div style={{
      backgroundImage: `url(../images/backg.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '870px'
    }}>

      <div className="viewemp">
        <br></br>
        <center><h3>Employee Details</h3></center><br></br></div>
      <div className="viewpp" >
        <table className="table table-light" >



          <tbody>
            <tr>
              <label for="fname" className="form-label" >First Name : </label><label for="fnameq" className="form-label" > {fristname} </label>
            </tr>
            <tr>
              <label for="lname" className="form-label">Last Name : </label> <label for="lnameq" className="form-label" > {lastname}</label>
            </tr>
            <tr>
              <label for="exampleInputEmail1" className="form-label">Email address : </label> <label for="emailq" className="form-label" > {email}</label>
            </tr>
            <tr>
              <label for="nationality" className="form-label">Address : </label> <label for="nationq" className="form-label" > {nationality} </label>
            </tr>
            <tr>
              <label for="phone" className="form-label">Phone Number : </label><label for="phoneq" className="form-label" >  {phone}</label>
            </tr>
            <tr>
              <label for="position" className="form-label">Position : </label> <label for="posq" className="form-label" > {position} </label>
            </tr>





          </tbody>
        </table>
        <Link to={'/all'} >
          <button className="btn btn-success" data-dismiss="modal" style={{ textDecoration: 'none', color: 'white', float: 'center' }} ><b>Close</b></button>

        </Link>
      </div>
      <br></br>



    </div>


  )

}

export default Viewemp;