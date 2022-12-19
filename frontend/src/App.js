import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AdminHome from './components/AdminHome';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Header from './components/Header';
import AddCustomer from './components/AddCustomer';
import AllCustomers from './components/AllCustomers';
import EditCustomer from './components/EditCustomer';
import Cushome from './components/CHome/Cushome';
import Landing from './components/Landing';
import Cusreport from './components/GenCusRepo';
import CHotel from './components/CHome/CHotel';
import Hotel1 from './components/Hotels/MarinaPassikudah';
import Hotel2 from './components/Hotels/PassiIVillasPassikudah';
import Hotel3 from './components/Hotels/CatamaranB';
import Hotel4 from './components/Hotels/RangiriDamb';
import Hotel5 from './components/Hotels/MarinaBenthota';
import Hotel6 from './components/Hotels/KudaOyaCottage';
import Hotel7 from './components/Hotels/RiversideAluthgama';
import AllHotels from './components/Hotels/AllHotels';
import AddHotel from './components/Hotels/AddHotels';
import EditUpdateH from './components/Hotels/HotelUpdate';
import AllPackages from './components/Package/AllPackages';
import AddPackage from './components/Package/AddPackage';
import CusPackages from './components/Package/CusPackages';
import EditPackage from './components/Package/UpdatePackage';
import HDetailreport from './components/Hotels/GenHotelRepo';
import Packagesreport from './components/Package/GenPackagesRepo';
import Expensesreport from './components/Payment/GenExpensesRepo';
import Addcustomerinfo from './components/Payment/Addcustomerinfo';
import Allpayment from './components/Payment/Allpayment';
import EditPayment from './components/Payment/Edit';
import VehiclePackages from './components/Transport/VehiPackages';
import Addtransportinfo from './components/Transport/Addvehicle';
import Alltransport from './components/Transport/Allvehicle';
import Edittransport from './components/Transport/TransportEdit';
import Transreport from './components/Transport/GenTranRepo';
import AddEmployee from './components/Employee/AddEmployee';
import AllEmployees from './components/Employee/AllEmployees';
import EditEmployee from './components/Employee/EmpEdit';
import Viewemp from './components/Employee/Viewemp';
import Empreport from './components/Employee/GenEmpRepo';
import EditUpdateHotel from './components/Hotels/HotelUpdate';
import Allreservation from './components/Reservation/AllReservation';
import Addreservationinfo from './components/Reservation/ADDReservation';
import Editreservation from './components/Reservation/EditReservation';
import ResRepo from './components/Reservation/ResvReport';





function App() {
  return (
    <Router>
          <nav> 
            
          </nav>   
          <Routes>  
          <Route path ="/" element={<Landing/>}/>  
          <Route path ="/cus" element={<Cushome/>}/>   
          <Route path ="/cusRepo" element={<Cusreport/>}/>    
          <Route path ="/Home" element={<AdminHome/>}/>
          <Route path = "/Reg" element={<Register/>}/>
          <Route path = "/Log" element={<Login/>}/>
          <Route path="/add" element={<AddCustomer/>}/>
          <Route path="/all" element={<AllCustomers/>}/>
          <Route path="/update/:id" element={<EditCustomer/>}/>

          </Routes>

          <Routes> {/* for the Hotels */} 
                    
                    <Route path="/allHotel" element={<AllHotels/>} />
                    <Route path="/addHotel" element={<AddHotel/>} />
                    <Route path="/hotel/update/:id" element={<EditUpdateHotel/>} />
                    <Route path="/HotelReport" element={<HDetailreport/>} />
                    <Route path="/CHotel" element={<CHotel />} />
                    <Route path="/Hotel1" element={<Hotel1 />} />
                    <Route path="/Hotel2" element={<Hotel2 />} />
                    <Route path="/Hotel3" element={<Hotel3 />} />
                    <Route path="/Hotel4" element={<Hotel4 />} />
                    <Route path="/Hotel5" element={<Hotel5 />} />
                    <Route path="/Hotel6" element={<Hotel6 />} />
                    <Route path="/Hotel7" element={<Hotel7 />} />
                </Routes>

                <Routes>

                    <Route path = "/PackReport" element ={<Packagesreport/>}/>
                    <Route path ="/package" element={<CusPackages/>}/>
                    <Route path ="/addPackage" element={<AddPackage/>}/>
                    <Route path ="/allPackage" element={<AllPackages/>}/>
                    <Route path ="/package/update/:id" element={<EditPackage/>}/> 
                  
                 </Routes>

                 <Routes>
                    <Route path = "/PayReport" element ={<Expensesreport/>} />                 
                    <Route path = "/addCusInfo/:pacname" element ={<Addcustomerinfo/>} />
                    <Route path = "/allPayment" element = {<Allpayment/>} />
                    <Route path = "/payment/Update/:id" element = {<EditPayment/>} />
                    
                   
                </Routes>   

                  <Routes>
                       
                        <Route path = "/addVehicle" element ={<Addtransportinfo/>} />
                        
                        <Route path = "/allVehicle" element = {<Alltransport/>} />
                        <Route path = "/vehicles" element = {<VehiclePackages/>} />
                        <Route path = "/TransRepo" element = {<Transreport/>} />
                        
                        <Route path = "/vehicle/Update/:id" element = {<Edittransport/>} />

                    </Routes>

                    <Routes>
                        
                        <Route path = "/addEmp" element ={<AddEmployee/>} />
                        <Route path = "/allEmp" element = {<AllEmployees/>} />    
                        <Route path = "/employee/Update/:id" element = {<EditEmployee/>} />   
                        <Route path = "/employee/Viewemp/:id" element = {<Viewemp/>} />
                        <Route path = "/EmpRep" element = {<Empreport/>} />
                  </Routes> 


                  <Routes>
                        
                        <Route path = "/allRes" element ={<Allreservation/>} />
                        <Route path = "/addRes" element = {<Addreservationinfo/>} />    
                        <Route path = "/reservation/Update/:id" element = {<Editreservation/>} />   
                        <Route path = "/ResvRepo" element = {<ResRepo/>} />
                        
                  </Routes> 

    </Router>
  );
}

export default App;

