/*
=============== 
Nav-Bar
===============
*/

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
  // links.classList.toggle("show-links");
});

/*
=============== 
Modal Nav-bar
===============
*/

//Variables
const contenedorModal = document.getElementsByClassName("modal-contenedor")[0];
const botonAbrir = document.getElementById("boton-carrito");
const botonCerrar = document.getElementById("carritoCerrar");
const modalCarrito = document.getElementsByClassName("modal-carrito")[0];

botonAbrir.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});
botonCerrar.addEventListener("click", () => {
  contenedorModal.classList.toggle("modal-active");
});

contenedorModal.addEventListener("click", (event) => {
  contenedorModal.classList.toggle("modal-active");
});

modalCarrito.addEventListener("click", (event) => {
  event.stopPropagation(); //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
  //padre
});

/*
=============== 
Interfaz del usuario
===============
*/

// Agregar una categoria con la interfaz

let categorias = [];

reclamarCategoria();

let botonCategoria = document.getElementById("addCategoria");

botonCategoria.addEventListener("click", agregarCategoria);

function agregarCategoria() {
  let valor = document.getElementById("textoCategoria").value;
  if (valor != "") {
    categorias.push(valor);
    localStorage.setItem("listaCategorias", categorias);
  }
  document.getElementById("textoCategoria").value = "";
  reclamarCategoria();
}

function reclamarCategoria() {
  if ("listaCategorias" in localStorage) {
    categorias = localStorage.getItem("listaCategorias").split(",");

    let salida = `<option>${categorias.join("</option><option>")}</option>`;

    document.getElementById("categorias").innerHTML = salida;
  }
}

// Mandar un producto al localstorage y luego agregarlo a un div.

let productos = [];

class Productos {
  constructor(nombre, precio, id, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.categoria = categoria;
  }
}

// Obtenemos los elementos del DOM para manejarlos en JS
let espacioProductos = document.getElementById("productosInterfaz");
let registrarProductos = document.getElementById("registroProducto");
let filtrarProducto = document.getElementById("filtroProducto");
let limpiarProducto = document.getElementById("limpiar");
let limpiarStorage = document.getElementById("storage");

// Pregunto si ya existen productos en el localStorage para recuperarlos
if ("Mercaderias" in localStorage) {
  const guardados = JSON.parse(localStorage.getItem("Mercaderias"));
  // Los transformo a objetos de tipo producto
  for (const x of guardados) {
    productos.push(new Productos(x.nombre, x.precio, x.id));
  }
  productoHTML(productos);
}

// Agrego un manejador de evento submit al formulario
registrarProductos.onsubmit = (e) => {
  e.preventDefault();
  let hijos = registrarProductos.children; // Obtengo la info de los hijos del formulario
  productos.push(new Productos(hijos[0].value, hijos[1].value, hijos[2].value));
  productoHTML(productos); // LLamo a la funcion para generar la interfaz
  e.target.reset(); // Reseteo el input
  localStorage.setItem("Mercaderias", JSON.stringify(productos));
};

// Funcion para generar interfaz
function productoHTML(array) {
  espacioProductos.innerHTML = "";
  for (const x of array) {
    let div = document.createElement("div");
    div.className = "probando";
    div.innerHTML = `<h3> Nombre del producto: ${x.nombre} </h3> 
    <h4> Precio: ${x.precio}</h4>
    <button id='${x.id}' class = 'filter-btn'>Comprar</button>`;
    espacioProductos.append(div);
  }
}

// Agrego un evento input en el filtro
filtrarProducto.addEventListener("input", function () {
  const filtrados = productos.filter((x) => x.nombre.includes(this.value));
  console.log(filtrados);
  if (filtrados.length > 0) {
    productoHTML(filtrados);
  } else {
    espacioProductos.innerHTML = "No se encontraron los productos indicados";
  }
});

//Limpiar filtro
limpiarProducto.onclick = () => {
  filtrarProducto.value = "";
  productoHTML(productos);
};

// Limpiar el localStorage
limpiarStorage.onclick = () => {
  localStorage.removeItem("Mercaderias");
  window.location.reload();
};

/*
=============== 
Arrays tarjeta cards del menu
===============
*/

