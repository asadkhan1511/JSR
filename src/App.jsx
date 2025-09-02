import Home from "./Pages/Home";
import axios from 'axios'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Services from "./Pages/Services";
// import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";
import Rentals from "./Pages/Rentals";
import Member from "./Pages/Member";
import { useEffect, useLayoutEffect, useState } from "react";
// import Metrics from "./Pages/Metrics";
import UpdateCard from "./Pages/UpdateCard";
import AddCard from "./Pages/AddCard";
import AddService from "./Pages/AddService";
import AddBanner from "./Pages/AddBannner";
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Pages/Login';
import AddBOD from "./Pages/AddBOD";
import EditRentals from "./Pages/EditRentals";

// import { AnimatePresence } from "framer-motion/dist/framer-motion";

function App() {
  const { isAuthenticated } = useAuth0();


  return (
    <>

      {/* <AnimatePresence> */}
      <Routes location={location} key={location.pathname}>
        {isAuthenticated ? <Route path="*" element={<Login />} /> : <><Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Banner" element={<AddBanner />} />
          <Route path="/Banner/:type" element={<AddBanner />} />
          <Route path="/services/:id" element={<AddService />} />
          <Route path="/BOD/:id" element={<AddBOD />} />
          <Route path="/member" element={<Member />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rentals" element={<Rentals />} />
          {/* <Route path="/metrics" element={<Metrics />} /> */}
          <Route path="/update/:id" element={<UpdateCard />} />
          <Route path="/editRentals/:id" element={<EditRentals />} />
          <Route path="/add/:key" element={<AddCard />} /></>}
      </Routes>
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
