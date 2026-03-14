import React from 'react'
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';


export default function Header() {

    let data = localStorage.getItem('firstletter')
    let value = data.charAt(0)
     

    let navigate = useNavigate()
    let LogOut = () => {

        localStorage.removeItem('token')
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
                    <h1 className="lg:text-4xl text-3xl font-bold text-white text-[bold]"> Welcome <p className='md:inline-block hidden text-[30px] text-orange-700'>, {`${data}`} </p>  </h1>

                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-orange-700 border-3 border-[cyan]  flex items-center justify-center">
                            <span className="text-[cyan] font-bold  text-[28px]"> {value} </span>
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
