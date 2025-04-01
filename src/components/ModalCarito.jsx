import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { cerraModal } from '../../redux/actions/actions'
import { eliminarCarrito } from '../../redux/actions/actions'

const ModalCarito = () => {

    const {modal, carrito} = useSelector((state)=> state.shop)
    const dispacth = useDispatch()

    console.log(carrito)
    if(!modal) return null
    
    return (
    <div className='bg-amber-100 p-3 grid grid-cols-4 gap-4'>

        {carrito.map((product)=>(
                <div  key={product.id} className="col-span-2  bg-yellow-300  text-center  p-5 rounded-2xl">
                <p>Descripcion: {product.name}</p>
                <p>Categoria:{product.category}</p>
                <p>Precio: {product.price}</p>
                <button className="bg-red-200 p-2 rounded-lg hover:bg-red-700 "  onClick={()=> dispacth(eliminarCarrito(product.id))}>
                 Eliminar Del Carrito
                </button>
              </div>
        ))}
        
          
          
        <button className='col-1 bg-amber-700 p-3 rounded-lg' onClick={()=> dispacth(cerraModal(false))}>cerrar</button>
    </div>
  )
}

export default ModalCarito