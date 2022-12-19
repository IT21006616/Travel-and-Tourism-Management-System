import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function Transreport({search,setSearch}){

    const [transport,settransport] = useState([]);


    const[value , setValue] = useState('');
    const[tableFilter , setTableFilter]= useState([]);
    
    
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


useEffect(() => {

    function gettransport()
    {
       
  
      axios.get("http://localhost:8070/transport/").then((res) => {
  
  
         settransport(res.data);
  
      }).catch((err) => {
  
         alert(err.message);
      })
    }
  
    gettransport();
    },[]); 

   


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
        <h2 className="aling topic-report">Annual Report</h2>

        <table className="table table-success table-striped">
              <thead>
                  <tr>
                      <th scope="col">Vehicle id</th>
                      <th scope="col">Vehicle registration number</th>
                      <th scope="col">Vehicle name</th>
                      <th scope="col">Vehicle owner</th>
                      <th scope="col">Vehicle price</th>
                      <th scope="col">Vehicle description</th>
                      
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((transport,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          <td>{transport.vreg}</td>
                          <td>{transport.vname}</td>
                          <td>{transport.vowner}</td>
                          <td>{transport.vprice}</td>
                          <td>{transport.vdescription}</td>
                          
                          
                      </tr>
                  ))
                :
                transport.map((transport,id) => (
                  <tr key={id}>
                      <td>{id}</td>
                          <td>{transport.vreg}</td>
                          <td>{transport.vname}</td>
                          <td>{transport.vowner}</td>
                          <td>{transport.vprice}</td>
                          <td>{transport.vdescription}</td>
                      
                      
                  </tr>
              ))
                }
              </tbody>
           </table>
  </div>


  </div>

  )
};