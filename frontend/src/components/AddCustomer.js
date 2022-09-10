import React,{useState} from "react";
import axios from "axios";

export default function AddCustomer(){

   const[name , setName] = useState("");
   const[age , setAge] = useState("");
   const[gender , setGender] = useState("");


   function sendData (e) {
      e.preventDefault();
      
      const newCustomer = {
        name,
        age,
        gender
      }

      axios.post("http://localhost:8070/customer/add",newCustomer).then(()=>{
        alert("Customer Added")

        setName("");
        setAge("");
        setGender("");
        
      }).catch((err)=>{
        alert(err)
      })

   }
    
    
    return(
        <div className="container"><br></br>
        <h2>Add Customer Details</h2>

        <form onSubmit={sendData}>
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