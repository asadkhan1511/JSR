import Home from "./Pages/Home";
import axios from 'axios'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Services from "./Pages/Services";
// import OurTeam from "./Pages/OurTeam";
import Contact from "./Pages/Contact";
import Rentals from "./Pages/Rentals";
import Member from "./Pages/Member";
import { useEffect, useLayoutEffect, useState } from "react";
import Metrics from "./Pages/Metrics";
import UpdateCard from "./Pages/UpdateCard";
import AddCard from "./Pages/AddCard";
import AddService from "./Pages/AddService";
import AddBanner from "./Pages/AddBannner";
import { useAuth0 } from "@auth0/auth0-react";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";

function App() {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  async function updateviews(){
    try{
      const res=await axios.post("https://jsr-backend-x7rr.onrender.com/Views")
      console.log(res) }
          catch(e)
          {console.log(e)    }
  }

  window.addEventListener("load",()=>{
    loginWithRedirect()
  })
  useEffect(()=>{
    updateviews()
  },[])
 

  return (
    <>

      {/* <AnimatePresence> */}
      {isAuthenticated && <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Banner" element={<AddBanner />} />
        <Route path="/Banner/:type" element={<AddBanner />} />
        <Route path="/services/:id" element={<AddService />} />
        <Route path="/member" element={<Member />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/update/:id" element={<UpdateCard />} />
        <Route path="/add/:key" element={<AddCard />} />
      </Routes>}
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
