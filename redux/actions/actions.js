import { createAction } from "@reduxjs/toolkit";


const cambiosBusqueda = createAction('shop/cambiarValorBusqueda')
const cambioCategoria = createAction('shop/cambirValordeCategoria')
const abrirModal = createAction('shop/abriModal')
const cerraModal = createAction ('shop/cerrModal')
const añadirCarrito = createAction('shop/añadirCarrito')
const eliminarCarrito = createAction('shop/eliminarCarrito')


export {cambiosBusqueda, cambioCategoria, abrirModal, cerraModal, añadirCarrito,eliminarCarrito}