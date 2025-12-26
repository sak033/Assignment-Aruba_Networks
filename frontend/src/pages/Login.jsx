import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {

    // State variables for form inputs and error messages 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    //logic for handling form submission
    const handleSubmit =(e)=>{
        e.preventDefault();

        if(!email.includes('@')){
            toast.error('Please enter a valid email address.');
            return;
        }

        if(password.length < 6){
            toast.error('Password must be at least 6 characters long.');
            return;
        }
        
        toast.success("Login Successful!")

        

    }

// UI using Tailwind CSS v4
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100  px-4'>
        <form onSubmit={handleSubmit} className='w-full bg-white shadow-md rounded-lg sm:w-[420px] md:w-[460px] lg:w-[480px] xl:w-[500px] 2xl:w-[520px] p-4 sm:p-6 md:p-8'>
            
            <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-center mb-4'>LOGIN</h2>

            <input type="email" placeholder='Email' className='w-full border rounded px-3 py-2 text-sm sm:text-base mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder='Password' className='w-full border rounded px-3 py-2 text-sm sm:text-base mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500' value={password} onChange={(e)=> setPassword(e.target.value)} />

            
            <button className='w-full bg-amber-300 text-black rounded py-2 sm:py-2.5 text-sm sm:text-base hover:bg-black hover:text-white transition'>Login</button>

            <p className='text-xs sm:text-sm text-center mt-3 text-blue-500'>Don’t have an account?
                {" "}
                <Link to="/signup" className='text-blue-500'>Signup</Link>
            </p>
        </form>
    </div>
  )
}


export default Login;