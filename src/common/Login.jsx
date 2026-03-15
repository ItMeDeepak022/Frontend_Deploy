import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
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
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
                            className="text-blue-600 hover:underline"
                            onClick={() => setIsLogin(!isLogin)}
                            type="button"
                        >
                            {isLogin
                                ? "Don't have an account? Sign Up"
                                : "Already have an account? Login"}
                        </button>
                    </div>
                    <ToastContainer />
                </div>
            </div>

        </ >
    )
}
