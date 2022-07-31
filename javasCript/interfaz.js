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
