import { createAction } from "@reduxjs/toolkit";


const cambiosBusqueda = createAction('shop/cambiarValorBusqueda')
const cambioCategoria = createAction('shop/cambirValordeCategoria')


export {cambiosBusqueda, cambioCategoria}