import React,{useState , useEffect} from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImEye } from 'react-icons/im';
import Swal from "sweetalert2";

export default function AllEmployees(){

    const navigate = useNavigate();

const [employees,setemployee] = useState([]);

const[value , setValue] = useState('');
const[tableFilter , setTableFilter]= useState([]); 

const filterData = (e) =>{
  if(e.target.value !== ""){
      setValue(e.target.value);
      const filterTable = employees.filter(o=>Object.keys(o).some(k=>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
          ));
          setTableFilter([...filterTable])
  }else{
      setValue(e.target.value);
      setemployee([...employees])
  }
}

useEffect(() => {

  function getemployee()
  {
     

    axios.get("http://localhost:8070/Employee/").then((res) => {


       setemployee(res.data);

    }).catch((err) => {

       alert(err.message);
    })
  //   setTimeout(function(){
  //     window.location.reload();
  // },1000);
  
  }

  getemployee();
  },[]); 

  function deleteEmployee(userId)
  {
    axios.delete(`http://localhost:8070/Employee/delete/${userId}`).then((res) => {
        
    
  //  alert("Deleted") 
  Swal.fire({
    title: 'Deleted!',
    text: 'Package is Deleted!',
    icon: 'error',
    showConfirmButton: false,
    timer: 1500
}
)
    navigate("/allEmp");
    
       res.json().then((res) => {
            console.warn(res)
        })
    })
    
}


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
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">Customer Info</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>

      <div className="container"><br/>
      
      <h2>Employee Management</h2><br></br>

      <div className="input-group rounded">

            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value}
                onChange={filterData}
             />
             
             <span className="input-group-text border-0" id="search-addon">
               <i className="fas fa-search"></i>
             </span>
            </div>

            <br></br>
            <br></br>
      
      <Link to={'/add'} >
        <button  className="btn btn-success"  style={{textDecoration:'none',color:'white',float: 'left'}} ><b>Add Employee</b></button>
      </Link>
      <br></br>
    
      

           <br></br><table className="table table-success table-striped">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Position</th>
                      <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
              {value.length > 0 ? tableFilter.map((Employee,id) => (
                   <tr key={id}>
                   <td>{id}</td>
                          <td>{Employee.fristname}</td>
                          <td>{Employee.lastname}</td>
                          <td>{Employee.email}</td>
                          <td>{Employee.nationality}</td>
                          <td>{Employee.phone}</td>
                          <td>{Employee.position}</td>
                          
                          <td>
                          <a className="btn btn-success"   href={`/employee/Viewemp/${Employee._id}`}>
                              <i className="fas fa-eddit"></i>&nbsp;View
                          </a>
                          &nbsp;
                              <a className="btn btn-warning" href={'/employee/Update/:id'}>
                                  <i className="fas fa-edit"></i>&nbsp;Edit
                              </a>
                              &nbsp;
                              <button className="btn btn-danger" onClick={()=> deleteEmployee(Employee._id)}>
                              <i className="far fa-trash-alt" ></i>&nbsp;Delete

                          </button>
                          </td>
                      </tr>
                  ))
                :
                employees.map((Employee,id) => (
                  <tr key={id}>
                      <td>{id}</td>
                      <td>{Employee.fristname}</td>
                      <td>{Employee.lastname}</td>
                      <td>{Employee.email}</td>
                      <td>{Employee.nationality}</td>
                      <td>{Employee.phone}</td>
                      <td>{Employee.position}</td>
                      
                      <td>
                        
                      <a className="btn btn-primary"  data-toggle="modal" data-target="#exampleModal" href={`/Viewemp/${Employee._id}`}>
                              <i className="fas fa-eddit"><ImEye/></i>&nbsp;View
                          </a>
                          &nbsp;
                          <a className="btn btn-warning" href={`employee/update/${Employee._id}`}>
                              <i className="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <Link to={'#'} >
                          <button className="btn btn-danger" onClick={()=> deleteEmployee(Employee._id)}>
                          <i className="far fa-trash-alt" ></i>&nbsp;Delete
                         
                      </button> </Link  >
                     </td>
                  </tr>
              ))
                }
              </tbody>
           </table>
           <br></br>
        
         {/* <a className="btn btn-success" href={`/rep`}>
                              <i className="fas fa-eddit"></i>&nbsp;Genarate Report
                          </a>    */}
                          <Link to={'#'} >
        <button  className="btn btn-success"  style={{textDecoration:'none',color:'white',float: 'left'}} ><b>Genarate Report</b></button>
      </Link>
      <br></br>
      </div>
  </div>
      
    )
}