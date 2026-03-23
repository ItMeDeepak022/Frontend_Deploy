import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {

    const [isLogin, setIsLogin] = useState(true);
    const [loding, setloading] = useState(false)

    let navigate = useNavigate()

    let loginDone = (e) => {
        e.preventDefault()
        setloading(true)
        let obj = {
            name: e.target.name.value || '',
            email: e.target.email.value,
            password: e.target.password.value
        }



        {
            isLogin ?


                axios.post("https://backend-deploy-bay-five.vercel.app/admin/login", obj)
                    .then((res => res.data))
                    .then((finalRes) => {
                        // console.log(finalRes);

                        if (finalRes.status) {
                            // localStorage.setItem( key    ,  value )
                            //   arg1   ,  ag2
                            localStorage.setItem("token", finalRes.token);
                            localStorage.setItem('firstletter', finalRes.Fletter)
                            setloading(false)
                            toast.success(finalRes.message)
                            e.target.reset()
                            setTimeout(() => {
                                navigate('/home')
                            }, 1200);
                        }
                        else {
                            toast.error(finalRes.message)
                            setloading(false)
                        }
                    })

                :

                axios.post("https://backend-deploy-bay-five.vercel.app/admin/registration", obj)
                    .then((res => res.data))
                    .then((finalRes) => {
                        // console.log(finalRes);
                        if (finalRes.status) {
                            // localStorage.setItem( key    ,  value )
                            //   arg1   ,  ag2
                            localStorage.setItem("token", finalRes.token);
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



    }


    return (
        < >
            <ToastContainer />


            <div className="min-h-screen  flex items-center justify-center  bg-gray-200 relative overflow-hidden px-3">



                <div className=" shadow-lg w-full max-w-6xl backdrop-blur-xl bg-white border border-white/20 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

                    {/* 🔥 MOBILE TOP (LOGO + TITLE) */}
                    <div className=" flex md:hidden flex-col  items-center text-black p-0 border-b border-white/10">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                            className="w-16"
                        />
                        <h1 className="text-lg text-black font-semibold text-center">
                            Enquiry Management System
                        </h1>
                    </div>

                    {/* LEFT SIDE (ONLY DESKTOP) */}
                    <div className="hidden md:flex w-1/2 flex-col justify-center items-center text-white p-12 relative">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                            className="w-28 mb-6 drop-shadow-lg"
                        />

                        <h1 className="text-4xl  text-black font-bold text-center leading-snug">
                            Enquiry Management System
                        </h1>

                        <p className="mt-5 text-center text-sm text-black max-w-sm">
                            Smart way to manage enquiries, users and workflow with powerful dashboard.
                        </p>

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                    </div>

                    {/* RIGHT SIDE (FORM) */}
                    <div className="w-full md:w-1/2 p-5 md:p-10 text-black">

                        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-black md:mb-6 text-center">
                            {isLogin ? "Welcome Back " : "Create Account "}
                        </h2>

                        <form onSubmit={loginDone} className="space-y-4 md:space-y-5">

                            {!isLogin && (
                                <div>
                                    <label className="text-xs md:text-sm text-black">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full mt-1 px-3 md:px-4 py-2 rounded-lg bg-[#E8F0FE] border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-sm"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="text-xs md:text-sm text-black">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full mt-1 px-3 md:px-4 py-2 rounded-lg bg-[#E8F0FE] border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500  placeholder-red-700 text-sm"
                                />
                            </div>

                            <div>
                                <label className="text-xs md:text-sm text-black">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full mt-1 px-3 md:px-4 py-2 rounded-lg bg-[#E8F0FE] border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-black text-sm"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 py-2 rounded-lg font-semibold text-white flex items-center justify-center gap-5 shadow-lg text-sm md:text-base"
                            >
                                <span>{isLogin ? "Login" : "Sign Up"}</span>

                                {loding && (
                                    <div className="w-5 h-5 md:w-6 md:h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                )}
                            </button>

                        </form>

                        {/* TOGGLE */}
                        <div className="mt-5 md:mt-6 text-center text-xs md:text-sm text-black">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                type="button"

                            >
                                {isLogin ? (
                                    <div>
                                        <p className='hover:underline text-black'>Don't have an account? Sign Up</p>
                                        <p className="mt-1  text-black">
                                            <Link to="/forget-password" className="text-blue-400 hover:underline">
                                                Forgot Password
                                            </Link>
                                        </p>
                                    </div>
                                ) : (
                                    <p className=' text-black hover:underline'>Already have an account? Login</p>
                                )}
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </ >
    )
}
