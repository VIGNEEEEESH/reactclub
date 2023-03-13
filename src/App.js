
import './App.css';
import Home from "./pages/Home"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import SC from "./pages/SC"
import ClubDiv from "./pages/ClubDiv"
import Uclub from "./pages/Uclub"
import Sclub from "./pages/Sclub"
import Tech from "./pages/School_Clubs/Tech"
import Login from "./pages/Login"
import Licence from './pages/License';
import Twelve from "./components/club_logos/twelve.png"
import {BrowserRouter as Router, Redirect, Route,Routes  } from "react-router-dom"
import COE from './pages/COE';
import ScrollToTop from './pages/ScrollToTop';
import  Calendar from "./pages/Calender";
import Admin from "./pages/Admin"




function App() {

  return (
    <div className="App">
    <Router>
      <ScrollToTop/>
      <Header/>
      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/SC" element={<SC/>}/>
       <Route exact path="/ClubDiv" element={<ClubDiv/>}/>
       <Route exact path="/Uclub" element={<Uclub/>}/>
       <Route exact path="/Sclub" element={<Sclub/>}/>
       <Route exact path="/Admin" element={<Admin/>}/>
       
       <Route exact path="/COE" element={<COE/>}/>
       <Route exact path="/Calender" element={<Calendar/>}/>
       <Route exact path="/Login" element={<Login/>}/>
       <Route path="/clubs/:id" element={<Tech/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
      
    </div>
  );
}

export default App;
