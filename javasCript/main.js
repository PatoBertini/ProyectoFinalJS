/*
=============== 
Arrays tarjeta cards del menu
===============
*/

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

// Display todos los items cuando carga la pagina.

// window.addEventListener("DOMContentLoaded", function () {
//   displayMenuItems(menu);
// });

productosUI(menu, "box-container");

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

// Setup load Pagina inicial

window.addEventListener("DOMContentLoaded", function () {
  mostrarPlato();
});
