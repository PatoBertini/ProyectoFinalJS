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
Arrays tarjeta cards del menu
===============
*/

class Plato {
  constructor(id, nombre, categoria, precio, url, desc, cantidad) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = parseFloat(precio);
    this.img = url;
    this.desc = desc;
    this.cantidad = cantidad || 1;
  }

  addCantidad() {
    this.cantidad++;
  }
}
const menu = [];
menu.push(
  new Plato(
    1,
    "Papas con cheddar y bacon",
    "Entrantes",
    450,
    "./img/displayMenu/papas.jpg",
    `Papas fritas con salsa casera de cheddar y una lluvia de bacon`
  )
);
menu.push(
  new Plato(
    2,
    "Mix de croquetas fritas",
    "Entrantes",
    750,
    "./img/displayMenu/croquetas.jpeg",
    `Disfruta estas 6 croquetas de bacalao, jamon y queso`
  )
);
menu.push(
  new Plato(
    3,
    "Plovoleta a la fugazzeta",
    "Entrantes",
    420,
    "./img/displayMenu/provoleta.jpeg",
    `Deliciosa provoleta cubierta por cebolla pochada en miel y cerveza`
  )
);
menu.push(
  new Plato(
    4,
    "Ensalada Waldorf",
    "Plato Principal",
    450,
    "./img/displayMenu/ensalada.jpg",
    `Ensalada Waldorf con mix de verduras y frutas acompañada con nuestra salsa de la casa`,
    1
  )
);
menu.push(
  new Plato(
    5,
    "Smokey Onion Burger",
    "Plato Principal",
    980,
    "./img/h-3.jpg",
    `Hamburguesa de la casa con Smokey Onion y Honey Mustard`
  )
);
menu.push(
  new Plato(
    6,
    "Brochette Estilo Oriental",
    "Entrantes",
    820,
    "./img/displayMenu/brochetteIndian.jpg",
    `Brochettes de pollo estilo oriental con arroz thai y chimichurri`
  )
);
menu.push(
  new Plato(
    7,
    "Briscket Al Ajillo",
    "Plato Principal",
    1980,
    "./img/displayMenu/lomo.jpg",
    `Nuestro famoso Brisket de 1000 Grms marinado al vacio con ajo y romero, cocinado a baja temperatura y sellado a la leña, acompañado con papas fritas`
  )
);
menu.push(
  new Plato(
    8,
    "Parrillada a las brasas",
    "Plato Principal",
    1820,
    "./img/displayMenu/parrillada.jpg",
    `Nuestra tradicional Parrillada para compartir acompañado de nuestras tradicionales salsas caseras`
  )
);
menu.push(
  new Plato(
    9,
    "Salmon Estilo Oriental",
    "Plato Principal",
    1820,
    "./img/displayMenu/salmonOriental.jpg",
    `Salmon estilo oriental acompañado de nuestra especial salsa Yakitori y wok de verduras`
  )
);
menu.push(
  new Plato(
    10,
    "Brownie con helado",
    "Postres",
    650,
    "./img/displayMenu/brownieSolo.jpg",
    `Nuestro famoso brownie con helado de americana`
  )
);
menu.push(
  new Plato(
    11,
    "Banana Pancakes",
    "Postres",
    600,
    "./img/displayMenu/bananaPancake.jpg",
    `Torre de wafles cubiertos por una lluvia de banana y glaseado de sirope de arce`
  )
);
menu.push(
  new Plato(
    12,
    "Berrys Pancakes",
    "Postres",
    980,
    "./img/displayMenu/berryPancake.jpg",
    `Torre de wafles rellenos de arandanos y bananas cubiertos por un almibar de frutos rojos`
  )
);
menu.push(
  new Plato(
    13,
    "Mousse de chocolate",
    "Postres",
    880,
    "./img/displayMenu/postreChocolate.jpg",
    `Nuestro famoso Mousse de chocolate cubierto con un glaseado de frutos rojos`
  )
);
menu.push(
  new Plato(
    14,
    "CheeseCake de Frutos Rojos",
    "Postres",
    760,
    "./img/displayMenu/postreFrutilla.jpg",
    `TorTorta Cheesecake de frutos rojos.`
  )
);
menu.push(
  new Plato(
    15,
    "Torta Tres Leches",
    "Postres",
    990,
    "./img/displayMenu/postreTresLeches.jpg",
    `Nuestro especial postre ganador del premio al mejor postre de la región, Nuestro especial Torta Tres Leches relleno de diferente mousses.`
  )
);

console.log(menu);

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

/*

// funcion para plasmar un array en la web
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
}
*/

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
  detalleCompraHTML(cliente,item);
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
Eventos adicionales
===============
*/

function detalleCompraHTML(
  { nombre: razon, trabajo: { empresa, profesion } },
  producto
) {
  let divDetalle = document.createElement("div");
  divDetalle.innerHTML = `Cliente: ${razon}-
                          Profesion: ${profesion} -
                          Empresa: ${empresa}
                          Producto: ${producto.nombre}
                          Precio: ${producto.precio}`;
  document.body.prepend(divDetalle);
}

//Objeto literal de informacion de cliente
const cliente = {
  nombre: "Chavo del 8",
  estado: "exento",
  trabajo: {
    profesion: "Comediante",
    empresa: "Telefe",
  },
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
