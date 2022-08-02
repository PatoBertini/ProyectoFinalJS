// VARIABLES DE ACCESO GLOBAL
// Nav-bar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
// Display Menu
const menu = [];
let carrito = [];
// Elementos Padres Display Menu
const mainSection = document.querySelector(".box-container");
const btnContainer = document.querySelector(".btn-container");
// Elementos botones del menu
const filterBtns = document.querySelectorAll(".filter-btn");
// Elementos del carrito
const botonVaciar = document.getElementById("vaciar-carrito");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");
// Nuestras especialidades
const nombre = document.getElementById("plato");
const info = document.getElementById("info");
const precio = document.getElementById("precio");
const img = document.getElementById("plato-img");
// Carousel
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
// Setup starting item
let currentItem = 0;
// Sweet Alert
const confirmar = document.getElementById('confirmar');