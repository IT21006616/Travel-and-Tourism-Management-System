import React, { useRef } from 'react';
import { useEffect,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import axios from "axios"; 


export default function ResRepo({search,setSearch}){

    const [reservation, setreservation] = useState([]);


    const[value , setValue] = useState('');
    const[tableFilter , setTableFilter]= useState([]);
    
    
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


useEffect(() => {

    function getreservation()
    {
       
  
      axios.get("http://localhost:8070/reserve/").then((res) => {
  
  
         setreservation(res.data);
  
      }).catch((err) => {
  
         alert(err.message);
      })
    }
  
    getreservation();
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
                    <th scope="col">ID</th>
                    <th scope="col">HotelID</th>
                    <th scope="col">Roomtype</th>
                    <th scope="col">AvailableRooms</th>
                    <th scope="col">Capacity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount</th>
                        
                      
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((reservation,id) => (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{reservation.HotelID}</td>
                        <td>{reservation.Roomtype}</td>
                        <td>{reservation.AvailableRooms}</td>
                        <td>{reservation.Capacity}</td>
                        <td>{reservation.Price}</td>
                        <td>{reservation.Discount}</td>
                          
                          
                          
                      </tr>
                  ))
                :
                reservation.map((reservation,id) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{reservation.HotelID}</td>
                    <td>{reservation.Roomtype}</td>
                    <td>{reservation.AvailableRooms}</td>
                    <td>{reservation.Capacity}</td>
                    <td>{reservation.Price}</td>
                    <td>{reservation.Discount}</td>
                      
                  </tr>
              ))
                }
              </tbody>
           </table>
  </div>


  </div>

  )
};