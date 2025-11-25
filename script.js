
    // Lista de productos
    const productos = [
      {
        id: 1,
        nombre: "Smartphone QuantumX Pro",
        desc: "Pantalla OLED 6.8\", 5G, Cámara IA, 1TB Almacenamiento, Desbloqueo Facial",
        precio: 1199,
        img: "./imagenes/ImgRetail01.png"
      },
      {
        id: 2,
        nombre: "Portátil CoderBook Ultra",
        desc: "Pantalla 16\" 4K Touch, Intel i9, 64GB RAM, 2TB SSD, RTX 4090",
        precio: 2499,
        img: "./imagenes/ImgRetail02.png"
      },
      {
        id: 3,
        nombre: "Coder Watch S3",
        desc: "AMOLED, ECG, GPS, 7 días de batería, Resistente al agua",
        precio: 349,
        img: "./imagenes/ImgRetail03.png"
      },
      {
        id: 4,
        nombre: "AeroPods Max",
        desc: "Cancelación activa de ruido, 30h batería, Carga inalámbrica",
        precio: 249,
        img: "./imagenes/ImgRetail04.png"
      },
      {
        id: 5,
        nombre: "Coder VR Explorer",
        desc: "Pantalla 8K, 120Hz, Inalámbrico, Seguimiento de manos, Audio 3D",
        precio: 799,
        img: "./imagenes/ImgRetail05.png"
      },
      {
        id: 6,
        nombre: "Coder Home Hub",
        desc: "Asistente de voz, Control IoT, Pantalla 4K, Audio Multiroom",
        precio: 199,
        img: "./imagenes/ImgRetail06.png"
      }
    ];

    // Mostrar matriz de productos
    const matrizProductos = document.getElementById('productos');
    productos.forEach(producto => {
      const matriz = document.createElement('div');
      matriz.className = 'producto_celda';
      matriz.innerHTML = `
        <img src="${producto.img}">
        <div class="producto_nombre">${producto.nombre}</div>
        <div class="producto_desc">${producto.desc}</div>
        <div class="producto_precio">$${producto.precio}</div>
        <button class="producto_agregar" idProducto="${producto.id}">Agregar al carrito</button>
      `;
      matrizProductos.appendChild(matriz);
    });

    // Agregar productos al carrito
    let totalProductos = 0;
    document.querySelectorAll('.producto_agregar').forEach(boton => {
      boton.addEventListener('click', function() {
        const producto = parseInt(this.getAttribute('idProducto'));
        totalProductos = totalProductos+1;
        let contador = document.getElementById("carrito_contador");
        contador.textContent = totalProductos;
      });
    });



