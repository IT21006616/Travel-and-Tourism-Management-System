import React from "react";
import{Bar} from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";
import config from "../../../config";
import ReactApexChart from "react-apexcharts";

function report (){
    const [Employee , setemployee] = useState([]);
    const[fristname , setfristname] = useState("");
    const[lastname , setlastname] = useState("");
    const[email, setemail] = useState("");
    const[nationality, setnationality] = useState("");
    const[phone, setphone] = useState("");
    const [position, setposition] = useState("");
    
   const params = useParams();

    useEffect(()=>{
        getEmployeeDetails();
      },[])
    
      const getEmployeeDetails = async()=>{
        // console.warn(params)
        let result = await fetch(`http://localhost:8070/Employee/get/${params.id}`);
        // setemployee(user.)
        const {user} = await result.json();
        console.log(user)
        // setemployee(user.data);
        setfristname(user.fristname)
        setlastname(user.lastname)
        setemail(user.email)
        setnationality(user.nationality)
        setphone(user.phone)
        setposition(user.position)
       
      }
    
      function report (e) {
        e.preventDefault();
    
    
    
        const report = {
          fristname,
          lastname,
          email,
          nationality,
          phone,
          position,
        }
            
    }
    

    const print = () => {

        window.print();
    }
        const [options, setOptions] = useState({
                colors : ['#199c9e'],
                chart: {type: 'bar',
                height: 350 },
                plotOptions: {
                     bar: { borderRadius: 4,
                            horizontal: false,
                          }
                         },
                    dataLabels: {
                               enabled: false},
                     xaxis: {
                                categories: [ ],
                            } });
                            
                
             const [data2, setData2] = useState([] );

    useEffect(() => {

        fetch(`${config.API_ENDPOINT}/api/product_return/byreason`)

            .then(async response => {

                let data = await response.json();

                console.log(data);


                let fristname = [];
                let userId = [];



                for(const d of data){

                    fristname.push(d.reason);


                }

                setData2(userId);

                setOptions({

                    ...options, xaxis: {categories : fristname}


                })
                // setData(data);

                })

            .catch((error) => {

                console.log(error);

            })

    }, []);

    



    return(
        <div>
            <h1>Report for reasons of returned products</h1>
            <div>

                {data2.length && <ReactApexChart style={{backgroundColor: "#ebfcfb", colors:['#F44336', '#E91E63', '#9C27B0']}} options={options} series={[{data : data2}]} type="bar" height={350} />}

        </div>

            <button className="btn btn-info bbbt mt-2" onClick={print}>Print Report</button>
        </div>
    )

    
}

export default report;