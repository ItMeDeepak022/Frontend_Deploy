import axios from 'axios';
import React from 'react'
import { LuLogOut } from "react-icons/lu";
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';


export default function Header() {

    let data = localStorage.getItem('firstletter')


    let value = data.charAt(0)


    let navigate = useNavigate()
    let LogOut = () => {

        localStorage.removeItem('token')
        localStorage.removeItem('firstletter')

        toast.success("Logout Successfully")
        setTimeout(() => {
            navigate('/')
        },700);
        
    }

    let IsDeleteAccoutnt = () => {
        let token = localStorage.getItem("token");
        let confirmDelete = window.confirm("Are you sure to delete Account");

        if (confirmDelete) {
            axios.post(
                "https://backend-deploy-bay-five.vercel.app/admin/delete",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
                .then((res) => res.data)
                .then((finalRes) => {

                    if (finalRes.status) {
                        toast.success(finalRes.message);
                        setTimeout(() => {
                            navigate('/')
                        }, 600);
                    }
                     else {
                        toast.error(finalRes.message);
                    }

                });
        }

 }

    return (

        <>
            <header className="sticky top-0 bg-black ">
                <ToastContainer />
                <div className="max-w-7xl mx-auto px-6 py-4 sm:flex hidden items-center lg:justify-between justify-between">

                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-full bg-orange-700 border-3 border-[cyan]  flex items-center justify-center">
                            <span className="text-[cyan] font-bold  text-[28px]"> {value} </span>
                        </div>
                        <h1 className="lg:text-4xl text-3xl font-bold text-white text-[bold]"> Welcome <p className='md:inline-block hidden text-[30px] text-orange-700'>, {`${data}`} </p>  </h1>
                    </div>
                    <div className="flex items-center gap-6">


                        <LuLogOut onClick={LogOut} className=" text-3xl text-red-400
                 font-semibold rounded-lg transition duration-300 ease-in-out 
                 transform hover:scale-105 hover:text-red-500" />

                        <MdDelete onClick={IsDeleteAccoutnt} className=" text-3xl text-red-500
                 font-semibold rounded-lg transition duration-300 ease-in-out 
                 transform hover:scale-105 hover:text-red-600" />


                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-4 sm:hidden flex items-center lg:justify-between justify-between">

                    <div className="w-12 h-12 rounded-full bg-orange-700 border-3 border-[cyan]  flex items-center justify-center">
                        <span className="text-[cyan] font-bold  text-[28px]"> {value} </span>
                    </div>
                    <div className="flex items-center  gap-4">
                        <LuLogOut onClick={LogOut} className=" text-3xl text-white
                 font-semibold rounded-lg transition duration-300 ease-in-out 
                 transform hover:scale-105 hover:text-red-900" />

                        <MdDelete onClick={IsDeleteAccoutnt} className=" text-3xl text-red-600
                 font-semibold rounded-lg transition duration-300 ease-in-out 
                 transform hover:scale-105 hover:text-red-800" />


                    </div>
                </div>
            </header>
        </>

    )
}
