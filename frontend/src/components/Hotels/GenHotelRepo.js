import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function HDetailreport({search,setSearch}){

    const [hotels,setHotels] = useState([]);


     const[value , setValue] = useState('');
     const[tableFilter , setTableFilter]= useState([]);
    
    
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


/*  const [hotel, setstaffde] = useState([
    {
        fristname:"",
        lastname:"",
        email:"",
        nationality:"",
        phone:"",
        tnds:""
    },
  ]);
*/
  useEffect(() => {

    function getHotels()
    {
       
  
      axios.get("http://localhost:8070/hotel/").then((res) => {
  
  
         setHotels(res.data);
  
      }).catch((err) => {
  
         alert(err.message);
      })
    }
  
    getHotels();
    },[]); 

 /* const renderClass = (hotel, id) => {
    return (
      <tr key={id}>
       
        <td>{hotel.fristname}</td>
        <td>{hotel.lastname}</td>
        <td>{hotel.email}</td> 
        <td>{hotel.nationality}</td>
        <td>{hotel.phone}</td>
        <td>{hotel.tnds}</td>
      </tr>
    );
  };*/

  return (
    <div className="newstaff">
    <div className="marginaling">
    <button onClick={handlePrint}>Download PDF</button>
    </div>
    <div className="scroll-bgn"/>
   <div className="scroll-divn"/>
   <div className="scroll-objectn"/>
   <div className="wrapper-flex "/>
   
  <div ref={componentRef}>
        <h2 className="aling topic-report">Hotels detail Report</h2>

        <table className="table table-success table-striped">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Hotel Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact number</th>
                      <th scope="col">Address</th> 
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((hotel,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          <td>{hotel.name}</td>
                          <td>{hotel.email}</td>
                          <td>{hotel.contact}</td>
                          <td>{hotel.address}</td>                  
                      </tr>
                  ))
                :
                hotels.map((hotel,id) => (
                  <tr key={id}>
                      <td>{id}</td>
                          <td>{hotel.name}</td>
                          <td>{hotel.email}</td>
                          <td>{hotel.contact}</td>
                          <td>{hotel.address}</td>
                  </tr>
              ))
                }
              </tbody>
           </table>
  </div>


  </div>

  )
};