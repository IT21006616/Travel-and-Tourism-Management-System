import React , {useState , useEffect, useReducer} from "react";
import axios from "axios";
import _, { range, result } from "lodash";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";




function AllPackages(){

        
    const [packages, setPackages] = useState([]);
    const[value , setValue] = useState('');
    const[tableFilter , setTableFilter]= useState([]);

    const navigate = useNavigate();

    const filterData = (e) =>{
        if(e.target.value != ""){
            setValue(e.target.value);
            const filterTable = packages.filter(o=>Object.keys(o).some(k=>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
                ));
                setTableFilter([...filterTable])
        }else{
            setValue(e.target.value);
            setPackages([...packages])
        }
    }


    useEffect(() => {
        function getPackages() {
            axios.get("http://localhost:8070/package/").then((res) => {
                setPackages(res.data);
            }).catch((err) => {
                alert(err.message);
            })}
        getPackages();
    
    }, []);

    function deletePackage(packageId){
        axios.delete(`http://localhost:8070/package/delete/${packageId}`).then((res) => {
            
            Swal.fire({
                title: 'Deleted!',
                text: 'Package is Deleted!',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            }
            )

            navigate("/allPackage");
           
           setTimeout(function(){
            window.location.reload();
         }, 1700);
           
            
            
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
              <a className="nav-link" href="#">Package Details</a>
           </li>  
            
           
          </ul>
          </div>
                     <a class="btn btn-secondary" type="submit" justify-content-md-end href="/">Log out</a>
             </div>
          
          
          
      </nav> 
       
            


        <div className="container"><br/>
            <h2>Package Management</h2><br></br>

            <div class="d-flex">
            <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value}
                onChange={filterData}/>
          
               
            </div>
            </div>
            <br></br>
            
            <br></br>

            <button className="btn btn-success"><a href="/addPackage" style={{textDecoration:'none',color:'white'}}>Add New Package</a></button><br></br>

            <br></br>
            <button className="btn btn-success"><a href="/PackReport" style={{textDecoration:'none',color:'white'}}>Genarate Report</a></button><br></br>

                 <br></br><table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price($)</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {value.length > 0 ? tableFilter.map((Package,id) => {
                        return(
                                    
                      <tr key={id}>
                          <td>{id+1}</td>
                          <td>{Package.name}</td>
                          <td>{Package.description}</td>
                          <td>{Package.price}</td>
                          
                          <td>
                              <a className="btn btn-warning" href={'/package/update/:id'}>
                                  <i className="fas fa-edit"></i>&nbsp;Edit
                              </a>
                              &nbsp;
                              <button className="btn btn-danger" onClick={()=> deletePackage(Package._id)}>
                              <i className="far fa-trash-alt" ></i>&nbsp;Delete

                          </button>
                          </td>
                      </tr>
                        )
                        })
                :
                packages.map((Package,id) => {
                    return(
                  <tr key={id}>
                      <td>{id+1}</td>
                        <td>{Package.name}</td>
                        <td>{Package.description}</td>
                        <td>{Package.price}</td>
                        
                      <td>
                          <a className="btn btn-warning" href={`/package/update/${Package._id}`}>
                              <i className="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <button className="btn btn-danger" onClick={()=> deletePackage(Package._id)}>
                          <i className="far fa-trash-alt" ></i>&nbsp;Delete

                      </button>
                      </td>
                  </tr>
                    )
})
}
                    </tbody>
                 </table>

                   

                 
        </div>
        </div>
       

    )
}
export default AllPackages;