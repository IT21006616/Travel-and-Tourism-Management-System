import React, {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";


export default function AddHotel(){

    const[name, setname] = useState("");
    const[email, setemail] = useState("");
    const[contact, setcontact] = useState("");
    const[address, setaddress] = useState("");

    const navigate = useNavigate();
    
    function sendData(e){
        e.preventDefault();
        
        const newHotel = {
            name,
            email,
            contact,
            address
        }

        axios.post("http://localhost:8070/hotel/add", newHotel).then((res)=>{
            Swal.fire({
                title: 'Added!',
                text: 'Hotel is added!',
                icon:'add',
                showLoaderOnConfirm: true,
                timer: 2000
            })
            navigate("/allHotel");
            setTimeout(function(){
                window.location.reload();
             }, 1700);
        }).catch((err)=>{
            alert(err)
        });

    }

    return(
        <div className="container">
            <form name="AddHotels" onSubmit={sendData}>
                <div>
                    <h1>
                        <b>Add Hotel</b>
                    </h1>
                </div>
                <div className="mb-3">
                    <label for="InputName" className="form-label">Hotel name</label>
                    <input required type="text" className="form-control" name="hName" id="hName" aria-describedby="nameHelp" placeholder="Enter the Hotel name"
                    onChange={(e)=>{
                        setname(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-3">
                    <label for="InputEmail" className="form-label">Email address</label>
                    <input required type="email" className="form-control" id="hEmail" aria-describedby="emailHelp" placeholder="Enter the e-mail address"
                    onChange={(e)=>{
                        setemail(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-3">
                    <label for="InputContact" className="form-label">Contact</label>
                    <input required type="tel" className="form-control" id="hContact" aria-describedby="contactHelp" placeholder="Enter contact number of the hotel"
                    onChange={(e)=>{
                        setcontact(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-3">
                    <label for="InputAddress" className="form-label">Address</label>
                    <input required type="text" className="form-control" id="hAddress" aria-describedby="addresstHelp" placeholder="Enter address of the hotel"
                    onChange={(e)=>{
                        setaddress(e.target.value);
                    }}
                    />
                </div>
                <button type="submit" id="hSubmit" className="btn btn-primary" >Add Hotel</button>
            </form>
        </div>
    );
}