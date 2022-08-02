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
