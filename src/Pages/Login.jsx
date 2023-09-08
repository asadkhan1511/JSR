import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
    const { loginWithRedirect,isAuthenticated } = useAuth0();
  return (
    <>
    <div className=' w-screen bg-black h-screen grid place-content-center '>
    <button onClick={()=>loginWithRedirect()} className=' text-3xl  bg-blue-900 p-4 rounded-md hover:text-white hover:bg-blue-800 '>Login</button>
    </div>
    </>
  )
}

export default Login
