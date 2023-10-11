import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Swiper from 'swiper'

import {
  calcularTotal,
  comprarProducto,
  eliminarProducto,
  eliminarProductoCompra,
  leerLocalStorage,
  leerLocalStorageCompra,
  obtenerEvento,
  procesarCarrito,
  vaciarCarrito,
} from './src/carrito'

const productos = document.getElementById('lista-productos')
//console.log(productos)
const carrito = document.getElementById('carrito')
// console.log(carrito)
const carritoCompra = document.getElementById('lista-compra')

cargarEventos()

function cargarEventos() {
  const ruta = String(location.pathname)
  console.log(ruta)

  if (ruta.includes('carrito.html')) {
    esCarrito()
  } else if (ruta.includes('index.html') || ruta == '/') {
    esIndex()
  }
  else if (ruta.includes('contacto.html')) {
    esContacto() 
}
  }
function esIndex() {
  console.log('No estoy en carrito!')
  const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
  const procesarCarritoBtn = carrito.querySelector('#procesar-carrito')
  console.log(vaciarCarritoBtn, procesarCarritoBtn)

  // Se ejecuta cuando presiono sobre el botón comprar
  productos.addEventListener('click', (e) => comprarProducto(e))
  console.log(comprarProducto)

  // Al cargar el documento se muestra lo almacenado en el LS
  document.addEventListener('DOMContentLoaded', leerLocalStorage())

  //Cuando se elimina un producto del carrito
  carrito.addEventListener('click', (e) => eliminarProducto(e))

  //Vaciar carrito
  vaciarCarritoBtn.addEventListener('click', (e) => vaciarCarrito(e))

  // Enviar pedido a otra página
  procesarCarritoBtn.addEventListener('click', (e) => procesarCarrito(e))
}

function esCarrito() {
  console.log('Estoy en carrito')
  // Voy a leer el localStorage
  document.addEventListener('DOMContentLoaded', leerLocalStorageCompra())

  carritoCompra.addEventListener('click', (e) => eliminarProductoCompra(e))

  calcularTotal()

  carritoCompra.addEventListener('change', (e) => obtenerEvento(e))
  carritoCompra.addEventListener('keyup', (e) => obtenerEvento(e))
}



const toggle = document.getElementById('toggleDark')



const body = document.querySelector('body')
const header = document.querySelector('header')
const card = document.querySelector('card')


const estaEnDarkMode = localStorage.getItem('darkmode')
console.log(estaEnDarkMode)
if(estaEnDarkMode === 'si') {
  cambiarDarkMode()
}


toggle.addEventListener('click', function () {
  cambiarDarkMode()

  if (localStorage.getItem('darkmode') === 'si') {
    localStorage.setItem('darkmode', 'no')
  } else {
    localStorage.setItem('darkmode', 'si')
  } 

  
})

function cambiarDarkMode() {
  toggle.classList.toggle('bi-moon')
  body.classList.toggle('dark')
}

function esContacto() {
  const form = document.querySelector('#formContacto');
const modal = document.querySelector('#modalGracias');
const closeModal = document.querySelector('.modal-close');

form.addEventListener('submit', (e)=>{
   console.log('Submit form!!')
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
}
