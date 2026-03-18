import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { IoArrowBackOutline } from "react-icons/io5";
export default function ForgetPass() {


    let [loading, setloading] = useState(false)
    let [loading1, setloading1] = useState(false)
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRef = useRef([]);

    let submitOTP = (e) => {
        setloading(true)
        e.preventDefault()
        let obj = { email: e.target.email.value }

        axios.post('https://backend-deploy-bay-five.vercel.app/admin/send-otp', obj)
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                if (finalRes.status) {
                    setloading(false)
                    toast.success(finalRes.message)
                    e.target.reset()
                }
                else {
                    toast.error(finalRes.message)
                    setloading(false)
                }
            })

    }

    let navigate = useNavigate()

    let varifyOtp = (e) => {
        e.preventDefault()
        let myOTP = otp.join('')



        axios.post('https://backend-deploy-bay-five.vercel.app/admin/varify-otp', { myOTP })
            .then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                if (finalRes.status) {
                    setloading1(false)
                    toast.success(finalRes.message)
                    setOtp(['', '', '', '', '', ''])
                    setTimeout(() => {
                        navigate('/change-password')
                    }, 800);
                }
                else {
                    toast.error(finalRes.message)

                }
            })



    }
    return (
        <div>
            <ToastContainer />
            <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#eef2ff] via-[#f8fafc] to-[#e0e7ff] relative overflow-hidden px-3">

                {/* 🌤️ BACKGROUND GLOW (smaller for mobile) */}
                <div className="absolute w-[250px] h-[250px] bg-indigo-300 opacity-30 blur-[100px] rounded-full top-[-80px] left-[-80px]"></div>
                <div className="absolute w-[220px] h-[220px] bg-blue-300 opacity-30 blur-[100px] rounded-full bottom-[-80px] right-[-80px]"></div>

                <div className="relative w-full max-w-md backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl p-4 md:p-6">
                    <Link to={'/'}> <IoArrowBackOutline className='text-2xl' />
                    </Link>
                    {/* 🔥 LOGO */}
                    <div className="flex flex-col items-center mb-3">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                            className="w-[20%] mb-1"
                        />
                        <h2 className="text-sm font-semibold text-gray-700 text-center">
                            Enquiry Management System
                        </h2>
                    </div>

                    <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                        Reset Password 🔐
                    </h1>

                    <p className="text-gray-500 text-center mb-3 text-xs">
                        Enter your email to receive OTP
                    </p>

                    {/* EMAIL */}
                    <form className="space-y-3" onSubmit={submitOTP}>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="your@email.com"
                            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
                        />

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                        >
                            Send OTP
                            {loading && (
                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                            )}
                        </button>
                    </form>

                    {/* OTP */}
                    <form onSubmit={varifyOtp}>
                        <div className="mt-3 pt-3 border-t border-gray-200">

                            <p className="text-xs text-gray-600 mb-2 text-center">
                                Enter OTP
                            </p>

                            <div className="flex justify-center md:gap-3 gap-2 mb-3">
                                {otp.map((value, i) => (
                                    <input
                                        key={i}
                                        type="text"
                                        maxLength="1"
                                        value={value}
                                        ref={(el) => (inputRef.current[i] = el)}
                                        className="md:w-13 md:h-13 w-10 h-10 text-center rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-semibold"
                                        onChange={(e) => {
                                            let arr = [...otp];
                                            arr[i] = e.target.value;
                                            setOtp(arr);

                                            if (e.target.value && i < 5) {
                                                inputRef.current[i + 1].focus();
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Backspace") {
                                                if (otp[i] === "" && i > 0) {
                                                    inputRef.current[i - 1].focus();
                                                }
                                            }
                                        }}
                                    />
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-lg text-sm font-semibold"
                            >
                                Verify
                                {loading1 && (
                                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                )}
                            </button>

                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}
