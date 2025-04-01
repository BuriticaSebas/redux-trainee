import { createReducer } from "@reduxjs/toolkit";
import { cambiosBusqueda } from "../actions/actions";
import { cambioCategoria } from "../actions/actions";

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


const estadoInicial = {
    products: initialProducts,
    categoria: "Todas",
    buscador: ""
}


const shopReducer = createReducer(estadoInicial, (constructor)=>{

    constructor.addCase(cambiosBusqueda, (/*state es el valor del estado global*/state, /*action es el valor que captura cambiobusqueda*/action )=>{
            state.buscador = action.payload
    })

    constructor.addCase(cambioCategoria, (state,action)=>{
        state.categoria = action.payload
    })

})


export default shopReducer