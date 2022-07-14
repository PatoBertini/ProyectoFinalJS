/*
*/

let articulos = [];

const agregarProducto = () => {
  for (let i = 0; i < 3; i++) {
    let producto = prompt("Ingrese el producto a cargar");
    if (producto == "") {
      alert("No has ingresado ningun producto");
    } else {
      articulos.push(producto);
    }
  }
};

const verProductos = () => {
  if (articulos.length == 0) {
    return alert("Agrega algo por favor");
  } else {
    return alert("los productos ingresados son: " + articulos);
  }
};

agregarProducto();
console.log(articulos);
verProductos();

// Desafio complementario Arrays

const tipoDePlato = ["Entrantes", "Plato Principal", "Postres"];
class Plato {
  constructor(id, nombre, precio, categoria) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.categoria = categoria;
  }
}

let cantidadPlatos = prompt("Cuantos platos desea cargar?");

for (let i = 0; i < cantidadPlatos; i++) {
  let id = prompt("Cual es el ID del nuevo plato?");
  let nombre = prompt("Cual es el nombre del plato?");
  let precio = prompt("Cual es el precio del plato?");
  let categoria = prompt(
    "Seleccione el numero de la categoria del plato: " +
      "\n" +
      "1) Entrantes 2) Plato principal 3) Postre "
  );
  let plato = new Plato(id, nombre, precio, categoria);
  articulos[i] = plato;
}

console.log(articulos);

for (const x of articulos) {
  
  alert(
    `Producto Nro: ${x.id} Nombre del producto: ${x.nombre}`
    // "Producto Nro: " +
    //   objeto.id +
    //   "\n" +
    //   "Nombre: " +
    //   objeto.nombre +
    //   "\n" +
    //   "Precio del producto:" +
    //   objeto.precio
  );
}


// Tarjetas cards del menu

const menu = [
  {
    id: 1,
    nombre: "Hamburguesa Completa",
    categoria: "Plato Principal",
    precio: 980,
    img: "./img/burger.jpg",
    desc: `Hamburguesa completa con jamon, queso, lechuga, tomate, bacon y huevo `,
  },
  {
    id: 2,
    nombre: "Brownie con helado",
    categoria: "Postres",
    precio: 650,
    img: "./img/brownie.jpg",
    desc: `Nuestro famoso brownie con helado de americana `,
  },
  {
    id: 3,
    nombre: "Papas con cheddar y bacon",
    categoria: "Entrantes",
    precio: 450,
    img: "./img/papas.jpg",
    desc: `Papas fritas con salsa casera de cheddar y una lluvia de bacon`,
  },
  {
    id: 4,
    nombre: "Mix de croquetas fritas",
    categoria: "Entrantes",
    precio: 750,
    img: "./img/papas.jpg",
    desc: `Disfruta estas 6 croquetas de bacalao, jamon y queso`,
  },
  {
    id: 5,
    nombre: "Plovoleta a la fugazzeta",
    categoria: "Entrantes",
    precio: 420,
    img: "./img/papas.jpg",
    desc: `Deliciosa provoleta cubierta por cebolla pochada en miel y cerveza`,
  },
];

let platosEntrantes = menu
  .filter((x) => {
    return x.categoria === "Entrantes";
  }) // Aca en el filter se crea un nuevo array con todas las categorias entrantes
  .map((x) => {
    return x.nombre;
  }); // Aca estamos mapeando solo los nombres del array anterior

console.log(platosEntrantes);

let diferentesPlatos = menu.map(function (x) {
  return x.precio;
});
console.log(diferentesPlatos);

// Estructura HTLM del proyecto, variables JS necesarias, funciones del proceso a simular, objetos de JS, Arrays, metodos de busqueda y filtrado sobre el array.

// DOM - Interacciones HTML

// Agregando cards del array [menu]

let nuevoDiv = document.createElement("div");

for (const x of menu) {
  let nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = `<h2>Producto: ${x.nombre} </h2>
<h2>Precio: ${x.precio} </h2> <h2>Descripcion: ${x.desc} </h2>  <button> Comprar </button>`;
  document.body.append(nuevoDiv);
}

nuevoDiv.setAttribute("id", "cards");
console.log(nuevoDiv.children);


