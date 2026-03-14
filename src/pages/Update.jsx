import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineDelete } from 'react-icons/md'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import Header from '../common/Header'

export default function Update() {
    let { state } = useLocation()


    let [form, setform] = useState(
        {
            id: "",
            mobileNumber: '',
            userEmail: '',
            username: ''

        }
    )







    let url = import.meta.env.VITE_url

    let navigate = useNavigate()

    let updateData = (e) => {

        e.preventDefault()
        axios.put(`${url}/user/update`,form)
            .then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    toast.success(finalRes.message)
                    setTimeout(() => {
                        navigate('/home')
                    }, 1200);


                }

            })
        console.log(form);

    }
    useEffect(() => {
        setform(
            {
                id:state._id,
                mobileNumber: state.mobileNumber,
                userEmail: state.userEmail,
                username: state.username

            }
        )
    }, [state])


     

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 p-8">
                <ToastContainer />
                <div className="max-w-7xl mx-auto">
                    <h1 className="lg:text-4xl text-[25px] lg:text-left text-center font-bold text-green-800 mb-8">Enquiry Management</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-[30%_auto]  gap-8 "  >

                        {/* Left Side - Form */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold text-red-700 mb-6">Update Enquiry</h2>
                            <form className="space-y-4" onSubmit={updateData}>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                    <input type="text"
                                        name='username'
                                        value={form.username}
                                        onChange={(e) => setform(
                                            { ...form, username: e.target.value }
                                        )}
                                        placeholder="Enter name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                    <input type="email"
                                        name='userEmail'
                                        value={form.userEmail}
                                        disabled={true}
                                        // onChange={(e) => setform(
                                        //     { ...form, userEmail: e.target.value }
                                        // )}
                                        placeholder="Enter email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
                                    <input type="tel"
                                        name='mobileNumber'
                                        required
                                        value={form.mobileNumber}
                                        onChange={(e) => setform(
                                            { ...form, mobileNumber: e.target.value }
                                        )}
                                        placeholder="Enter mobile number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Update</button>
                            </form>
                        </div>

                        {/* Right Side - Table */}
                        <div className="bg-white rounded-lg shadow-lg lg:p-6 p-4">
                            <h2 className="text-2xl font-bold text-gray-700 mb-6"> Update Enquiries</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Email</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Mobile</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-[green]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>





                                        <tr className="hover:bg-gray-100">
                                            <td className="border border-gray-300 px-4 py-2"> {state.username}     </td>
                                            <td className="border border-gray-300 px-4 py-2"> {state.userEmail}    </td>
                                            <td className="border border-gray-300 px-4 py-2"> {state.mobileNumber} </td>
                                            <td className="border border-gray-300  py-5 flex justify-around">
                                                <button >

                                                    <FaRegEdit className='text-[25px] text-[blue]' />

                                                </button>
                                                <button>
                                                    <MdOutlineDelete className='text-[25px] text-[red]' />
                                                </button>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

