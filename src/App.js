
import './App.css';
import Home from "./pages/Home"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import StudentCouncilpage from "./pages/StudentCouncilpage"
import ClubsDivision from "./pages/ClubsDivision"
import UniversityClubs from "./pages/UniversityClubs"
import SchoolClubs from "./pages/SchoolClubs"
import ClubPage from "./pages/School_Clubs/ClubPage"
import Login from "./pages/Login"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import COE from './pages/COE';
import ScrollToTop from './pages/ScrollToTop';
import Calendar from "./pages/Calender";
import Admin from "./pages/Admin"
import AddClub from "./pages/AddClub"
import AddCOE from './pages/AddCOE';
import AddSchool from './pages/AddSchool';

import DeleteSchool from './pages/DeleteSchool';
import DeleteClub from './pages/DeleteClub';
import DeleteCOE from './pages/DeleteCOE';
import EditSchool from './pages/EditSchool';
import EditClub from './pages/EditClub';
import EditCOE from './pages/EditCOE';
import Gallery from './pages/Gallery';
import COEList from './pages/COEList';
import COEpage from './pages/COEpage';
import SpecificClubList from './pages/SpecificClubList';






function App() {



  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/StudentCouncilpage" element={<StudentCouncilpage />} />
          <Route exact path="/ClubsDivision" element={<ClubsDivision />} />
          <Route exact path="/UniversityClubs" element={<UniversityClubs />} />
          <Route exact path="/SchoolClubs" element={<SchoolClubs />} />
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/AddClub" element={<AddClub />} />
          <Route exact path="/AddCOE" element={<AddCOE />} />
          <Route exact path="/AddSchool" element={<AddSchool />} />
          <Route exact path="/COE" element={<COE />} />
          <Route path="/COEpage" element={<COEpage />} />
          <Route exact path="/Calender" element={<Calendar />} />
          <Route exact path="/COEList" element={<COEList />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/DeleteSchool" element={<DeleteSchool />} />
          <Route exact path="/DeleteClub" element={<DeleteClub />} />
          <Route exact path="/DeleteCOE" element={<DeleteCOE />} />
          <Route exact path="/EditSchool" element={<EditSchool />} />
          <Route exact path="/EditClub" element={<EditClub />} />
          <Route exact path="/EditCOE" element={<EditCOE />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/SpecificClubList/:schoolId" element={<SpecificClubList />} />
          <Route path="/ClubPage" element={<ClubPage />}>

          </Route>
        </Routes>
        <Footer />
      </Router>

    </div>
  );

}

export default App;
