import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { añadirCarrito } from "../../redux/actions/actions";

const Container = () => {

  const {products,categoria,buscador,} = useSelector((state)=> state.shop)

  const dispatch = useDispatch();


  const productsEqualFilters = products.filter((product)=> {
      const equalCategory = categoria === "Todas" || categoria === product.category
      const equalBuscador = product.name.toLowerCase().includes(buscador.toLowerCase())

      return equalCategory && equalBuscador
  })


  const añadirelcarrito = (product) =>{
      console.log("Este es el producto seleccionado", product)
  }

  return (
    <>
      <div className="bg-stone-200  grid grid-cols-4  gap-6 p-2 mt-10">
        {productsEqualFilters.map((product) => (
          <div key={product.id} className="col-span-2  bg-yellow-300  text-center  p-5">
            <p>Descripcion:{product.name}</p>
            <p>Categoria:{product.category}</p>
            <p>Precio:{product.price}</p>
            <button className="bg-red-200 p-2 rounded-lg hover:bg-red-700"  onClick={()=> dispatch(añadirCarrito(product))}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Container;


