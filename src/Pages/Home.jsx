import React, { useState } from 'react'
import Container from '../components/Container'

import SearchBar from '../components/SearchBar'

const initialProducts = [
  { id: 1, name: "Zapatillas Deportivas", category: "Zapatos", price: 59.99 },
  { id: 2, name: "Camiseta Básica", category: "Camisetas", price: 19.99 },
  { id: 3, name: "Gorra de Béisbol", category: "Accesorios", price: 14.99 },
  { id: 4, name: "Abrigo de Lana", category: "Abrigos", price: 89.99 },
  { id: 5, name: "Sandalias", category: "Zapatos", price: 29.99 },
  { id: 6, name: "Camiseta Gráfica", category: "Camisetas", price: 24.99 },
  { id: 7, name: "Bufanda", category: "Accesorios", price: 12.99 },
  { id: 8, name: "Chaqueta de Cuero", category: "Abrigos", price: 129.99 },
];


const Home = () => {

  const copiaProducts = [... initialProducts]

  const [categoria,setCategoria] = useState("Todas")
  const [buscador, setBuscador] = useState("")


  function selectCategoria(nuevaSeleccion){
    setCategoria(nuevaSeleccion)
  }

  function textoBuscar(textoIngresado){
    setBuscador(textoIngresado)
  }

  return (
    <>

    <div className='w-full min-h-screen bg-blue-100 flex justify-center items-center'>

    <div className="h-full bg-blue-500  flex flex-col p-4 my-10">
    <SearchBar 
    categoria = {categoria} buscador ={buscador} 
     selectCategoria = {selectCategoria} textoBuscar = {textoBuscar}
    ></SearchBar>

    <Container copiaProducts ={copiaProducts} buscador = {buscador} categoria = {categoria}></Container>
    </div>
        

    </div>   
    
    </>
  )
}

export default Home
