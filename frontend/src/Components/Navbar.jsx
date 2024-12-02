import React from 'react'
import Logo from "../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='w-full py-0  md:flex justify-between items-center px-9'>
            <div className='w-full md:w-[160px] '>
                <img src={Logo} alt='logo' />
            </div>

            <form method='' className='flex my-3 '>
                <input type="Search" placeholder='Search Produc' className='p-2 md:p-4  w-[600px] md:w-[600px] border-2 border-r-0 border-gray-300 rounded-full rounded-r-md outline-none' />
                <input type="submit" value="Search" className='p-2 md:p-4 border-2 rounded-full bg-[#429121] rounded-l-md cursor- text-white' />
            </form>
            <div className='flex justify-between '>
                <div className='mr-9'>
                    <a href='#'>Login</a> | <a href='#'>Register</a>
                </div>
                <div className='flex items-center relative'>
                    <FaShoppingCart className='mr-3 w-8 h-6' /> <span className='p-[5px] rounded-full bg-green-600 absolute top-[-10px] right-2 text-white text-xs '>8</span>
                </div>
            </div>
        </div >
    )
}

export default Navbar