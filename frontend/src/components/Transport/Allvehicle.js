import React,{useState , useEffect} from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


export default function Alltransport(){

    const navigate = useNavigate();

const [transport,settransport] = useState([]);

const[value , setValue] = useState('');
const[tableFilter , setTableFilter]= useState([]);

const filterData = (e) =>{
  if(e.target.value !== ""){
      setValue(e.target.value);
      const filterTable = transport.filter(o=>Object.keys(o).some(k=>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
          ));
          setTableFilter([...filterTable])
  }else{
      setValue(e.target.value);
      settransport([...transport])
  }
}

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

  function deletetransport(userId)
  {
    axios.delete(`http://localhost:8070/transport/delete/${userId}`).then((res) => {

      Swal.fire({
        title: 'Deleted!',
        text: 'Deleted!',
        icon: 'error',
        showConfirmButton: false,
        timer: 9000
    }
    )
        
    
  //  alert("Deleted") 
    navigate("/allVehicle");
    
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
            <a className="nav-link" href="#">Vehicle Details</a>
         </li>  
          
         
        </ul>
        </div>
                   <a class="btn btn-secondary" type="submit" justify-content-md-end href="/">Log out</a>
           </div>
        
        
        
    </nav> 

      <div className="container"><br/>
      <h2>Transport Management</h2><br></br>

      <div class="input-group rounded">

            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value}
                onChange={filterData}
             />
             
             <span class="input-group-text border-0" id="search-addon">
               <i class="fas fa-search"></i>
             </span>
            </div>

            <br></br>

      <button className="btn btn-success"><a href="/addVehicle" style={{textDecoration:'none',color:'white'}}>Add New Vehicle</a></button><br></br>
      <br></br>
      <button className="btn btn-success"><a href="/TransRepo" style={{textDecoration:'none',color:'white'}}>Genarate Report</a></button><br></br>
      

           <br></br><table className="table table-success table-striped">
              <thead>
                  <tr>
                      <th scope="col">Vehicle id</th>
                      <th scope="col">Vehicle registration number</th>
                      <th scope="col">Vehicle name</th>
                      <th scope="col">Vehicle owner</th>
                      <th scope="col">Vehicle price</th>
                      <th scope="col">Vehicle description</th>
                      <th scope="col">Action</th>
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
                          
                          <td>
                              <a className="btn btn-warning" href={'/vehicle/Update/:id'}>
                                  <i className="fas fa-edit"></i>&nbsp;Edit
                              </a>
                              &nbsp;
                              <button className="btn btn-danger" onClick={()=> deletetransport(transport._id)}>
                              <i className="far fa-trash-alt" ></i>&nbsp;Delete

                          </button>
                          </td>
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
                      <td>
     
                          <a className="btn btn-warning" href={`/vehicle/Update/${transport._id}`}>
                              <i className ="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <button className="btn btn-danger" onClick={()=> deletetransport(transport._id)}>
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