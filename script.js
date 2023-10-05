let productos = [
  {
    nombre: "Producto 1",
    precio: 10,
    imagen: "pAzul.png"
  },
  {
    nombre: "Producto 2",
    precio: 15,
    imagen: "pVerde.png"
  },
  // Agrega más objetos de productos según sea necesario
];

function mostrarProductos() {
  const listaCarrito = document.getElementById('contenedor-lista');
  const detalleCarrito = document.getElementById('right');
  listaCarrito.innerHTML = '';
  detalleCarrito.innerHTML = '';

  productos.forEach(producto =>  {
    const li = document.createElement('li');

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    li.appendChild(imagen);

    const nombreProducto = document.createElement('span');
    nombreProducto.textContent = producto.nombre;
    li.appendChild(nombreProducto);

    const precioProducto = document.createElement('span');
    precioProducto.textContent = `Precio: $${producto.precio}`;
    li.appendChild(precioProducto);

    const botonAgregar = document.createElement('button');
    botonAgregar.textContent = 'Agregar';
    botonAgregar.addEventListener('click', () => agregarProductoDetalle(producto, botonAgregar));
    li.appendChild(botonAgregar);

    listaCarrito.appendChild(li);
  });
}

function agregarProductoDetalle(producto, boton) {
  const detalleCarrito = document.getElementById('contenedor-lista');

  const divProducto = document.createElement('div');
  
  const imagenProducto = document.createElement('img');
  imagenProducto.src = producto.imagen;
  imagenProducto.alt = producto.nombre;
  divProducto.appendChild(imagenProducto);

  const nombreProducto = document.createElement('span');
  nombreProducto.textContent = `Producto: ${producto.nombre}`;
  divProducto.appendChild(nombreProducto);

  const precioProducto = document.createElement('span');
  precioProducto.textContent = `Precio: $${producto.precio}`;
  divProducto.appendChild(precioProducto);

  detalleCarrito.appendChild(divProducto);

  boton.disabled = true; // Deshabilitar el botón después de hacer clic
}

mostrarProductos();