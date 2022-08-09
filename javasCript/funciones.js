/*
=============== 
Arrays tarjeta cards del menu
===============
*/

// 3 formas distintas para  agregar el Array Menu para mostrar los productos de venta

// Opcion 1
function productosUI(menu, id) {
  let productosMenu = document.getElementById(id);
  productosMenu.innerHTML = "";
  for (const producto of menu) {
    let boxDiv = document.createElement("div");
    boxDiv.classList.add("card");
    boxDiv.innerHTML = `
          <div class="col text-center  p-1 mb-1">
          <img src=${producto.img} class="card-img-top foto" alt="Menu item">
          <div class="card-body content">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.desc}.</p>
            <button href="#" id="${producto.id}" class="btn-compra">Comprar</button>
          </div>
          </div>`;
    mainSection.appendChild(boxDiv);
  }
  seleccionarItem();
}

/*

// Opcion 2
menu.forEach((x) => {
  const boxDiv = document.createElement("div");
  boxDiv.classList.add("card");
  boxDiv.innerHTML = `
    <div class="col text-center  p-1 mb-1">
    <img src=${x.img} class="card-img-top foto" alt="Menu item">
    <div class="card-body content">
      <h5 class="card-title">${x.nombre}</h5>
      <p class="card-text">${x.desc}.</p>
      <button href="#" id="${x.id}" class="btn-compra">Comprar</button>
    </div>
    </div>`;
  mainSection.appendChild(boxDiv);

  const boton = document.getElementById(`${x.id}`);

  boton.addEventListener("click", () => {
    agregarCarrito(x.id);
  });
});


// Opcion 3
function displayMenuItems(array) {
  let displayMenu = array.map(function (x) {
    return `  <div class="col text-center  p-1 mb-1">
      <img src=${x.img} class="card-img-top foto" alt="Menu item">
      <div class="card-body content">
        <h5 class="card-title">${x.nombre}</h5>
        <p class="card-text">${x.desc}.</p>
        <button href="#" id="${x.id}" class="btn-compra">Comprar</button>
      </div>
      </div>`;
  });
  displayMenu = displayMenu.join(""); // Se agregan comillas para sacar las comas del array.
  mainSection.innerHTML = displayMenu;
}
*/

/*
=============== 
Botones Filtro del menu
===============
*/

// Funcion para filtrar los botones del menu dependiendo la categoria seleccionada

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

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("Carrito")) {
    carrito = JSON.parse(localStorage.getItem("Carrito"));
    actualizarCarrito();
  }
});

function seleccionarItem() {
  let botones = document.getElementsByClassName("btn-compra");
  for (const boton of botones) {
    boton.addEventListener("click", function () {
      let existe = carrito.find((producto) => producto.id == this.id);
      console.log(existe);
      if (existe) {
        existe.addCantidad();
      } else {
        existe = menu.find((producto) => producto.id == this.id);
        carrito.push(existe);
        console.log(carrito);
      }
      localStorage.setItem("Carrito", JSON.stringify(carrito));
      actualizarCarrito(carrito);
      Toastify({
        text: `Se ha agregado: ${existe.nombre} al carrito`,
        duration: 3000,
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #943126, #fa8072)",
        },
      }).showToast();
    });
  }
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement("tr");
    div.className = "prod-en-carrito";
    div.innerHTML = `
    
        <th scope="row">${prod.id}</th>
        <td >${prod.nombre}</td>
        <td>Cantidad: <span id="cantidad">${prod.cantidad}</span></td>
        <td>Precio:$${prod.precio}</td>
    
        
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `;
    contenedorCarrito.appendChild(div);
    localStorage.setItem("Carrito", JSON.stringify(carrito));
  });
  contadorCarrito.innerHTML = carrito.length;
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
};

botonVaciar.addEventListener("click", () => {
  carrito.length = 0;
  localStorage.removeItem("Carrito");
  actualizarCarrito();
});

const eliminarDelCarrito = (prodID) => {
  const item = carrito.find((prod) => prod.id === prodID);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizarCarrito();
};

function vaciarCarrito() {
  localStorage.clear();
  carrito.splice(0, carrito.length);
  actualizarCarrito();
}

// Peticion GET fetch
peticion = fetch("https://reqres.in/api/unknown/2");

peticion.then((res) => res.json()).then((res) => console.log(res));

console.log(peticion);

// Peticion POST fetch
function enviarDatos(lista) {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({ carrito: lista, userID: 123 }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      return res.json();
    })
    .then((datos) => {
      swal(`Tu nro de pedido es el  ${datos.id}! Un cadete esta de camino!`, {
        icon: "success",
      });
      vaciarCarrito();
    })
    .catch((datos) => {
      swal("Tu pedido ha sido rechazado, saldo insuficiente!", {
        icon: "warning",
      });
    });
}



//Funcion de GET con async await
async function cargarDatos() {
  //Se ocupa la palabra await para simular sincronia
  const pedido= await fetch('https://ghibliapi.herokuapp.com/films');
  const datosJson= await pedido.json();
  for (const generico of datosJson) {
          productos.push(new Plato(generico.id, generico.title, generico.description, generico.precio, generico.image, generico.cantidad))
        }
        productosUI(productos, 'box-container');
}


/*
=============== 
Seccion Nuestras Especialidades
===============
*/

function mostrarPlato() {
  const item = dailyMenu[currentItem];
  nombre.textContent = item.nombre;
  info.textContent = item.info;
  precio.textContent = item.precio;
  img.src = item.img;
}

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

//Boton confirmar carrito
confirmar.onclick = () => {
  enviarDatos();
};

/*
=============== 
Panels
===============
*/

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);

/*
=============== 
Validacion formulario de boostrap
===============
*/

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

/*
=============== 
Red button scroll top
===============
*/

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
