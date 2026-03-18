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
                        }
                    })

        }



    }


    return (
        < >
            <ToastContainer />
            {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className='absolute md:text-4xl text-[25px] text-orange-700 font-semibold md:top-10 top-0 md:block hidden'>Welcome to the Enquiry Management System</h1>

                <div className="bg-white p-8 rounded-lg shadow-md w-[400px]  max-w-md m-3">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        {isLogin ? "Welcome Back 👋" : "Create an Account"}
                    </h2>
                    <form onSubmit={loginDone} className="space-y-6 w-full">
                        {!isLogin && (
                            <div>
                                <label className="block mb-1 text-gray-700" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                        )}
                        <div>
                            <label className="block mb-1 text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            {isLogin ?
                                <div className='flex items-center justify-center gap-5' >
                                    <p className='text-white text-[18px]'>Login</p>

                                    {
                                        loding && (
                                            <div class="flex items-center justify-center">
                                                <div class="w-7 h-7 rounded-full animate-spin
                    border-4 border-solid border-white border-t-transparent"></div>

                                            </div>
                                        )

                                    }

                                </div>

                                :
                                <div className='flex items-center justify-center gap-5' >
                                    <p className='text-white text-[18px]'>Sign Up</p>

                                    {
                                        loding && (
                                            <div class="flex items-center justify-center">
                                                <div class="w-7 h-7 rounded-full animate-spin
                    border-4 border-solid border-white border-t-transparent"></div>

                                            </div>
                                        )

                                    }

                                </div>

                            }

                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <button
                            className="text-blue-600 "
                            onClick={() => setIsLogin(!isLogin)}
                            type="button"
                        >
                            {isLogin
                                ?

                                < div >
                                    <p className='hover:underline'> "Don't have an account? Sign Up"</p>
                                    <p className='text-blue-600 hover:underline'><Link to={"/forget-password"}>Forgot Password</Link> </p>
                                </div>
                                :
                                <div>
                                    <p className='hover:underline'>Already have an account? Login</p>
                                     
                                </div>


                            }
                        </button>

                    </div>
                    <ToastContainer />
                </div >
            </div > */}

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] relative overflow-hidden px-3">

                {/* 🔥 BACKGROUND GLOW */}
                <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500 opacity-30 blur-[120px] rounded-full top-[-80px] left-[-80px]"></div>
                <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-500 opacity-30 blur-[120px] rounded-full bottom-[-80px] right-[-80px]"></div>

                <div className="w-full max-w-6xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

                    {/* 🔥 MOBILE TOP (LOGO + TITLE) */}
                    <div className="flex md:hidden flex-col items-center text-white p-0 border-b border-white/10">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                            className="w-16"
                        />
                        <h1 className="text-lg font-semibold text-center">
                            Enquiry Management System
                        </h1>
                    </div>

                    {/* LEFT SIDE (ONLY DESKTOP) */}
                    <div className="hidden md:flex w-1/2 flex-col justify-center items-center text-white p-12 relative">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                            className="w-28 mb-6 drop-shadow-lg"
                        />

                        <h1 className="text-4xl font-bold text-center leading-snug">
                            Enquiry Management System
                        </h1>

                        <p className="mt-5 text-center text-sm text-gray-300 max-w-sm">
                            Smart way to manage enquiries, users and workflow with powerful dashboard.
                        </p>

                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                    </div>

                    {/* RIGHT SIDE (FORM) */}
                    <div className="w-full md:w-1/2 p-5 md:p-10 text-white">

                        <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6 text-center">
                            {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
                        </h2>

                        <form onSubmit={loginDone} className="space-y-4 md:space-y-5">

                            {!isLogin && (
                                <div>
                                    <label className="text-xs md:text-sm text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="w-full mt-1 px-3 md:px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
                                        required
                                    />
                                </div>
                            )}

                            <div>
                                <label className="text-xs md:text-sm text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full mt-1 px-3 md:px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-xs md:text-sm text-gray-300">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full mt-1 px-3 md:px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
                                    required
                                />
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full  bg-blue-500   py-2 rounded-lg font-semibold   flex items-center justify-center gap-5 shadow-lg text-sm md:text-base"
                            >
                                <span>{isLogin ? "Login" : "Sign Up"}</span>

                                {loding && (
                                    <div className="w-5 h-5 md:w-6 md:h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                )}
                            </button>

                        </form>

                        {/* TOGGLE */}
                        <div className="mt-5 md:mt-6 text-center text-xs md:text-sm text-gray-300">
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                type="button"
                                 
                            >
                                {isLogin ? (
                                    <div>
                                        <p className='hover:underline'>Don't have an account? Sign Up</p>
                                        <p className="mt-1">
                                            <Link to="/forget-password" className="text-blue-400 hover:underline">
                                                Forgot Password
                                            </Link>
                                        </p>
                                    </div>
                                ) : (
                                    <p className='hover:underline'>Already have an account? Login</p>
                                )}
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </ >
    )
}
