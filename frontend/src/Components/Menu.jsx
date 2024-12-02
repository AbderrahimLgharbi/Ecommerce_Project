import React from 'react'
// import { Link } from x'react-router-dom'

const Menu = () => {
    return (

        <nav className='hidden md:block px-10 py-2  bg-[#358410]'>
            <ul className='flex justify-between w-[50%] text-white font-mono'>
                <li>
                    <a href='2'>Home</a>
                </li>
                <li>
                    <a href='3'>Features</a>
                </li>
                <li>
                    <a href='34'>collectoins</a>
                </li>
                <li>
                    <a href='#'>Shop</a>
                </li>
                <li>
                    <a href='#'>About Us</a>
                </li>
                <li>
                    <a href='#'>Contact Us</a>
                </li>
                {/* <li>
                        <Link to='/'>Featuared</Link>
                    </li>
                    <li>
                        <Link to='/'>Collection</Link>
                    </li>
                    <li>
                        <Link to='/'>Shop</Link>r
                    </li>
                    <li>
                        <Link to='/'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact Us</Link>
                    </li> */}
            </ul>
        </nav>

    )
}

export default Menu