import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function ChangePass() {

    let [loading, setloading] = useState(false)
    let navigate = useNavigate()
    
    let changePass = (e) => {
        setloading(true)
        e.preventDefault()
        let obj = {
            newpas: e.target.newpas.value,
            confirmpas: e.target.confirmpas.value,
        }


        axios.post('https://backend-deploy-bay-five.vercel.app/admin/change-password', obj)
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                if (finalRes.status) {
                    setloading(false)
                    toast.success(finalRes.message)
                    e.target.reset()
                    setTimeout(() => {
                        navigate('/')
                    }, 600);
                }
                else {
                    toast.error(finalRes.message)
                    setloading(false)
                }
            })

    }


    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#f8fafc] to-[#e0e7ff] relative overflow-hidden px-4">
            <ToastContainer />
            {/* 🌤️ BACKGROUND GLOW */}
            <div className="absolute w-[400px] h-[400px] bg-indigo-300 opacity-30 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
            <div className="absolute w-[350px] h-[350px] bg-blue-300 opacity-30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

            <div className="w-full max-w-md backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl p-2 md:p-8">

                {/* 🔥 LOGO + TITLE */}
                <div className="flex flex-col items-center mb-5">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                        alt="logo"
                        className="w-16 mb-2"
                    />
                    <h2 className="text-lg font-semibold text-gray-700">
                        Enquiry Management System
                    </h2>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
                    Change Password
                </h1>

                <p className="text-gray-500 text-center mb-6 text-sm">
                    Update your password to keep your account secure
                </p>

                <form className="space-y-4" onSubmit={changePass}>

                    {/* NEW PASSWORD */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1 text-sm">
                            New Password
                        </label>
                        <input
                            type="password"
                            name="newpas"
                            placeholder="Enter new password"
                            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400 text-sm shadow-sm"
                        />
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1 text-sm">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmpas"
                            placeholder="Confirm new password"
                            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400 text-sm shadow-sm"
                        />
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-3 shadow-md"
                    >
                        <span>Change Password</span>

                        {loading && (
                            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        )}
                    </button>

                </form>

                {/* BACK LINK */}
                <p className="text-gray-500 text-center mt-5 text-sm">
                    <a href="/" className="text-indigo-600 hover:underline">
                        Back to Login
                    </a>
                </p>

            </div>

        </div>
    )
}
