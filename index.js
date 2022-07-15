/*
 */

let nuevoProducto;
let nuevoPrograma;
let id;
let nombre;
let precio;
let categoria;
let resultadoProductos;
let inicioCarga;
let byeProducto;
let findProducto;
let otraAccion;
let otraAccion2;
let resultadoBusqueda;
let encontrado;
let resultadoBusqueda1;
let eliminado;
let productoEliminado;

let productos = [];
let categorias = ["Entrantes", "Plato principal", "Postres"];

class Productos {
  constructor(id, nombre, precio, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
}

const agregarProducto = () => {
  for (let i = 0; i < 2; i++) {
    id = parseInt(prompt("Ingrese el ID del producto"));
    nombre = prompt("Ingrese el nombre del producto");
    precio = parseFloat(prompt("Ingrese el precio del producto"));
    categoria = prompt(
      `Ingrese la categoria del producto; \n Presione: \n 1) Entrantes \n 2) Plato principal \n 3) Postres`
    );
    if (categoria === "1") {
      resultadoProductos = new Productos(id, nombre, precio, categorias[0]);
    } else if (categoria === "2") {
      resultadoProductos = new Productos(id, nombre, precio, categorias[1]);
    } else if (categoria === "3") {
      resultadoProductos = new Productos(id, nombre, precio, categorias[2]);
    } else {
      alert("Has ingresado datos erroneos!");
    }
    productos[i] = resultadoProductos;
  }
};

const visualizarProducto = () => {
  for (let i = 0; i < productos.length; i++) {
    alert(
      `El nombre del producto es: ${productos[i].nombre}. \n El ID es: ${productos[i].id} \n El precio es: ${productos[i].precio} \n La categoria del producto es: ${productos[i].categoria} `
    );
  }
};

// Todavia no me sale bien
const eliminarProducto = (eliminado) => {
  if (eliminado == "") {
    alert("No ingresaste nada")
  } productoEliminado = productos.filter((x) => x.nombre != eliminado);
  if (productoEliminado === undefined) {
    return alert('El producto no existe')
  }
  return alert(productos)
}


// OTRA OPCION PARA BUSCAR PRODUCTO
// const buscarProducto = () => {
//   findProducto = prompt("Que producto desea buscar?");
// for (let i = 0; i < productos.length; i++) {
//   if (findProducto == productos[i].nombre) {
//     return alert(
//       `El nombre del producto es: ${productos[i].nombre}. \n El ID es: ${productos[i].id} \n El precio es: ${productos[i].precio} \n La categoria del producto es: ${productos[i].categoria} `
//       );
//     }
//   }
//   return alert('El producto no existe')
// };

const buscarProducto = (valor) => {
  if (valor == "") {
    return alert("No ingresaste nada");
  }
  resultadoBusqueda = productos.find((x) => x.nombre == valor);
  if (resultadoBusqueda === undefined) {
    return alert(`El plato no existe`);
  }
  return alert(
    `El nombre del producto es: ${resultadoBusqueda.nombre}. \n El ID es: ${resultadoBusqueda.id} \n El precio es: ${resultadoBusqueda.precio} \n La categoria del producto es: ${resultadoBusqueda.categoria}`
  );
};

const iniciarPrograma = () => {
  nuevoPrograma = prompt(
    `Bienvenidos a Rizla soluciones sistematicas. \n Que función desea realizar? \n 1) Agregar un producto \n 2) Visualizar los productos cargados\n 3) Eliminar productos \n 4) Buscar un producto especifico \n \n Escriba "salir" para terminar el programa`
  );
  if (nuevoPrograma == "ESC") {
    alert("Has seleccionado salir");
    iniciarPrograma();
  } else {
    switch (nuevoPrograma) {
      case "1":
        agregarProducto();
        let otraAccion = prompt(
          `Desea realizar otra accion? \n Presione 1 para volver al menu. \n Presione 2 para visualisar los productos \n Presione 3 para salir`
        );
        switch (otraAccion) {
          case "1":
            iniciarPrograma();
            break;
          case "2":
            visualizarProducto();
            iniciarPrograma();
            break;
          case "3":
            break;
        }
        break;
      case "2":
        if (productos.length == 0) {
          alert("No hay ningun producto agregado, no puedes visualizar nada");
          iniciarPrograma();
        } else {
          visualizarProducto();
          let otraAccion2 = prompt(
            `Desea realizar otra accion? \n Presione 1 para volver al menu. \n Presione 2 para salir`
          );
          switch (otraAccion2) {
            case "1":
              iniciarPrograma();
              break;
            case "2":
              break;
          }
        }
        break;
      case "3":
        if (productos.length == 0) {
          alert("No hay ningun producto agregado, no puedes eliminar nada");
          iniciarPrograma();
        } else {
          eliminado = prompt('Que producto desea eliminar?')
          eliminarProducto(eliminado);
          iniciarPrograma()
        }
        break;
      case "4":
        if (productos.length == 0) {
          alert("No hay ningun producto agregado, no puedes buscar nada");
          iniciarPrograma();
        } else {
          findProducto = prompt("Que producto desea buscar?");
          buscarProducto(findProducto);
          iniciarPrograma();
        }
        break;
      case "salir":
        break;
      default:
        alert(
          "Tenes que ingresar los numeros que te pide el programa, estoy aprendiendo."
        );
        iniciarPrograma();
        break;
    }
  }
};

iniciarPrograma();
console.log(productos);

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
