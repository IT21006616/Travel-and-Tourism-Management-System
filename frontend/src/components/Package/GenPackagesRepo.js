import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function Packagesreport({search,setSearch}){

    const [packages,setPackages] = useState([]);


     const[value , setValue] = useState('');
     const[tableFilter , setTableFilter]= useState([]);
    
    
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


/*  const [payment, setstaffde] = useState([
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

    function getPackages()
    {
       
  
      axios.get("http://localhost:8070/Package/").then((res) => {
  
  
         setPackages(res.data);
  
      }).catch((err) => {
  
         alert(err.message);
      })
    }
  
    getPackages();
    },[]); 

 /* const renderClass = (Payment, id) => {
    return (
      <tr key={id}>
       
        <td>{Payment.fristname}</td>
        <td>{Payment.lastname}</td>
        <td>{Payment.email}</td> 
        <td>{Payment.nationality}</td>
        <td>{Payment.phone}</td>
        <td>{Payment.tnds}</td>
      </tr>
    );
  };*/

  return (
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
            <a className="nav-link" href="#">All Package</a>
            </li>
        </ul>
        
      </div>
    </div>
  </nav>


    <div className="container">
    <div className="newstaff">
    <div className="marginaling"><br></br>
    <h2 className="aling topic-report">Annual Report</h2>
    <button onClick={handlePrint}>Download PDF</button>
    </div><br></br>
    <div className="scroll-bgn"/>
   <div className="scroll-divn"/>
   <div className="scroll-objectn"/>
   <div className="wrapper-flex "/>
   
  <div ref={componentRef}>
        

        <table className="table table-success table-striped">
              <thead>
                  <tr>
                      <th scope="col">Package ID</th>
                      <th scope="col">Package Name</th>
                      <th scope="col">Package Description</th>
                      <th scope="col">Package Price</th>
                      
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((Package,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          <td>{Package.name}</td>
                          <td>{Package.description}</td>
                          <td>{Package.price}</td>
            
                          
                          
                      </tr>
                  ))
                :
                packages.map((Package,id) => (
                  <tr key={id}>
                      <td>{id}</td>
                      <td>{Package.name}</td>
                      <td>{Package.description}</td>
                      <td>{Package.price}</td>
                     
                      
                     
                  </tr>
              ))
                }
              </tbody>
           </table>
  </div>


  </div>
</div>
</div>

  )
};