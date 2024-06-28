import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:border-white">✕</Link>
    
    <h3 className="font-bold text-lg">SignUp Here</h3>
    {/* Name Input */}
    <div className='mt-4 space-y-2'>
        <span>Name</span><br/>
        <input 
        type="text" 
        placeholder='Enter your Name' 
        className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
        {...register("name", { required: true })}
        />
        <br/>
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Email Input */}
    <div className='mt-4 space-y-2'>
        <span>Email</span><br/>
        <input 
        type="email" 
        placeholder='Enter your Email' 
        className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
        {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Password Input */}
    <div className='mt-4 space-y-2'>
        <span>Password</span><br/>
        <input 
        type="text" 
        placeholder='Enter your Password' 
        className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
        {...register("password", { required: true })}
        />
        <br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Button and text*/}
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white cursor-pointer rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>SignUp</button>
        <p className='px-3 py-1ntext-xl'>Have Account?{" "}
        <button className='text-blue-500 underline cursor-pointer hover:text-blue-700'
        onClick={()=>
            document.getElementById("my_modal_3").showModal()
        }
        >
        Login
        </button></p>
        <Login/>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup