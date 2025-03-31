import React from 'react'
import { MdLocalGroceryStore } from "react-icons/md";


const Navbar = () => {
    return (
        <>
            <nav className='bg-stone-300  flex items-center justify-between  p-2'>
                <div>

                    <div className='bg-stone-200  p-2'><h1>LOGO</h1></div>

                </div>

                <div>
                    <ul className='flex  items-center items-center gap-3'>
                        <li className='hover:text-stone-600'>Home</li>
                        <li className='hover:text-stone-600'>Cities</li>
                        <li className='hover:text-stone-600 '>
                            <button><MdLocalGroceryStore /></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar