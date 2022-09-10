import React , {useState , useEffect} from "react";
import axios from "axios";

export default function EditCustomer(props) {

const[name , setName] = useState("");
const[age , setAge] = useState("");
const[gender , setGender] = useState("");


const [customers, setCustomers] = useState([]);



function editData (e) {
    e.preventDefault();
    const userId = this.props.match.params.id;

    const updateCustomer = {
        name:name,
        age:age,
        gender:gender
    }

 }

useEffect(() => {
    function updateCustomers() {
        axios.put("http://localhost:8070/customer/update/${id}").then((res) => {
            setCustomers(res.data);
            
        }).catch((err) => {
            alert(err.message);
        })
    }
    updateCustomers();
}, []);

    return (
        <div className="container"><br></br>
        <h2>Edit Customer Details</h2>

        <form onSubmit={editData}>
          <div className="form-group">

             <label for="name">Customer Name</label>
             <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Customer name" 
             onChange={(e)=>{

                 setName(e.target.value);

             }}/>
          </div>

          <div className="form-group">
             <label for="age">Customer Age</label>
             <input type="text" className="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter Customer Age"
             onChange={(e)=>{

                 setAge(e.target.value);

             }}/>
          </div>

          <div className="form-group">
             <label for="gender">Customer Gender</label>
             <input type="text" className="form-control" id="gender" aria-describedby="emailHelp" placeholder="Enter Customer Gender"
             onChange={(e)=>{

                 setGender(e.target.value);

             }}/>
          </div>

         <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}