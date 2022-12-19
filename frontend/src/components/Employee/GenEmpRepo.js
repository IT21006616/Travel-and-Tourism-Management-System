import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function Empreport({search,setSearch}){

    const [Employee, setemployee] = useState([]);


    const[value , setValue] = useState('');
    const[tableFilter , setTableFilter]= useState([]);
    
    
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


useEffect(() => {
    function getEmployee() {
        axios.get("http://localhost:8070/Employee/").then((res) => {
            setemployee(res.data);
            
        }).catch((err) => {
            alert(err.message);
        })
    }
    getEmployee();
}, []);

   



  return (
    <div style={{
        backgroundImage: `url(../images/backg.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '870px',
        
      }}>
    <div className="newstaff">
    <div className="marginaling">
    
    </div>
    <div className="scroll-bgn"/>
   <div className="scroll-divn"/>
   <div className="scroll-objectn"/>
   <div className="wrapper-flex "/>
   <br></br>
  <div ref={componentRef}>
        <h3 className="aling topic-report" style={{textDecoration:'none',color:'white',float: 'middle'}}>Employee Report</h3>

        <table className="table" style={{textDecoration:'none',color:'white',float: 'middle', width: '70%',align: 'center'}}>
                    <thead><br></br>
                        <tr>
                        <th scope="col">ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Position</th>
                
                            
                        </tr>
                    </thead>
                    <tbody>
                        

                        {value.length > 0 ? tableFilter.map((Employee,id) => {
                            return(

                                <tr key={id}>
                                <td>{id}</td>
                                <td>{Employee.fristname}</td>
                          <td>{Employee.lastname}</td>
                          <td>{Employee.email}</td>
                          <td>{Employee.nationality}</td>
                          <td>{Employee.phone}</td>
                          <td>{Employee.position}</td>
                                
                                
                            </tr>

                            )
                            
                            }) 
                            :
                            Employee.map((Employee,id) => {
                                return(
    
                                    <tr key={id}>
                                    <td>{id}</td>
                                    <td>{Employee.fristname}</td>
                          <td>{Employee.lastname}</td>
                          <td>{Employee.email}</td>
                          <td>{Employee.nationality}</td>
                          <td>{Employee.phone}</td>
                          <td>{Employee.position}</td>
                                    
                                    
                                </tr>
    
                                )
                                
                                })
                            
                            }
                    </tbody>
                 </table>
                 <button className="btn btn-success"  style={{textDecoration:'none',color:'white',float: 'left'}} onClick={handlePrint} >Download PDF</button>
  </div>


  </div>
</div>
  )
};
