import React , {useState , useEffect} from "react";
import axios from "axios";
import _, { range } from "lodash";

const pageSize = 5;

function AllCustomers(){

const [customers, setCustomers] = useState([]);
const [paginatedCustomers, setpaginatedCustomers] = useState([]);

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
   
const pageCount = customers? Math.ceil(customers.length/pageSize) :0;
const pages = range(1,pageCount+1);

    return (
        <div className="container"><br/>
            <h2>All Customers</h2><br></br>
                 <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedCustomers.map((customer,index) => (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{customer.name}</td>
                                <td>{customer.age}</td>
                                <td>{customer.gender}</td>
                                <td>
                                    <a className="btn btn-warning" href={'/update/${customers.id}'}>
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" href="#">
                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
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

                 <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Customer</a></button>
        </div>
    )
}
          

export default AllCustomers;