import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineDelete } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'
import Header from '../common/Header'





export default function Home() {
    
   

  let url = import.meta.env.VITE_url
  
 
 let saveData = (e) => {
    
    e.preventDefault()
    let formValue=e.target;
    // let formData = new FormData(formValue)
    
  let data = {
    username: formValue.username.value,
    userEmail: formValue.userEmail.value,
    mobileNumber: formValue.mobileNumber.value
  };
   
    axios.post(`${url}/user/create`,data)
      .then((res) => res.data)
      .then((finalRes) => {
          if(finalRes.status){
            toast.success(finalRes.message)
            formValue.reset();
             viewData()
            
          }
          else{
            toast.error(finalRes.message)
          }
      })
 
    }
  


  let [view, setview] = useState([])

  let viewData = () => {
    axios.get(`${url}/user/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        setview(finalRes.Resobj);
      })
  }

 

  useEffect(() => {
    viewData()
  }, [])


   
  let getIds=(ids)=>{
    const value=confirm("Are you sure to delete..")
      if(value) 
      {
       axios.delete(`${url}/user/delete/${ids}`)
      .then((res) => res.data)
      .then((finalRes) => {
         
         if(finalRes.status)
         {
          toast.error(finalRes.message)
          viewData()
         }
      })
  }
  
}
 

  return (
    <>
    <Header/>
      <div className="min-h-screen bg-gray-100 px-8 py-6">
        <ToastContainer/>
        
        <div className="max-w-7xl mx-auto">
          <h1 className="lg:text-4xl text-[25px] lg:text-left text-center font-bold text-[green] lg:mb-5 mb-4 ">Enquiry Management</h1>

          <div className="grid grid-cols-1 lg:grid-cols-[30%_auto]  gap-8 "  >

            {/* Left Side - Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Enquiry</h2>
              <form onSubmit={saveData} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text"
                    name='username'
                     required
                    placeholder="Enter name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email"
                   required
                    name='userEmail'
                    placeholder="Enter email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
                  <input type="tel"
                    name='mobileNumber'
                     required
                    placeholder="Enter mobile number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Submit</button>
              </form>
            </div>

            {/* Right Side - Table */}
            <div className="bg-white rounded-lg shadow-lg lg:p-6 p-4">
              <h2 className="text-2xl font-bold text-gray-700 mb-6">Enquiries</h2>
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

                    {
                      view.length >= 1 ?

                        view.map((obj, index) => {
                          return (
                            <tr className="hover:bg-gray-100">
                              <td className="border border-gray-300 px-4 py-2"> {obj.username } </td>
                              <td className="border border-gray-300 px-4 py-2"> {obj.userEmail} </td>
                              <td className="border border-gray-300 px-4 py-2"> {obj.mobileNumber} </td>
                              <td className="border border-gray-300  py-5 flex justify-around">
                                <button >
                                  <Link to={`/update`} state={obj}>
                                  <FaRegEdit className='text-[25px] text-[blue]' />
                                   </Link>
                                </button>
                                <button onClick={()=>getIds(obj._id)}>
                                  <MdOutlineDelete  className='text-[25px] text-[red]' />
                                </button>
                              </td>
                            </tr>
                          )
                        })
                        :
                        <tr colSpan={6}>No Data Found</tr>
                    }

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
