// Tarjetas cards del menu

const menu = [
  {
    id: 1,
    nombre: "Hamburguesa Completa",
    categoria: "Plato Principal",
    precio: 980,
    img: "img/displayMenu/burgerCompleta.jpg",
    desc: `Hamburguesa completa con jamon, queso, lechuga, tomate, bacon y huevo `,
  },
  {
    id: 2,
    nombre: "Brownie con helado",
    categoria: "Postres",
    precio: 650,
    img: "./img/displayMenu/brownieSolo.jpg",
    desc: `Nuestro famoso brownie con helado de americana `,
  },
  {
    id: 3,
    nombre: "Papas con cheddar y bacon",
    categoria: "Entrantes",
    precio: 450,
    img: "./img/displayMenu/papas.jpg",
    desc: `Papas fritas con salsa casera de cheddar y una lluvia de bacon`,
  },
  {
    id: 4,
    nombre: "Mix de croquetas fritas",
    categoria: "Entrantes",
    precio: 750,
    img: "./img/displayMenu/croquetas.jpeg",
    desc: `Disfruta estas 6 croquetas de bacalao, jamon y queso`,
  },
  {
    id: 5,
    nombre: "Plovoleta a la fugazzeta",
    categoria: "Entrantes",
    precio: 420,
    img: "./img/displayMenu/provoleta.jpeg",
    desc: `Deliciosa provoleta cubierta por cebolla pochada en miel y cerveza`,
  },
  {
    id: 6,
    nombre: "Banana Pancakes",
    categoria: "Postres",
    precio: 600,
    img: "./img/displayMenu/bananaPancake.jpg",
    desc: `Torre de wafles cubiertos por una lluvia de banana y glaseado de sirope de arce`,
  },
  {
    id: 7,
    nombre: "Berrys Pancakes",
    categoria: "Postres",
    precio: 640,
    img: "./img/displayMenu/berryPancake.jpg",
    desc: `Torre de wafles rellenos de arandanos y bananas cubiertos por un almibar de frutos rojos.`,
  },
  {
    id: 8,
    nombre: "Brochette Estilo Oriental",
    categoria: "Entrantes",
    precio: 820,
    img: "./img/displayMenu/brochetteIndian.jpg",
    desc: `Dos unidades de brochettes de pollo con mix de verduras condimentado con especies orientales acompañado de arroz thai y pico de gallo.`,
  },
  {
    id: 9,
    nombre: "Ensalada Waldorf",
    categoria: "Plato Principal",
    precio: 420,
    img: "./img/displayMenu/ensalada.jpg",
    desc: `Nuestra especial Ensalada Waldorf adaptada a nuestro paladar. Compuesta por: Lechuga, Zanahoria, Nueces, Queso de Cabra, Olivas Negras, Manzana y Cebolla Morada. Condimentada con nuestra salsa especial para ensaladas.`,
  },
  {
    id: 10,
    nombre: "Briscket Al Ajillo",
    categoria: "Plato Principal",
    precio: 1890,
    img: "./img/displayMenu/lomo.jpg",
    desc: `Nuestro famoso Brisket de 1000 Grms marinado al vacio con ajo y romero, cocinado a baja temperatura y sellado a la leña, acompañado con papas fritas.`,
  },
  {
    id: 11,
    nombre: "Parrillada a las brasas",
    categoria: "Plato Principal",
    precio: 1820,
    img: "./img/displayMenu/parrillada.jpg",
    desc: `Nuestra tradicional Parrillada para compartir acompañado de nuestras tradicionales salsas caseras.`,
  },
  {
    id: 12,
    nombre: "Mousse de chocolate",
    categoria: "Postres",
    precio: 780,
    img: "./img/displayMenu/postreChocolate.jpg",
    desc: `Nuestro famoso Mousse de chocolate cubierto con un glaseado de frutos rojos.`,
  },
  {
    id: 13,
    nombre: "CheeseCake de Frutos Rojos",
    categoria: "Postres",
    precio: 750,
    img: "./img/displayMenu/postreFrutilla.jpg",
    desc: `Torta Cheesecake de frutos rojos.`,
  },
  {
    id: 14,
    nombre: "Torta Tres Leches",
    categoria: "Postres",
    precio: 920,
    img: "./img/displayMenu/postreTresLeches.jpg",
    desc: `Nuestro especial postre ganador del premio al mejor postre de la región, Nuestro especial Torta Tres Leches relleno de diferente mousses..`,
  },
  {
    id: 15,
    nombre: "Salmon Estilo Oriental",
    categoria: "Plato Principal",
    precio: 1820,
    img: "./img/displayMenu/salmonOriental.jpg",
    desc: `Salmon estilo oriental acompañado de nuestra especial salsa Yakitori y wok de verduras.`,
  },
];

// Elementos Padres
const mainSection = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Display todos los items cuando carga la pagina.
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

// Funcion para agregar el Array Menu
function displayMenuItems(array) {
  let displayMenu = array.map(function (x) {
    return `<div class="menu-item">
  <img src=${x.img} alt="menu item" class="foto" />
  <div class=${x.nombre}>
    <header>
      <h4>${x.nombre}</h4>
      <h4 class="precio">${x.precio}</h4>
    </header>
    <button class="reveal-btn">
      <i class="fa-solid fa-burger icon"></i>
    </button>
    <div class="item-text hidden-content">
    ${x.desc}
    </div>
  </div>
</div>`;
  });
  displayMenu = displayMenu.join(""); // Se agregan comillas para sacar las comas del array.
  mainSection.innerHTML = displayMenu;
}

// Funcion para filtrar los botones del menu dependiendo la categoria seleccionada

const filterBtns = document.querySelectorAll(".filter-btn");

// console.log(filterBtns);

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.dataset);
    const categoria = e.currentTarget.dataset.id;
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

// Intentando hacer funcionar el boton para que revele un texto.
const revealBtn = document.getElementsByClassName("reveal-btn");
const hiddenContent = document.getElementsByClassName("hidden-content");

console.log(revealBtn);
console.log(hiddenContent);

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}
// revealBtn.addEventListener("click", revealContent);

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
// let categorias = ["Entrantes", "Plato principal", "Postres"];

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
let limpiarStorage = document.getElementById('storage')

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
  const filtrados = productos.filter((x) =>
    x.nombre.includes(this.value)
  );
  console.log(filtrados);
  if (filtrados.length > 0) {
    productoHTML(filtrados);
  } else {
    espacioProductos.innerHTML = "No se encontraron los productos indicados";
  }
});

//Limpiar filtro
limpiarProducto.onclick= () => {
  filtrarProducto.value= "";
  productoHTML(productos);
}

// Limpiar el localStorage
limpiarStorage.onclick= () => {
  localStorage.removeItem('Mercaderias')
  window.location.reload(); 
}

// Daily Menu

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
  console.log(item);
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

// Loader icono burger

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();
