import React from 'react'
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { abrirModal } from '../../redux/actions/actions';
import ModalCarito from './modalCarito';

const Navbar = () => {

    const {modal} = useSelector((state) => state.shop)

    const dispacth= useDispatch()

    return (
        <>
            <nav className='bg-stone-300  flex items-center justify-between  p-2'>
                <div>

                    <div className='bg-stone-200  p-2'><h1>LOGO</h1></div>

                </div>

                <div>
                    <ul className='flex  items-center gap-3'>
                        <li className='hover:text-stone-600'>Home</li>
                        <li className='hover:text-stone-600'>Cities</li>
                        <li className='hover:text-stone-600 '>
                            <button className='bg-amber-400 p-2 rounded-lg' onClick={()=> dispacth(abrirModal(true))}><MdLocalGroceryStore /></button>
                        </li>
                    </ul>
                </div>
            </nav>
            <ModalCarito></ModalCarito>
        </>
    )
}

export default Navbar