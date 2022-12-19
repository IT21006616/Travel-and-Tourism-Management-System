import React,{useState , useEffect} from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


export default function Allpayment(){

    const navigate = useNavigate();

const [payaments,setpayment] = useState([]);

const[value , setValue] = useState('');
const[tableFilter , setTableFilter]= useState([]);



const filterData = (e) =>{
  if(e.target.value != ""){
      setValue(e.target.value);
      const filterTable = payaments.filter(o=>Object.keys(o).some(k=>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
          ));
          setTableFilter([...filterTable])
  }else{
      setValue(e.target.value);
      setpayment([...payaments])
  }
}

useEffect(() => {

  function getpayment()
  {
     

    axios.get("http://localhost:8070/Payment/").then((res) => {


       setpayment(res.data);

    }).catch((err) => {

       alert(err.message);
    })
  }

  getpayment();
  },[]); 

  function deletePayment(userId)
  {
    axios.delete(`http://localhost:8070/Payment/delete/${userId}`).then((res) => {
        
    
   // alert("Deleted") 

    Swal.fire({
      title: 'Deleted!',
      text: 'Customer Deleted!',
      icon: 'error',
      showConfirmButton: false,
      timer: 9000
  }
  )
    navigate("/allPayment");
    
       res.json().then((res) => {
            console.warn(res)
        })
    })
}


    return(

      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}>LSR</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
          </li>
         <li className="nav-item">
            <a className="nav-link" href="#">Payment Details</a>
         </li>  
          
         
        </ul>
        </div>
                   <a class="btn btn-secondary" type="submit" justify-content-md-end href="/">Log out</a>
           </div>
        
        
        
    </nav> 

      <div className="container"><br/>
      <h2>Payment Management</h2><br></br>

      <div class="input-group rounded">

            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value}
                onChange={filterData}
             />
             
             <span class="input-group-text border-0" id="search-addon">
               <i class="fas fa-search"></i>
             </span>
            </div>

            <br></br>

      <button className="btn btn-success"><a href="/PayReport" style={{textDecoration:'none',color:'white'}}>Genarate Report</a></button><br></br>
      

           <br></br><table className="table table-success table-striped">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Frist Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Nationality</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Total Number of Days</th>
                      <th scope="col">Price</th>
                      <th scope="col">Pname</th>
                      <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((Payment,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          <td>{Payment.fristname}</td>
                          <td>{Payment.lastname}</td>
                          <td>{Payment.email}</td>
                          <td>{Payment.nationality}</td>
                          <td>{Payment.phone}</td>
                          <td>{Payment.tnds}</td>
                          <td>{Payment.price}</td>
                          <td>{Payment.pname}</td>
                          
                          <td>
                              <a className="btn btn-warning" href={'/payment/Update/:id'}>
                                  <i className="fas fa-edit"></i>&nbsp;Edit
                              </a>
                              &nbsp;
                              <button className="btn btn-danger" onClick={()=> deletePayment(Payment._id)}>
                              <i className="far fa-trash-alt" ></i>&nbsp;Delete

                          </button>
                          </td>
                      </tr>
                  ))
                :
                payaments.map((Payment,id) => (
                  <tr key={id}>
                      <td>{id}</td>
                      <td>{Payment.fristname}</td>
                      <td>{Payment.lastname}</td>
                      <td>{Payment.email}</td>
                      <td>{Payment.nationality}</td>
                      <td>{Payment.phone}</td>
                      <td>{Payment.tnds}</td>
                      <td>{Payment.price}</td>
                      <td>{Payment.pname}</td>
                      
                      <td>
                          <a className="btn btn-warning" href={`/payment/Update/${Payment._id}`}>
                              <i className="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <button className="btn btn-danger" onClick={()=> deletePayment(Payment._id)}>
                          <i className="far fa-trash-alt" ></i>&nbsp;Delete

                      </button>
                      </td>
                  </tr>
              ))
                }
              </tbody>
           </table>
         </div>   
  </div>
      
    )
}