const menu = [
  {
    id: 1,
    nombre: "Papas con cheddar y bacon",
    categoria: "Entrantes",
    precio: 450,
    img: "./img/displayMenu/papas.jpg",
    desc: `Papas fritas con salsa casera de cheddar y una lluvia de bacon`,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Mix de croquetas fritas",
    categoria: "Entrantes",
    precio: 750,
    img: "./img/displayMenu/croquetas.jpeg",
    desc: `Disfruta estas 6 croquetas de bacalao, jamon y queso`,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Plovoleta a la fugazzeta",
    categoria: "Entrantes",
    precio: 420,
    img: "./img/displayMenu/provoleta.jpeg",
    desc: `Deliciosa provoleta cubierta por cebolla pochada en miel y cerveza`,
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Ensalada Waldorf",
    categoria: "Plato Principal",
    precio: 420,
    img: "./img/displayMenu/ensalada.jpg",
    desc: `Ensalada Waldorf con mix de verduras y frutas acompañada con nuestra salsa de la casa.`,
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Smokey Onion Burger",
    categoria: "Plato Principal",
    precio: 980,
    img: "img/h-3.jpg",
    desc: `Hamburguesa de la casa con Smokey Onion y Honey Mustard `,
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Brochette Estilo Oriental",
    categoria: "Entrantes",
    precio: 820,
    img: "./img/displayMenu/brochetteIndian.jpg",
    desc: `Brochettes de pollo estilo oriental con arroz thai y chimichurri`,
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Briscket Al Ajillo",
    categoria: "Plato Principal",
    precio: 1890,
    img: "./img/displayMenu/lomo.jpg",
    desc: `Nuestro famoso Brisket de 1000 Grms marinado al vacio con ajo y romero, cocinado a baja temperatura y sellado a la leña, acompañado con papas fritas.`,
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Parrillada a las brasas",
    categoria: "Plato Principal",
    precio: 1820,
    img: "./img/displayMenu/parrillada.jpg",
    desc: `Nuestra tradicional Parrillada para compartir acompañado de nuestras tradicionales salsas caseras.`,
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Salmon Estilo Oriental",
    categoria: "Plato Principal",
    precio: 1820,
    img: "./img/displayMenu/salmonOriental.jpg",
    desc: `Salmon estilo oriental acompañado de nuestra especial salsa Yakitori y wok de verduras.`,
    cantidad: 1,
  },

  {
    id: 10,
    nombre: "Brownie con helado",
    categoria: "Postres",
    precio: 650,
    img: "./img/displayMenu/brownieSolo.jpg",
    desc: `Nuestro famoso brownie con helado de americana `,
    cantidad: 1,
  },

  {
    id: 11,
    nombre: "Banana Pancakes",
    categoria: "Postres",
    precio: 600,
    img: "./img/displayMenu/bananaPancake.jpg",
    desc: `Torre de wafles cubiertos por una lluvia de banana y glaseado de sirope de arce`,
    cantidad: 1,
  },
  {
    id: 12,
    nombre: "Berrys Pancakes",
    categoria: "Postres",
    precio: 640,
    img: "./img/displayMenu/berryPancake.jpg",
    desc: `Torre de wafles rellenos de arandanos y bananas cubiertos por un almibar de frutos rojos.`,
    cantidad: 1,
  },

  {
    id: 13,
    nombre: "Mousse de chocolate",
    categoria: "Postres",
    precio: 780,
    img: "./img/displayMenu/postreChocolate.jpg",
    desc: `Nuestro famoso Mousse de chocolate cubierto con un glaseado de frutos rojos.`,
    cantidad: 1,
  },
  {
    id: 14,
    nombre: "CheeseCake de Frutos Rojos",
    categoria: "Postres",
    precio: 750,
    img: "./img/displayMenu/postreFrutilla.jpg",
    desc: `Torta Cheesecake de frutos rojos.`,
    cantidad: 1,
  },
  {
    id: 15,
    nombre: "Torta Tres Leches",
    categoria: "Postres",
    precio: 920,
    img: "./img/displayMenu/postreTresLeches.jpg",
    desc: `Nuestro especial postre ganador del premio al mejor postre de la región, Nuestro especial Torta Tres Leches relleno de diferente mousses..`,
    cantidad: 1,
  },
];

// Elementos Padres
const mainSection = document.querySelector(".box-container");
const btnContainer = document.querySelector(".btn-container");
let carrito = [];


// Display todos los items cuando carga la pagina.
// window.addEventListener("DOMContentLoaded", function () {
//   displayMenuItems(menu)
// });

// Agregamos el Array Menu para mostrar los productos de venta

menu.forEach((x) => {
  const boxDiv = document.createElement("div");
  boxDiv.classList.add("box");
  boxDiv.innerHTML = `<img src=${x.img} alt="menu item" class="foto"/>
  <div class="content">
  <h3>${x.nombre}</h3>
  <p>${x.desc}</p>
  <button href="#" id="${x.id}" class="btn-compra">Agregar</button>
  </div>`;
  mainSection.appendChild(boxDiv);

  const boton = document.getElementById(`${x.id}`);

  boton.addEventListener("click", () => {
    agregarCarrito(x.id);
  });
});

// Funcion para agregar el Array Menu
function displayMenuItems(array) {
  let displayMenu = array.map(function (x) {
    return `<div class="box">
  <img src=${x.img} alt="menu item" class="foto" />
  <div class="content">
  <h3>${x.nombre}</h3>
  <p>${x.desc}</p>
  <button href="#" id="${x.id}" class="btn-compra">Agregar</button>
  </div>
  </div>`;
  });
  displayMenu = displayMenu.join(""); // Se agregan comillas para sacar las comas del array.
  mainSection.innerHTML = displayMenu;
  const boton = document.getElementById(`${x.id}`);
}

