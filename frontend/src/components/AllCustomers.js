import React , {useState , useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import _, { range, result } from "lodash";
import { alignPropType } from "react-bootstrap/esm/types";
import { useNavigate } from "react-router-dom";


const pageSize = 10;

function AllCustomers(){

    const navigate = useNavigate();

const [customers, setCustomers] = useState([]);

const [paginatedCustomers, setpaginatedCustomers] = useState([]);
const[value , setValue] = useState('');
const[tableFilter , setTableFilter]= useState([]);

const filterData = (e) =>{
    if(e.target.value != ""){
        setValue(e.target.value);
        const filterTable = customers.filter(o=>Object.keys(o).some(k=>
            String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
    }else{
        setValue(e.target.value);
        setCustomers([...customers])
    }
}

useEffect(() => {
    function getCustomers() {
        axios.get("http://localhost:8070/customer/").then((res) => {
            setCustomers(res.data);
            setpaginatedCustomers(_(res.data).slice(0).take(pageSize).value());
        }).catch((err) => {
            alert(err.message);
        })
    }
    getCustomers();
}, []);

/*const deleteCustomer = async(userId) =>{
    axios.delete('http://localhost:8070/customer/delete/:id');
    const newCustomer = customers.filter((customer)=>{
        return customer.userId !== userId;
    });
    setCustomers(newCustomer);
}*/
function deleteCustomer(userId){
    fetch(`http://localhost:8070/customer/delete/${userId}`,{
        method:'DELETE'
    }).then((res) => {
        Swal.fire({
            title: 'Deleted!',
            text: 'Customer Deleted!',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
        }
        )

        

        setTimeout(function(){
            window.location.reload();
         }, 1700);
    })
}


/*function getCustomer(userId) {
    fetch(`http://localhost:8070/customer/get/${userId}`,{
       method:'GET'
     }).then((res) => {
         setCustomer(res.data);
         
     }).catch((err) => {
         alert(err.message);
     })
 }*/

const pageCount = customers? Math.ceil(customers.length/pageSize) :0;
const pages = range(1,pageCount+1);

    return (
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
              <a className="nav-link" href="/all">Customer Details</a>
           </li>  
            
           
          </ul>
          </div>
                     <a class="btn btn-secondary" type="submit" justify-content-md-end href="/">Log out</a>
             </div>
          
          
          
      </nav> 

        <div className="container"><br/>
            <h2>Customer Management</h2><br></br>

            <div class="input-group rounded">

            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value}
                onChange={filterData}
             />
             
             <span class="input-group-text border-0" id="search-addon">
               <i class="fas fa-search"></i>
             </span>
            </div>
            <br></br>

            <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Customer</a></button><br></br>


            <br></br>
            <button className="btn btn-success"><a href="/cusRepo" style={{textDecoration:'none',color:'white'}}>Genarate Report</a></button><br></br>
            

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
                            <th scope="col">Action</th>
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
                                
                                <td>
                                    <a className="btn btn-warning"  href={'/update/:id'}>
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    
                                    <button className="btn btn-danger" onClick={()=> deleteCustomer(customer._id)}>
                                        <i className="far fa-trash-alt" ></i>&nbsp;Delete
                                    </button>
                                </td>
                            </tr>

                            )
                            
                            }) 
                            :
                            paginatedCustomers.map((customer,id) => {
                                return(
    
                                    <tr key={id}>
                                    <td>{id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.passport}</td>
                                    <td>{customer.age}</td>
                                    <td>{customer.gender}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.email}</td>
                                    
                                    <td>
                                        <a className="btn btn-warning" href={`/update/${customer._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={()=> deleteCustomer(customer._id)}>
                                            <i className="far fa-trash-alt" ></i>&nbsp;Delete
                                        </button>
                                    </td>
                                </tr>
    
                                )
                                
                                })
                            
                            }
                    </tbody>
                 </table>

                 <nav className="d-flex justify-content-center">
                   <ul className="pagination">
                    {
                        pages.map((page) => (
                            <li className="page-link">{page}</li>
                        ))
                    }
                       
                   </ul>
                 </nav>  

                 
        </div>
        </div>
        
    )
}

          

export default AllCustomers;





//function deleteCustomer(userId){
  //  axios.delete("http://localhost:8070/customer/delete/${userId}").then((res) => {
    //    result.json().then((res) => {
      //      console.warn(res)
       // })
    //})
//}