import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Allreservation() {

  const navigate = useNavigate();

  const [reservation, setreservation] = useState([]);

  const [value, setValue] = useState('');
  const [tableFilter, setTableFilter] = useState([]);

  const filterData = (e) => {
    if (e.target.value != "") {
      setValue(e.target.value);
      const filterTable = reservation.filter(o => Object.keys(o).some(k =>
        String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
      ));
      setTableFilter([...filterTable])
    } else {
      setValue(e.target.value);
      setreservation([...reservation])
    }
  }

  useEffect(() => {

    function getreservation() {


      axios.get("http://localhost:8070/reserve/").then((res) => {


        setreservation(res.data);

      }).catch((err) => {

        alert(err.message);
      })
    }

    getreservation();
  }, []);

  function deletereservation(userId) {
    axios.delete(`http://localhost:8070/reserve/delete/${userId}`).then((res) => {


      alert("Deleted");
      window.location.reload();

      res.json().then((res) => {
        console.warn(res)
      })
    })
  }


  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>LSR </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>

            </ul>
          </div>
          <a class="btn btn-secondary" type="submit" justify-content-md-end href="/">Log out</a>
        </div>
      </nav>

      <div className="container"><br />
        <h2>Reservation Management</h2><br></br>

        <div class="input-group rounded">

          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value}
            onChange={filterData}
          />

          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>

        <br></br>

        <button className="btn btn-success"><a href="/addRes" style={{ textDecoration: 'none', color: 'white' }}>Add Reservation</a></button><br></br>
        <br></br>
        <button className="btn btn-success"><a href="/ResvRepo" style={{textDecoration:'none',color:'white'}}>Genarate Report</a></button><br></br>


        <br></br><table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">HotelID</th>
              <th scope="col">Roomtype</th>
              <th scope="col">AvailableRooms</th>
              <th scope="col">Capacity</th>
              <th scope="col">Price</th>
              <th scope="col">Discount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {value.length>0? tableFilter.map((reservation,id) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{reservation.HotelID}</td>
                <td>{reservation.Roomtype}</td>
                <td>{reservation.AvailableRooms}</td>
                <td>{reservation.Capacity}</td>
                <td>{reservation.Price}</td>
                <td>{reservation.Discount}</td>

                <td>
                  <a className="btn btn-warning" href={'/reservation/Update/:id'}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button className="btn btn-danger" onClick={() => deletereservation(reservation._id)}>
                    <i className="far fa-trash-alt" ></i>&nbsp;Delete

                  </button>
                </td>
              </tr>
            ))
            :
            reservation.map((reservation,id) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{reservation.HotelID}</td>
                <td>{reservation.Roomtype}</td>
                <td>{reservation.AvailableRooms}</td>
                <td>{reservation.Capacity}</td>
                <td>{reservation.Price}</td>
                <td>{reservation.Discount}</td>

                <td>
                  <a className="btn btn-warning" href={`/reservation/update/${reservation._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button className="btn btn-danger" onClick={() => deletereservation(reservation._id)}>
                    <i className="far fa-trash-alt" ></i>&nbsp;Delete

                  </button>
                </td>
              </tr>
            ))
            

              // :
              // tableFilter.map((reservation,id) => (
              //     <tr key={id}>
              //         <td>{id}</td>
              //         <td>{reservation.HotelID}</td>
              //         <td>{reservation.Roomtype}</td>
              //         <td>{reservation.AvailableRooms}</td>
              //         <td>{reservation.Capacity}</td>
              //         <td>{reservation.Price}</td>
              //         <td>{reservation.Discount}</td>

              //         <td>
              //             <a className="btn btn-warning" href={'/Update'}>
              //                 <i className="fas fa-edit"></i>&nbsp;Edit
              //             </a>
              //             &nbsp;
              //             <button className="btn btn-danger" onClick={()=> deletereservation(reservation._id)}>
              //             <i className="far fa-trash-alt" ></i>&nbsp;Delete

              //         </button>
              //         </td>
              //     </tr>
              // ))
            }
          </tbody>
        </table>

      </div>


    </div>

  )
}