import React from 'react'
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';


export default function Header() {


    let navigate = useNavigate()
    let LogOut = (e) => {

        setTimeout(() => {
            navigate('/')
        }, 600);
        toast.error("Logout Successfully")
    }

     
    return (

        <>
            <header className="sticky top-0 bg-black ">
                <ToastContainer />
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center lg:justify-between justify-between">
                    <h1 className="lg:text-4xl text-3xl font-bold text-white text-[bold]">Welcome  </h1>

                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full border-2 border-cyan-400 bg-gradient-to-br from-cyan-300 to-blue-500 flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">U</span>
                        </div>

                        <LuLogOut onClick={LogOut} className=" text-3xl text-white
                 font-semibold rounded-lg transition duration-300 ease-in-out 
                 transform hover:scale-105 hover:text-red-900" />
                         

                    </div>
                </div>
            </header>
        </>

    )
}
