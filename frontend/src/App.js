import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Component/Navbar';
import Home from './Component/Home';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
// import Forgot from './Component/Forgot';
import ContactUs from './Component/ContactUs';
import { About } from './Component/About';



function App() {  
  return (
    <>
      <Router>
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          {/* <Route path="/forgot" element={<Forgot/>}/> */}
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="about" element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
