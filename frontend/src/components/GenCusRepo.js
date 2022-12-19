import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function Cusreport({search,setSearch}){

    const [customers, setCustomers] = useState([]);


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
    function getCustomers() {
        axios.get("http://localhost:8070/customer/").then((res) => {
            setCustomers(res.data);
            
        }).catch((err) => {
            alert(err.message);
        })
    }
    getCustomers();
}, []);

   

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
            <a className="nav-link" href="/all">All Package</a>
            </li>
        </ul>
        
      </div>
    </div>
  </nav>

  <div className="container">
    <div className="newstaff">
    
    <div className="scroll-bgn"/>
   <div className="scroll-divn"/>
   <div className="scroll-objectn"/>
   <div className="wrapper-flex "/>
   
  <div ref={componentRef}>
        <h2 className="aling topic-report">Annual Report</h2>

        <div className="marginaling">
          <button onClick={handlePrint}>Download PDF</button>
        </div>

       <br></br> <table className="table table-success table-striped">
                    <thead><br></br>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Passport ID</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        

                        {value.length > 0 ? tableFilter.map((customer,id) => {
                            return(

                                <tr key={id}>
                                <td>{id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.passport}</td>
                                <td>{customer.age}</td>
                                <td>{customer.gender}</td>
                                <td>{customer.mobile}</td>
                                <td>{customer.email}</td>
                                
                                
                            </tr>

                            )
                            
                            }) 
                            :
                            customers.map((customer,id) => {
                                return(
    
                                    <tr key={id}>
                                    <td>{id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.passport}</td>
                                    <td>{customer.age}</td>
                                    <td>{customer.gender}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.email}</td>
                                    
                                    
                                </tr>
    
                                )
                                
                                })
                            
                            }
                    </tbody>
                 </table>
  </div>


  </div>
  </div>
  </div>

  )
};