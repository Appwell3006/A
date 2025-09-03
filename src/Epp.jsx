import React from 'react'
import Pic from './assets/2pic.jpg'
import Logo from './assets/logo.png'

const Epp = () => {
  return (
    <div className='flex flex-row h-full'>

        
        <div className='w-[100%] sm:w-[50%] px-29'>
            <div className='flex justify-center items-center mt-10 mb-10'>
                <img src={Logo} className='w-32' alt="" />
            </div>

            <form className="flex flex-col justify-center items-center mb-2">
                <h2 className="text-3xl font-bold mb-7">Login</h2>
                <label className="w-full mb-4">
                    <span className="block text-gray-700 mb-2">Email</span>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </label>
                <label className="w-full mb-6">
                    <span className="block text-gray-700 mb-2">Password</span>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </label>
            </form>

            <div className="items-end mb-5">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        className="mr-2 accent-blue-600"
                    />
                    <label htmlFor="rememberMe" className="text-gray-700">
                        Remember me
                    </label>
            </div>

            <div className='flex justify-center'>
                <button type="submit" className="w-80 items-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" >
                    Login
                </button>
            </div>
            
        </div>




        <div className='w-[0%] sm:w-[50%] h-screen'>
            
            <img className='object-cover w-full h-full blur-2xl' src={Pic} alt="" />
        </div>
    </div>
  )
}

export default Epp