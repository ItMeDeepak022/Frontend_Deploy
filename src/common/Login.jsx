import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {

    const [isLogin, setIsLogin] = useState(true);
 let navigate=useNavigate()
    let loginDone=(e)=>{
        e.preventDefault()
        
        setTimeout(() => {
            navigate('/home')
        },600);
        toast.success("Login Successfully..")
    }
    return (
        < >

        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
            {/* Header */}
             <ToastContainer/>
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                {/* Toggle Buttons */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-2 font-semibold rounded ${
                            isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-2 font-semibold rounded ${
                            !isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        Register
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={loginDone} className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            required
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    )}
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
            </div>
        </div>

        </ >
    )
}
