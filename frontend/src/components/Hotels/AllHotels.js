import React , {useState , useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import _, { range, result } from "lodash";
import { alignPropType } from "react-bootstrap/esm/types";
import { useNavigate } from "react-router-dom";


const pageSize = 10;

function AllHotels(){

    const navigate = useNavigate();

const [hotels, sethotels] = useState([]);

const [paginatedhotels, setpaginatedhotels] = useState([]);
const[value , setValue] = useState('');
const[tableFilter , setTableFilter]= useState([]);

const filterData = (e) =>{
    if(e.target.value != ""){
        setValue(e.target.value);
        const filterTable = hotels.filter(o=>Object.keys(o).some(k=>
            String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
    }else{
        setValue(e.target.value);
        sethotels([...hotels])
    }
}

useEffect(() => {
    function gethotels() {
        axios.get("http://localhost:8070/hotel/").then((res) => {
            sethotels(res.data);
            setpaginatedhotels(_(res.data).slice(0).take(pageSize).value());
        }).catch((err) => {
            alert(err.message);
        })
    }
    gethotels();
}, []);

/*const deletehotel = async(userId) =>{
    axios.delete('http://localhost:8070/hotel/delete/:id');
    const newhotel = hotels.filter((hotel)=>{
        return hotel.userId !== userId;
    });
    sethotels(newhotel);
}*/
function deletehotel(userId){
    fetch(`http://localhost:8070/hotel/delete/${userId}`,{
        method:'DELETE'
    }).then((res) => {
        Swal.fire({
            title: 'Deleted!',
            text: 'hotel Deleted!',
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


/*function gethotel(userId) {
    fetch(`http://localhost:8070/hotel/get/${userId}`,{
       method:'GET'
     }).then((res) => {
         sethotel(res.data);
         
     }).catch((err) => {
         alert(err.message);
     })
 }*/

const pageCount = hotels? Math.ceil(hotels.length/pageSize) :0;
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
              <a className="nav-link" href="/allHotels">hotel Details</a>
           </li>  
            
           
          </ul>
          </div>
                     <a class="btn btn-secondary" type="submit" justify-content-md-end href="/">Log out</a>
             </div>
          
          
          
      </nav> 

        <div className="container"><br/>
            <h2>hotel Management</h2><br></br>

            <div class="input-group rounded">

            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value}
                onChange={filterData}
             />
             
             <span class="input-group-text border-0" id="search-addon">
               <i class="fas fa-search"></i>
             </span>
            </div>
            <br></br>

            <button className="btn btn-success"><a href="/addHotel" style={{textDecoration:'none',color:'white'}}>Add New hotel</a></button><br></br>


            <br></br>
            <button className="btn btn-success"><a href="/HotelReport" style={{textDecoration:'none',color:'white'}}>Genarate Report</a></button><br></br>
            

            <br></br> <table className="table table-success table-striped">
                    <thead><br></br>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        

                        {value.length > 0 ? tableFilter.map((hotel,id) => {
                            return(

                                <tr key={id}>
                                <td>{id}</td>
                                <td>{hotel.name}</td>
                                <td>{hotel.email}</td>
                                <td>{hotel.contact}</td>
                                <td>{hotel.address}</td>
                                <td>
                                    <a className="btn btn-warning"  href={'/hotel/update/:id'}>
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    
                                    <button className="btn btn-danger" onClick={()=> deletehotel(hotel._id)}>
                                        <i className="far fa-trash-alt" ></i>&nbsp;Delete
                                    </button>
                                </td>
                            </tr>

                            )
                            
                            }) 
                            :
                            paginatedhotels.map((hotel,id) => {
                                return(
    
                                    <tr key={id}>
                                    <td>{id}</td>
                                    <td>{hotel.name}</td>
                                    <td>{hotel.email}</td>
                                    <td>{hotel.contact}</td>
                                    <td>{hotel.address}</td>
                                    <td>
                                        <a className="btn btn-warning" href={`/hotel/update/${hotel._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={()=> deletehotel(hotel._id)}>
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

          

export default AllHotels;
//<noscript>You need to enable JavaScript to run this app.</noscript>