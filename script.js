let categorias = ["Imprenta", "Materiales Rígidos", "Pegatinas adhesivas", "Revistas, Libros y catálogos","Vinilos", "Packaging", "Bolsas", "Calendarios y Agendas", "Expositores"];
let productosPorCategoria = {
  "Imprenta": [
     {
      nombre: "Tarjetas Empresariales",
      precio: 15,
      imagen: "tarjetasEmpresarialesClasicas.jpg"
    },
    {
      nombre: "Tarjetas Invitaciones",
      precio: 15,
      imagen: "TarjetasInvitaciones.jpg"
    },
    {
      nombre: "Tarjetas Visita",
      precio: 15,
      imagen: "tarjetasVisita.jpg"
    },
    {
      nombre: "Dispensador de Tarjetas",
      imagen: "dispensadorTarjetas.jpg"
    },
    {
      nombre: "Porta Folletos",
      precio: 15,
      imagen: "portaFolletos.jpg"
    },
    {
      nombre: "Porta Tarjetas Metálico",
      precio: 15,
      imagen: "portaTarjetasMetalico.jpg"
    },
     {
      nombre: "Poster",
      imagen: "poster.jpg"
    },
    {
      nombre: "Valla publicitaria",
      imagen: "vallaPublicitaria.jpg"
    },
    {
      nombre: "Carteles",
      imagen: "carteles.jpg"
    },
    
    {
      nombre: "Poster Fotográfico",
      imagen: "posterFotografico.jpg"
    },
    {
      nombre: "Cartel Formato Personalizado",
      imagen: "cartelFormatoPerso.jpg"
    },
    {
      nombre: "Archivadores",
      imagen: "archivadores.jpg"
    },
    {
      nombre: "Carpetas",
      imagen: "Carpetas.jpg"
    },
    {
      nombre: "Etiquetas",
      imagen: "Etiquetas.jpg"
    },
    {
      nombre: "Expositores Publicitarios",
      imagen: "expositoresPublicitarios.jpg"
    },
    {
      nombre: "Folletos Flyers",
      imagen: "folletosFlyers.jpg"
    },
    {
      nombre: "Folletos Plegable",
      precio: 10,
      imagen: "folletosPlegables.jpg"
    },
    {
      nombre: "Formatos Personalizados",
      precio: 10,
      imagen: "FormatosPersonalizados.jpg"
    },
    {
      nombre: "Hoja Máquina",
      precio: 15,
      imagen: "hojaMaquina.jpg"
    },
    {
      nombre: "Material Oficina",
      precio: 15,
      imagen: "materialOficina.jpg"
    }, 
    {
      nombre: "Sobres",
      precio: 15,
      imagen: "sobres.jpg"
    },
   
    
    // Agrega más productos para la Categoría 1 según sea necesario
    //
    //
    //
  ],
  "Materiales Rígidos": [
     {
      nombre: "Forex",
      imagen: "forex.jpg"
    },
    {
      nombre: "Aluminio",
      imagen: "aluminio.jpg"
    },
    {
      nombre: "Plexiglas (Metacrilato)",
      imagen: "plexiglasMetacrilato.jpg"
    },
    {
      nombre: "Polipropileno",
      imagen: "polipropileno.jpg"
    },
    {
      nombre: "Carton",
      imagen: "carton.jpg"
    },
    {
      nombre: "Carton Pluma",
      imagen: "cartonPluma.jpg"
    },
    {
      nombre: "Placas",
      imagen: "placas.jpg"
    },
    {
      nombre: "Marco para Fotomatón",
      imagen: "tarjetasVisita.jpg"
    },
    {
      nombre: "Soporte Paneles",
      imagen: "soportePaneles.jpg"
    },
    
  
  ],
  "Pegatinas adhesivas": [
    {
      nombre: "Cinta Adhesiva",
      imagen: "cintaAdhesiva.jpg"
    },
    {
      nombre: "Rotulos Magnéticos",
      imagen: "rotulosMagneticos.jpg"
    },
    {
      nombre: "Adhesivos de Gran Formato",
      imagen: "adhesivosGranFormato.jpg"
    },
    {
      nombre: "Cinta Adhhesiva Paquetes",
      imagen: "cintaAdhesivaPaquete.jpg"
    },
    {
      nombre: "Pegatinas de etiquetado",
      imagen: "pegatinasEtiquetado.jpg"
    },
    {
      nombre: "Pegatinas Neutras",
      imagen: "pegatinaNeutra.jpg"
    },
    {
      nombre: "Pegatinas",
      imagen: "pegatinas.jpg"
    },
    {
      nombre: "Pegatinas de Bovina",
      imagen: "pegatinasBovina.jpg"
    }
  ],
  "Revistas, Libros y catálogos": [
    {
      nombre: "Revistas Premium",
      imagen: "RevistasPremium.jpg"
    },
    {
      nombre: "Revistas de Gran Tirada",
      imagen: "revistasGranTirada.jpg"
    },
    {
      nombre: "Revistas",
      imagen: "revistas.jpg"
    },
    {
      nombre: "Otros Formatos",
      imagen: "otrosFormatos.jpg"
    },
    {
      nombre: "Muestrario de Papeles",
      imagen: "muestrarioDePapeles.jpg"
    },
    {
      nombre: "Menus",
      imagen: "menus.jpg"
    },
    {
      nombre: "Marca Páginas",
      imagen: "marcaPaginas.jpg"
    },
    {
      nombre: "Manuales de Instrucciones",
      imagen: "manualesInstrucciones.jpg"
    },
    {
      nombre: "Libros",
      imagen: "libros.jpg"
    },
    {
      nombre: "Laminas sueltas",
      imagen: "laminasSueltas.jpg"
    },
    {
      nombre: "Folletos Plegables",
      imagen: "folletosPlegables.jpg"
    },
    {
      nombre: "Folletos",
      imagen: "folletos.jpg"
    },
    {
      nombre: "Expositor Porta-Revistas",
      imagen: "expositorPortaRevistas.jpg"
    },
    {
      nombre: "Encuadernación Premium Grapada",
      imagen: "encuadernacionPremiumGrapada.jpg"
    },
    {
      nombre: "Encuadernación Grapada",
      imagen: "encuadernacionGrapada.jpg"
    },
    {
      nombre: "Encuadernación Fresada",
      imagen: "encuadernacionFresada.jpg"
    },
    {
      nombre: "Encuadernacion con Espiral Mágnetica",
      imagen: "encuadernacionEspiralMag.jpg"
    },
    {
      nombre: "Encuadernación Cosida",
      imagen: "encuadernacionCosida.jpg"
    },
    {
      nombre: "Encuadernación Con Anillas de Gran Tirada",
      imagen: "encuadernacionAnillasGranTiradda.jpg"
    },
    {
      nombre: "Catálogos",
      imagen: "catalogos.jpg"
    }   
  ],
  "Packaging": [
    {
      nombre: "Packaging Alimentario",
      imagen: "paca.jpg"
    },
    {
      nombre: "Packaging de Carton",
      imagen: "packagingCarton.jpg"
    },
    {
      nombre: "Packaging Flexible",
      imagen: "packagingFlexible.jpg"
    },
    {
      nombre: "Packaging Botellas",
      imagen: "packagingBotellas.jpg"
    },
    {
      nombre: "Packaging Premium",
      imagen: "packagingPremium.jpg"
    },
    {
      nombre: "Packaging Envios",
      imagen: "packagingEnvios.jpg"
    },
    {
      nombre: "Packaging Tiendas",
      imagen: "packagingTiendas.jpg"
    },
    {
      nombre: "Packaging Fiestas",
      imagen: "packagingFiestas.jpg"
    },
    {
      nombre: "Packaging Comercio",
      imagen: "packagingComercio.jpg"
    },
    {
      nombre: "Packaging Ropa",
      imagen: "packagingRopa.jpg"
    },
    {
      nombre: "Packaging Regalos",
      imagen: "packagingRegalos.jpg"
    },
    {
      nombre: "Packaging Cosméticos",
      imagen: "packagingCosmeticos.jpg"
    },
    {
      nombre: "Packaging Joyas",
      imagen: "packagingJoyas.jpg"
    },
  ],
  "Bolsas": [
    {
      nombre: "Bolsasitas de Papel",
      imagen: "bolsasPapel.jpg"
    },
    {
      nombre: "Muestrario de Bolsas",
      imagen: "muestrarioBolsas.jpg"
    },
    {
      nombre: "Bolsa de Papel",
      imagen: "bolsaPapelL.jpg"
    },
    {
      nombre: "Bolsa de tela",
      imagen: "bolsaTela.jpg"
    }
  ],
  "Expositores": [
    {
      nombre: "Expositor Banner",
      imagen: "expoBanner.jpg"
    },
    {
      nombre: "Muebles Publicitarios",
      imagen: "mueblesPublicitarios.jpg"
    },
    {
      nombre: "Mostradores Profesionales",
      imagen: "mostradoresProfesionales.jpg"
    },
    {
      nombre: "ExpositoresExteriores",
      imagen: "expositoresExteriores.jpg"
    },
    {
      nombre: "Expositores",
      imagen: "expositores.jpg"
    },
    {
      nombre: "Marcos de Tela Tensada",
      imagen: "marcosTelaTensada.jpg"
    },
    {
      nombre: "Expositores de Mesa",
      imagen: "expositoresMesa.jpg"
    },
    {
      nombre: "Totems",
      imagen: "Totems.jpg"
    }
    
  ],
  "Calendarios y Agendas": [
    {
      nombre: "Agenda Cosida",
      imagen: "agendaCosida.jpg"
    },
    {
      nombre: "Agenda Tapa Dura",
      imagen: "agendaTapaDura.jpg"
    },
    {
      nombre: "Planificadores",
      imagen: "planificadores.jpg"
    },
    {
      nombre: "Calendario de Mesa",
      imagen: "calendarioMesa.jpg"
    },
    {
      nombre: "Calendario Marca Páginas",
      imagen: "calendarioMarcaPaginas.jpg"
    },
    {
      nombre: "Calendario de Pared",
      imagen: "calendarioParedd.jpg"

    },
  ],
  "Vinilos": [
    {
      nombre: "Vinilo Adhesivo Corte",
      imagen: "viniloAdhesivoCorte.jpg"
    },
    {
      nombre: "Vinilo Adhesivo Suelo",
      imagen: "viniloAdhesivoSuelo.jpg"
    },
    {
      nombre: "Vinilos Electroestáticos Reposicionables",
      imagen: "vinilosElectroestaticosReposicionables.jpg"
    },
    {
      nombre: "Papel Pintado Pared",
      imagen: "papelPintadoPared.jpg"
    },
    {
      nombre: "Vinilo Escaparate",
      imagen: "viniloEscaparate.jpg"
    },
    {
      nombre: "Vinilo Superficie Plana",
      imagen: "viniloSuperficiePlana.jpg"
    },
    {
      nombre: "Vinilo Pared",
      imagen: "viniloPared.jpg"
    },
    {
      nombre: "Vinilos Adhesivos Coche",
      imagen: "vinilosAdhesivosCoche.jpg"
    }
  ],
  "Lonas": [
    {
      nombre: "Lona Antiviento",
      imagen: "lonaAntiviento.jpg"
    },
    {
      nombre: "Lona Display",
      imagen: "lonaDisplay.jpg"
    },
    {
      nombre: "Lona de doble cara",
      imagen: "lonaDobleCara.jpg"
    },
    {
      nombre: "Lona con Perforaciones",
      imagen: "lonaPerforaciones.jpg"
    },
    {
      nombre: "Lona Retroiluminable",
      imagen: "lonaRetroiluminable.jpg"
    },
    {
      nombre: "Lona sin PVC",
      imagen: "lonaSinPVC.jpg"
    },
    {
      nombre: "Lona de Tela",
      imagen: "lonaTela.jpg"
    }
  ],
};

