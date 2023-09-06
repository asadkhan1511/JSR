import React, { useEffect, useState } from "react";
import { RiFileAddFill } from "react-icons/ri";
import axios from "axios";
const About = () => {
  const [para,setPara]=useState([]);
  const [toggle,settoggle]=useState(true);
 async function getabout()
 {
  try{
  const {data}=await axios.get("https://jsr-backend-x7rr.onrender.com/AParagraph")
  console.log(data[0].line);
  setPara(data[0].line);
  }
  catch(e){
  console.log(e);
  }
 }
  useEffect(()=>{
    getabout();
  },[])
  
  function handle(index,e){
    
  para[index]=e.target.value;
  setPara([...para]);
  }

async function handleupdate()
{
  try{
    settoggle(!toggle);
console.log(para);
 const {data}=await axios.put("http://localhost:8000/AParagraph/line",para);
  }
  catch(e)
  {
 console.log(e);
  }
 
}
  return (
    <div className="flex flex-col  justify-center pt-10 lg:pt-2  ">
      <div className="text-center flex flex-col items-center text-gray-600 leading-7">
        <h1 className="text-4xl tracking-wide lg:tracking-widest lg:text-7xl pb-4 pt-5 lg:pt-16 text-black">
          ABOUT JSR Productions
          <RiFileAddFill  onClick={()=>settoggle(false)} className="inline-block" color="blue"/>
        </h1>

        {/* for large */}
        <div className="hidden lg:flex flex-col items-center  ">
            <input type="text" readOnly={toggle} className=" text-center font2 mt-0 lg:mt-4 w-[320px] md:w-[550px] lg:w-[1200px] lg:text-[14px] tracking-wide text-gray-900" value={para[0]} onChange={(e)=>handle(0,e)}  />
            <input type="text" readOnly={toggle} className="text-center lg:w-[1100px] xl:w-[1100px] font2 text-gray-900" value={para[1]} onChange={(e)=>handle(1,e)}   />
            <input type="text" readOnly={toggle} className="text-center lg:w-[1000px] xl:w-[1000px] font2 text-gray-900" value={para[2]} onChange={(e)=>handle(2,e)}   />
            <input type="text" readOnly={toggle} className={` ${!toggle?"border border-black":null} text-center lg:w-[900px] xl:w-[900px] text-gray-900  font2`} value={para[3]} onChange={(e)=>handle(3,e)}  />
            <input type="text" readOnly={toggle} value={para[4]} className=" text-center lg:w-[800px] xl:w-[800px] text-gray-900  font2" onChange={(e)=>handle(4,e)}  />
            <input type="text" readOnly={toggle} value={para[5]} className=" text-center lg:w-[700px]  xl:w-[700px] text-gray-900 font2" onChange={(e)=>handle(5,e)}  />
            <input type="text" readOnly={toggle} value={para[6]} className=" text-center lg:w-[600px]  xl:w-[600px] text-gray-900 font2" onChange={(e)=>handle(6,e)}  />
         {!toggle? <button className=" border border-black p-2 font-sans text-1xl bg-blue-400 text-black rounded-lg mt-5 font-bold " onClick={handleupdate}>Update</button>
         :null}
        </div>

        {/* for mobile */}
        <div className="lg:hidden font2  text-justify px-5 pb-5 text-gray-900">
          JSR Production House is a well-established production house in India located
          amidst the magnificent hills of Dehradun, Uttarakhand. With a vision to create
          an everlasting impact through our full-service production house. Under
          the able guidance of Mr. Tarun Singh Rawat, Vice Chairman- JSR Group,
          elder son of Mr. Jaswant Rawat. We have thrived in a short period and
          have successfully emerged as one of the best production houses in
          India. JSR Production House is a revered and award-winning
          organization that provides a platform to showcase your potential and
          business. We understand the importance of quality in our work, so we
          ensure that all our projects are completed with perfection. We know
          the value of time and hence ensure that we complete the project within
          the given time frame. We believe in delivering top-notch services at
          an affordable price.
        </div>
      </div>

      {/* <ul className="pt-2 font2 mt-0 lg:mt-4 w-[320px] md:w-[550px] lg:w-[800px] lg:text-[14px] flex flex-col justify-start tracking-wide leading-7 text-gray-600 ">
        <li className="pb-3">
          JSR Production House is a revered and award-winning organization that
          provides a platform to showcase your potential and business.
        </li>
        <li>
          We understand the importance of quality in our work, so we ensure that
          all our projects are completed with perfection.
        </li>
        <li>
          We know the value of time and hence ensure that we complete the
          project within the given time frame.
        </li>
        <li>
          We believe in delivering top-notch services at an affordable price
        </li>
      </ul> */}
    </div>
  );
};

export default About;