// Funcion para filtrar los botones del menu dependiendo la categoria seleccionada

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.dataset);
    const categoria = e.currentTarget.dataset.id;
    console.log(categoria);
    const menuCategory = menu.filter(function (array) {
      if (array.categoria === categoria) {
        return array;
      }
    });
    // console.log(menuCategory);
    if (categoria === "Todos") {
      return displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

/*
=============== 
Contenedor carrito
===============
*/

// Funcion carrito

const botonVaciar = document.getElementById("vaciar-carrito");
const contenedorCarrito = document.getElementById("carrito-contenedor");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("Carrito")) {
    carrito = JSON.parse(localStorage.getItem("Carrito"));
    actualizarCarrito();
  }
});

botonVaciar.addEventListener("click", () => {
  carrito.length = 0;
  localStorage.removeItem("Carrito");
  actualizarCarrito();
});

const agregarCarrito = (prodID) => {
  const item = menu.find((prod) => prod.id === prodID);
  carrito.push(item);
  actualizarCarrito();
};

const eliminarDelCarrito = (prodID) => {
  const item = carrito.find((prod) => prod.id === prodID);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizarCarrito();
};

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
    <p class="item-carrito">${prod.nombre}</p>
    <p class="item-carrito">Precio:$${prod.precio}</p>
    <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
    <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `;
    contenedorCarrito.appendChild(div);
    localStorage.setItem("Carrito", JSON.stringify(carrito));
  });
  contadorCarrito.innerHTML = carrito.length;
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
};

/*
=============== 
Nuestras especialidades menu
===============
*/

const dailyMenu = [
  {
    id: 0,
    nombre: "BBQ Smokey Burger",
    info: "Tradicional hamburguesa casera estilo americana de 250 grs, Grillada a la leña, con queso cheddar, BBQ Smokey Honey, Panceta ahumada y Cebolla caramelizada.",
    precio: "Precio: " + 1325 + "$",
    img: "img/dailyMenu/bbqburger.jpg",
  },
  {
    id: 1,
    nombre: "Chicken Brochettes Estilo Oriental ",
    info: "Brochettas de pollo y mix de verduras cocinadas a fuego lento y marinadas en salsa teriyaki casera.",
    precio: "Precio: " + 1110 + "$",
    img: "img/dailyMenu/teriyaki.jpeg",
  },
  {
    id: 2,
    nombre: "Nashville Chicken Burger ",
    info: "Tradicional filet de pollo empanado con especias ahumadas y un toque de spicy acompañado de una coleslaw y nuestra especial salsa Smokey Mayo.",
    precio: "Precio: " + 1210 + "$",
    img: "img/dailyMenu/carlton.jpg",
  },
  {
    id: 3,
    nombre: "Mexican Tacos de Birria de Res ",
    info: "4 unidades de tacos mexicanos rellenos de carne de res cocinada por 4 horas a fuego medio en su salsa picante, acompañado de pico de gallo casero y cilantro.",
    precio: "Precio: " + 1305 + "$",
    img: "img/dailyMenu/birria.jpeg",
  },
  {
    id: 4,
    nombre: "Philly CheeseSteak Sandwich ",
    info: "Hebras de lomo salteadas con cebollas caramelizadas, queso parmesano y queso cheddar aderezadas con nuestra tradicional Secret Mayo en pan Baguette.",
    precio: "Precio: " + 1150 + "$",
    img: "img/dailyMenu/steaky.jpg",
  },
];

const nombre = document.getElementById("plato");
const info = document.getElementById("info");
const precio = document.getElementById("precio");
const img = document.getElementById("plato-img");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Setup starting item
let currentItem = 0;

// Setup load Pagina inicial

window.addEventListener("DOMContentLoaded", function () {
  mostrarPlato();
});

// Mostrar plato basada en item

function mostrarPlato() {
  const item = dailyMenu[currentItem];
  nombre.textContent = item.nombre;
  info.textContent = item.info;
  precio.textContent = item.precio;
  img.src = item.img;
}

// La funcion mostrarPlato te va a mostrar el plato id: 0 del array dailyMenu por que esta seteado en la variable currentItem

// Mostrar el plato siguiente

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > dailyMenu.length - 1) {
    currentItem = 0;
  }
  mostrarPlato();
});

// Mostrar el plato anterior

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = dailyMenu.length - 1;
  }
  mostrarPlato();
});

// Mostrar un plato al azar

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * dailyMenu.length);
  mostrarPlato();
});

/*
=============== 
Loader icono burger
===============
*/

// function loader() {
//   document.querySelector(".loader-container").classList.add("fade-out");
// }

// function fadeOut() {
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut();

/*
=============== 
Swiper de foto 
===============
*/

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
