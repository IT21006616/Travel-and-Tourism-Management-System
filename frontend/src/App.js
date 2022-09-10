import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AdminHome from './components/AdminHome';
import Header from './components/Header';
import AddCustomer from './components/AddCustomer';
import AllCustomers from './components/AllCustomers';
import EditCustomer from './components/EditCustomer';


function App() {
  return (
    <Router>
          <nav>
            <Header/> 
            
          </nav>   
          <Routes>        
          <Route path ="/Home" element={<AdminHome/>}/>
          <Route path="/add" element={<AddCustomer/>}/>
          <Route path="/all" element={<AllCustomers/>}/>
          <Route path="/update/:id" element={<EditCustomer/>}/>
          </Routes>
    </Router>
  );
}

export default App;