function generarBotonesCategorias() {
  const categoriasContainer = document.getElementById('categorias');
  categorias.forEach(categoria => {
    const botonCategoria = document.createElement('button');
    botonCategoria.classList.add('boton-categoria')
    botonCategoria.textContent = categoria;
    botonCategoria.addEventListener('click', () => filtrarPorCategoria(categoria));
    categoriasContainer.appendChild(botonCategoria);
  });
}

function filtrarPorCategoria(categoriaSeleccionada) {
  if (categoriaSeleccionada) {
    productosMostrados = productosPorCategoria[categoriaSeleccionada];
  } else {
    productosMostrados = [];
  }
  mostrarProductos(productosMostrados);
}

function mostrarProductos(arrayProductos) {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.innerHTML = '';

  arrayProductos.forEach(producto => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('producto');

    const botonAgregar = document.createElement('button');
    divProducto.classList.add('boton-producto');


    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    imagen.classList.add('img-producto');
    botonAgregar.appendChild(imagen);

    const nombreProducto = document.createElement('span');
    nombreProducto.textContent = producto.nombre;
    botonAgregar.appendChild(nombreProducto);

   

    botonAgregar.addEventListener('click', () => agregarProductoDetalle(producto));
    divProducto.appendChild(botonAgregar);

    listaCarrito.appendChild(divProducto);
  });
}



function agregarProductoDetalle(producto) {
  const detalleCarrito = document.getElementById('detalle-carrito');
  const descripcionProducto = document.getElementById('descripcion-producto');
  const br = document.createElement('br');


  detalleCarrito.innerHTML = '';
  descripcionProducto.innerHTML = '';

  const divProducto = document.createElement('div');
  divProducto.classList.add('detalle-producto');

  const imagenProducto = document.createElement('img');
  imagenProducto.src = producto.imagen;
  imagenProducto.alt = producto.nombre;
  imagenProducto.classList.add('img-producto-grande');
  divProducto.appendChild(imagenProducto);

  const nombreProducto = document.createElement('span');
  nombreProducto.textContent = `Producto: ${producto.nombre}`;
  descripcionProducto.appendChild(nombreProducto);
  descripcionProducto.appendChild(br);

  const precioProducto = document.createElement('span');
  precioProducto.textContent = `Precio: $${producto.precio}`;
  descripcionProducto.appendChild(precioProducto);

  detalleCarrito.appendChild(divProducto);
}

generarBotonesCategorias();

mostrarProductos(productosMostrados);
