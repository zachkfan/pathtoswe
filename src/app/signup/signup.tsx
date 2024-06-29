import React from 'react';
import Link from 'next/link'


const sign_up_form = () => {
    const inputStyle = {

    }
    return (
    <div className="min-h-screen flex items-center justify-center bg-black-gray">
        <img src="./black_gray_logo.png" className="absolute top-0 left-0 w-48 h-48 p-2" />
        <div className="flex-col justify-center w-2/5 py-8 px-14 bg-white text-black rounded-lg">
            <h1 className="text-3xl pb-5 font-semibold text-center">Sign Up</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="bg-white mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="bg-white mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="bg-white mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="bg-white mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 h-12">Sign Up</button>
            </form>
            <div className="flex flex-row flex-nowrap items-center space-x-4">
                <hr className="w-full border-t-2 border-gray-200" />
                <div className="m-2 text-gray-200 text-center">or</div>
                <hr className="w-full border-t-2 border-gray-200" />
            </div>
            <div className="flex items-center justify-center">
                <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 h-12 w-full">
                    <img src="./google_logo.png" className="w-8 h-8 ml-1"></img>
                    <span className="text-gray-700 font-semibold w-full mr-9">Sign up with Google</span>
                </button>
            </div>
            <div className="flex flex-row items-center justify-center pt-4">
                <p className="mr-1">Already a member </p>
                <Link href="/" className="underline font=bold"> Sign in</Link>
            </div>
        </div>
    </div>
  );
}

export default sign_up_form;