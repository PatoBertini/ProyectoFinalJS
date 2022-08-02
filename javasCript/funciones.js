/*
=============== 
Nav-Bar
===============
*/

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
      // Toastify({
      //   text: `Se ha agregado el producto al carrito`,                                
      //   duration: 3000,
      //   gravity: "bottom",
      //   style: {
      //           background: "linear-gradient(to right, #00b09b, #96c93d)",
      //         }                                
      //   }).showToast();
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

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();

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
confirmar.onclick= () => {

  //Muestro un mensaje de alerta con sweetAlert
  swal({
    title: "Felicidades! Haz realizado tu compra!",
    text: "Un cadete esta de camino!",
    icon: "success",
  });
}