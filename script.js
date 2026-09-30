/* ============================================================
   CEVICHERÍA MONTERO
   SCRIPT PRINCIPAL
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================================
       1. DATOS DEL MENÚ
       ======================================================== */

    const menu = {

        entradas: {
            titulo: "Entradas",
            descripcion: "Para comenzar",
            productos: [
                {
                    nombre: "Conchas a la parmesana",
                    descripcion: "Deliciosas conchas preparadas al estilo de la casa.",
                    precio: 17
                },
                {
                    nombre: "Conchas a la chalaca",
                    descripcion: "Frescas conchas acompañadas con nuestra preparación especial.",
                    precio: 17
                },
                {
                    nombre: "Tequeños de queso",
                    descripcion: "Crocantes tequeños acompañados con salsa de la casa.",
                    precio: 14
                }
            ]
        },

        ceviches: {
            titulo: "Ceviches",
            descripcion: "El sabor del mar",
            productos: [
                {
                    nombre: "Ceviche de pescado",
                    descripcion: "Pescado fresco preparado con limón, cebolla y ají.",
                    precio: 20
                },
                {
                    nombre: "Ceviche mixto",
                    descripcion: "Pescado y mariscos frescos preparados al estilo Montero.",
                    precio: 22
                },
                {
                    nombre: "Ceviche de pota",
                    descripcion: "Pota fresca preparada al estilo tradicional.",
                    precio: 17
                },
                {
                    nombre: "Ceviche de mariscos",
                    descripcion: "Selección de mariscos frescos preparados al momento.",
                    precio: 27
                }
            ]
        },

        chicharrones: {
            titulo: "Chicharrones",
            descripcion: "Crocantes y sabrosos",
            productos: [
                {
                    nombre: "Chicharrón mixto",
                    descripcion: "Combinación de pescado y mariscos crocantes.",
                    precio: 27
                },
                {
                    nombre: "Chicharrón de pescado",
                    descripcion: "Pescado fresco, crocante y dorado.",
                    precio: 22
                },
                {
                    nombre: "Chicharrón de pota",
                    descripcion: "Pota crocante acompañada de guarnición.",
                    precio: 18
                },
                {
                    nombre: "Jalea mixta",
                    descripcion: "Pescado y mariscos crocantes para compartir.",
                    precio: 28
                },
                {
                    nombre: "Jalea de pescado",
                    descripcion: "Pescado crocante acompañado de guarnición.",
                    precio: 22
                }
            ]
        },

        arroces: {
            titulo: "Arroces",
            descripcion: "Especialidades de la casa",
            productos: [
                {
                    nombre: "Arroz con mariscos",
                    descripcion: "Arroz preparado con selección de mariscos.",
                    precio: 27
                },
                {
                    nombre: "Arroz chaufa de mariscos",
                    descripcion: "Chaufa preparado con mariscos frescos.",
                    precio: 27
                },
                {
                    nombre: "Arroz chaufa mixto",
                    descripcion: "Arroz chaufa con pescado y mariscos.",
                    precio: 24
                },
                {
                    nombre: "Arroz chaufa de pollo",
                    descripcion: "Clásico arroz chaufa preparado al estilo de la casa.",
                    precio: 22
                }
            ]
        },

        duos: {
            titulo: "Dúos marinos",
            descripcion: "Para disfrutar en compañía",
            productos: [
                {
                    nombre: "Dúo de pescado con chicharrón",
                    descripcion: "Pescado acompañado de delicioso chicharrón.",
                    precio: 27
                },
                {
                    nombre: "Ceviche mixto con chicharrón",
                    descripcion: "Ceviche mixto acompañado de chicharrón.",
                    precio: 32
                },
                {
                    nombre: "Ceviche mixto con arroz chaufa",
                    descripcion: "Ceviche mixto acompañado con arroz chaufa.",
                    precio: 37
                }
            ]
        },

        triples: {
            titulo: "Triples",
            descripcion: "Para compartir",
            productos: [
                {
                    nombre: "Triple marino",
                    descripcion: "Ceviche, chicharrón y arroz preparado para compartir.",
                    precio: 32
                }
            ]
        },

        pescados: {
            titulo: "Pescados filete sudados",
            descripcion: "Pescados preparados al estilo de la casa",
            productos: [
                {
                    nombre: "Sudado de pescado",
                    descripcion: "Pescado fresco preparado en nuestro sudado tradicional.",
                    precio: 24
                },
                {
                    nombre: "Sudado de pescado con mariscos",
                    descripcion: "Sudado de pescado acompañado con mariscos.",
                    precio: 27
                },
                {
                    nombre: "Parihuela mixta",
                    descripcion: "Preparación marina con pescado y mariscos.",
                    precio: 27
                }
            ]
        },

        fondos: {
            titulo: "Platos de fondo en filete",
            descripcion: "Platos para disfrutar",
            productos: [
                {
                    nombre: "Filete a lo macho",
                    descripcion: "Filete acompañado de salsa especial de mariscos.",
                    precio: 28
                },
                {
                    nombre: "Filete en salsa de camarones",
                    descripcion: "Filete acompañado con cremosa salsa de camarones.",
                    precio: 29
                },
                {
                    nombre: "Filete en salsa de langostinos",
                    descripcion: "Filete acompañado con salsa de langostinos.",
                    precio: 29
                },
                {
                    nombre: "Filete en salsa de mariscos",
                    descripcion: "Filete acompañado con nuestra salsa de mariscos.",
                    precio: 29
                }
            ]
        },

        criollos: {
            titulo: "Platos criollos",
            descripcion: "Sabor peruano",
            productos: [
                {
                    nombre: "Lomo saltado",
                    descripcion: "Clásico lomo saltado acompañado de papas y arroz.",
                    precio: 22
                },
                {
                    nombre: "Bistec a lo pobre",
                    descripcion: "Bistec acompañado con papas, arroz y huevo.",
                    precio: 27
                },
                {
                    nombre: "Bistec apanado",
                    descripcion: "Bistec apanado acompañado de guarnición.",
                    precio: 22
                },
                {
                    nombre: "Pollo saltado",
                    descripcion: "Pollo salteado al estilo tradicional.",
                    precio: 20
                },
                {
                    nombre: "Milanesa de pollo",
                    descripcion: "Milanesa de pollo acompañada de guarnición.",
                    precio: 20
                }
            ]
        },

        guarniciones: {
            titulo: "Guarniciones",
            descripcion: "Para acompañar",
            productos: [
                {
                    nombre: "Arroz",
                    descripcion: "Porción de arroz.",
                    precio: 5
                },
                {
                    nombre: "Papas fritas",
                    descripcion: "Porción de papas fritas.",
                    precio: 7
                },
                {
                    nombre: "Yucas doradas",
                    descripcion: "Porción de yucas doradas.",
                    precio: 7
                }
            ]
        },

        sopas: {
            titulo: "Sopas",
            descripcion: "Calientes y reconfortantes",
            productos: [
                {
                    nombre: "Criolla",
                    descripcion: "Sopa criolla preparada al estilo tradicional.",
                    precio: 17
                },
                {
                    nombre: "Dieta de pollo",
                    descripcion: "Sopa ligera de pollo.",
                    precio: 17
                },
                {
                    nombre: "Sustancia",
                    descripcion: "Sopa caliente y reconfortante.",
                    precio: 17
                }
            ]
        },

        bebidas: {
            titulo: "Bebidas",
            descripcion: "Para acompañar",
            productos: [
                {
                    nombre: "Cerveza Pilsen",
                    descripcion: "Cerveza Pilsen.",
                    precio: 9
                },
                {
                    nombre: "Gaseosa personal",
                    descripcion: "Gaseosa personal.",
                    precio: 8
                },
                {
                    nombre: "Limonada frozen",
                    descripcion: "Limonada frozen.",
                    precio: 10
                },
                {
                    nombre: "Chicha morada 1L",
                    descripcion: "Chicha morada.",
                    precio: 15
                },
                {
                    nombre: "Maracuyá 1L",
                    descripcion: "Refresco de maracuyá.",
                    precio: 15
                },
                {
                    nombre: "Agua",
                    descripcion: "Agua embotellada.",
                    precio: 3
                }
            ]
        }
    };


    /* ========================================================
       2. CARRITO
       ======================================================== */

    let carrito = [];

    const carritoGuardado =
        localStorage.getItem("monteroCarrito");

    if (carritoGuardado) {
        try {
            carrito = JSON.parse(carritoGuardado);
        } catch (error) {
            carrito = [];
        }
    }


    /* ========================================================
       3. GUARDAR CARRITO
       ======================================================== */

    function guardarCarrito() {

        localStorage.setItem(
            "monteroCarrito",
            JSON.stringify(carrito)
        );
    }


    /* ========================================================
       4. CONTADOR
       ======================================================== */

    function actualizarContador() {

        const cantidad = carrito.reduce(
            (total, producto) =>
                total + producto.cantidad,
            0
        );

        const contadores =
            document.querySelectorAll(
                "#contadorPedido, .contador-pedido, .pedido-contador, [data-contador]"
            );

        contadores.forEach(contador => {
            contador.textContent = cantidad;
        });
    }


    /* ========================================================
       5. AGREGAR PRODUCTO
       ======================================================== */

    function agregarProducto(producto) {

        const existente = carrito.find(
            item => item.nombre === producto.nombre
        );

        if (existente) {

            existente.cantidad++;

        } else {

            carrito.push({
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1
            });
        }

        guardarCarrito();
        actualizarContador();

        mostrarMensaje(
            `${producto.nombre} agregado al pedido`
        );
    }


    /* ========================================================
       6. CAMBIAR CANTIDAD
       ======================================================== */

    function cambiarCantidad(nombre, cambio) {

        const producto = carrito.find(
            item => item.nombre === nombre
        );

        if (!producto) return;

        producto.cantidad += cambio;

        if (producto.cantidad <= 0) {

            carrito = carrito.filter(
                item => item.nombre !== nombre
            );
        }

        guardarCarrito();
        actualizarContador();
        mostrarCarrito();
    }


    /* ========================================================
       7. TOTAL
       ======================================================== */

    function obtenerTotal() {

        return carrito.reduce(
            (total, producto) =>
                total +
                producto.precio * producto.cantidad,
            0
        );
    }


    /* ========================================================
       8. MOSTRAR CATEGORÍA
       ======================================================== */

    function mostrarCategoria(categoria) {

        const datos = menu[categoria];

        if (!datos) {

            console.warn(
                "Categoría no encontrada:",
                categoria
            );

            return;
        }

        cerrarVistaCategoriaExistente();

        const vista =
            document.createElement("section");

        vista.id =
            "vistaCategoriaMontero";

        vista.className =
            "vista-categoria-montero";

        vista.innerHTML = `

            <div class="categoria-contenido">

                <button
                    class="btn-volver-categorias"
                    id="volverCategorias"
                    type="button"
                >
                    ← CATEGORÍAS
                </button>

                <div class="categoria-cabecera">

                    <h1>${datos.titulo}</h1>

                    <p>
                        ${datos.descripcion}
                    </p>

                </div>

                <div class="productos-grid">

                    ${datos.productos.map(
                        (producto, index) => `

                        <article
                            class="producto-card"
                            data-producto-index="${index}"
                        >

                            <div class="producto-imagen">

                                <span>
                                    Foto del plato
                                </span>

                            </div>

                            <div class="producto-info">

                                <h3>
                                    ${producto.nombre}
                                </h3>

                                <p>
                                    ${producto.descripcion}
                                </p>

                                <div class="producto-abajo">

                                    <strong>
                                        S/ ${producto.precio.toFixed(2)}
                                    </strong>

                                    <button
                                        class="btn-agregar"
                                        data-index="${index}"
                                        type="button"
                                    >
                                        + PEDIR
                                    </button>

                                </div>

                            </div>

                        </article>

                    `).join("")}

                </div>

            </div>
        `;

        document.body.appendChild(vista);

        requestAnimationFrame(() => {
            vista.classList.add("mostrar");
        });

        /* BOTÓN VOLVER */

        const volver =
            vista.querySelector("#volverCategorias");

        if (volver) {

            volver.addEventListener(
                "click",
                cerrarVistaCategoria
            );
        }

        /* BOTONES PEDIR */

        vista.querySelectorAll(".btn-agregar")
            .forEach(boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        const indice =
                            Number(
                                boton.dataset.index
                            );

                        const producto =
                            datos.productos[indice];

                        agregarProducto(producto);
                    }
                );
            });

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }


    /* ========================================================
       9. CERRAR CATEGORÍA
       ======================================================== */

    function cerrarVistaCategoria() {

        const vista =
            document.querySelector(
                "#vistaCategoriaMontero"
            );

        if (!vista) return;

        vista.classList.remove("mostrar");

        setTimeout(() => {

            if (vista) {
                vista.remove();
            }

        }, 300);

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }


    function cerrarVistaCategoriaExistente() {

        const vista =
            document.querySelector(
                "#vistaCategoriaMontero"
            );

        if (vista) {
            vista.remove();
        }
    }


    /* ========================================================
       10. EQUIVALENCIAS
       ======================================================== */

    const equivalencias = {

        "entradas": "entradas",
        "ceviches": "ceviches",
        "chicharrones": "chicharrones",
        "arroces": "arroces",

        "dúos marinos": "duos",
        "duos marinos": "duos",

        "triples": "triples",

        "pescados filete sudados": "pescados",
        "pescados": "pescados",

        "platos de fondo en filete": "fondos",
        "fondos": "fondos",

        "platos criollos": "criollos",
        "criollos": "criollos",

        "guarniciones": "guarniciones",
        "sopas": "sopas",
        "bebidas": "bebidas"
    };


    /* ========================================================
       11. CATEGORÍAS
       ======================================================== */

    document.addEventListener(
        "click",
        event => {

            const boton =
                event.target.closest(
                    ".category-card, .categoria-card, .category-button, [data-category], [data-categoria]"
                );

            if (!boton) return;

            if (
                boton.closest("#vistaCategoriaMontero")
            ) {
                return;
            }

            event.preventDefault();

            let categoria =
                boton.dataset.category ||
                boton.dataset.categoria;

            if (!categoria) {

                const texto =
                    boton.textContent
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, " ");

                categoria =
                    equivalencias[texto];
            }

            if (categoria) {
                mostrarCategoria(categoria);
            }
        }
    );


    /* ========================================================
       12. ENLACES #CATEGORIA
       ======================================================== */

    document.addEventListener(
        "click",
        event => {

            const enlace =
                event.target.closest(
                    'a[href^="#"]'
                );

            if (!enlace) return;

            const href =
                enlace.getAttribute("href");

            if (!href) return;

            const categoria =
                href
                    .replace("#", "")
                    .toLowerCase();

            if (!menu[categoria]) return;

            event.preventDefault();

            mostrarCategoria(categoria);
        }
    );


    /* ========================================================
       13. CARRITO
       ======================================================== */

    function crearCarrito() {

        const existente =
            document.querySelector(
                "#modalPedidoMontero"
            );

        if (existente) {
            existente.remove();
        }

        const modal =
            document.createElement("div");

        modal.id =
            "modalPedidoMontero";

        modal.className =
            "modal-pedido-montero";

        modal.innerHTML = `

            <div class="pedido-contenido">

                <button
                    class="pedido-cerrar"
                    id="cerrarPedido"
                    type="button"
                >
                    ×
                </button>

                <div class="pedido-titulo">

                    <h2>
                        Tu pedido
                    </h2>

                    <p>
                        Revisa tus productos
                    </p>

                </div>

                <div
                    class="lista-pedido"
                    id="listaPedido"
                ></div>

                <div
                    class="pedido-vacio"
                    id="pedidoVacio"
                >

                    <div class="pedido-vacio-icono">
                        🛒
                    </div>

                    <h3>
                        Tu pedido está vacío
                    </h3>

                    <p>
                        Agrega algunos platos de nuestra carta.
                    </p>

                </div>

                <div
                    class="pedido-footer"
                    id="pedidoFooter"
                >

                    <div class="pedido-total">

                        <span>
                            Total
                        </span>

                        <strong id="pedidoTotal">
                            S/ 0.00
                        </strong>

                    </div>

                    <button
                        class="btn-confirmar-pedido"
                        id="confirmarPedido"
                        type="button"
                    >
                        CONFIRMAR PEDIDO
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(modal);

        requestAnimationFrame(() => {
            modal.classList.add("mostrar");
        });

        const cerrar =
            modal.querySelector("#cerrarPedido");

        cerrar.addEventListener(
            "click",
            cerrarCarrito
        );

        modal.addEventListener(
            "click",
            event => {

                if (event.target === modal) {
                    cerrarCarrito();
                }
            }
        );

        mostrarCarrito();
    }


    /* ========================================================
       14. MOSTRAR CARRITO
       ======================================================== */

    function mostrarCarrito() {

        const lista =
            document.querySelector(
                "#listaPedido"
            );

        const vacio =
            document.querySelector(
                "#pedidoVacio"
            );

        const footer =
            document.querySelector(
                "#pedidoFooter"
            );

        const total =
            document.querySelector(
                "#pedidoTotal"
            );

        if (!lista) return;

        if (carrito.length === 0) {

            lista.innerHTML = "";

            if (vacio) {
                vacio.style.display = "block";
            }

            if (footer) {
                footer.style.display = "none";
            }

            return;
        }

        if (vacio) {
            vacio.style.display = "none";
        }

        if (footer) {
            footer.style.display = "block";
        }

        lista.innerHTML =
            carrito.map(producto => `

                <div class="pedido-item">

                    <div class="pedido-item-info">

                        <h3>
                            ${producto.nombre}
                        </h3>

                        <span>
                            S/ ${producto.precio.toFixed(2)}
                        </span>

                    </div>

                    <div class="pedido-controles">

                        <button
                            data-accion="restar"
                            data-nombre="${producto.nombre}"
                            type="button"
                        >
                            −
                        </button>

                        <strong>
                            ${producto.cantidad}
                        </strong>

                        <button
                            data-accion="sumar"
                            data-nombre="${producto.nombre}"
                            type="button"
                        >
                            +
                        </button>

                    </div>

                </div>

            `).join("");

        if (total) {

            total.textContent =
                `S/ ${obtenerTotal().toFixed(2)}`;
        }

        lista.querySelectorAll(
            "[data-accion]"
        ).forEach(boton => {

            boton.addEventListener(
                "click",
                () => {

                    const nombre =
                        boton.dataset.nombre;

                    const accion =
                        boton.dataset.accion;

                    cambiarCantidad(
                        nombre,
                        accion === "sumar"
                            ? 1
                            : -1
                    );
                }
            );
        });
    }


    /* ========================================================
       15. CERRAR CARRITO
       ======================================================== */

    function cerrarCarrito() {

        const modal =
            document.querySelector(
                "#modalPedidoMontero"
            );

        if (!modal) return;

        modal.classList.remove("mostrar");

        setTimeout(() => {

            if (modal) {
                modal.remove();
            }

        }, 250);
    }


    /* ========================================================
       16. BOTÓN VER PEDIDO
       ======================================================== */

    document.addEventListener(
        "click",
        event => {

            const boton =
                event.target.closest(
                    "#verPedido, #btnPedido, .btn-pedido, [data-pedido]"
                );

            if (!boton) return;

            event.preventDefault();

            crearCarrito();
        }
    );


    /* ========================================================
       17. CONFIRMAR PEDIDO
       ======================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                !event.target.closest(
                    "#confirmarPedido"
                )
            ) {
                return;
            }

            if (carrito.length === 0) {

                mostrarMensaje(
                    "Agrega productos antes de confirmar."
                );

                return;
            }

            let mensaje =
                "Hola, quiero realizar el siguiente pedido:\n\n";

            carrito.forEach(producto => {

                mensaje +=
                    `• ${producto.nombre} x${producto.cantidad} - S/ ${(producto.precio * producto.cantidad).toFixed(2)}\n`;
            });

            mensaje +=
                `\nTotal: S/ ${obtenerTotal().toFixed(2)}`;

            const mensajeCodificado =
                encodeURIComponent(mensaje);

            /*
             * NÚMEROS DE DELIVERY
             *
             * 934 359 531
             * 981 264 343
             */

            const numero =
                "51934359531";

            const url =
                `https://wa.me/${numero}?text=${mensajeCodificado}`;

            window.open(
                url,
                "_blank"
            );
        }
    );


    /* ========================================================
       18. MENSAJE TEMPORAL
       ======================================================== */

    function mostrarMensaje(texto) {

        const anterior =
            document.querySelector(
                ".mensaje-montero"
            );

        if (anterior) {
            anterior.remove();
        }

        const mensaje =
            document.createElement("div");

        mensaje.className =
            "mensaje-montero";

        mensaje.textContent =
            texto;

        document.body.appendChild(
            mensaje
        );

        requestAnimationFrame(() => {

            mensaje.classList.add(
                "mostrar"
            );
        });

        setTimeout(() => {

            mensaje.classList.remove(
                "mostrar"
            );

            setTimeout(() => {

                if (mensaje) {
                    mensaje.remove();
                }

            }, 300);

        }, 2200);
    }


    /* ========================================================
       19. ESCAPE
       ======================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }

            cerrarCarrito();
            cerrarVistaCategoria();
        }
    );


    /* ========================================================
       20. CONTADOR INICIAL
       ======================================================== */

    actualizarContador();


    /* ========================================================
       21. MENSAJE DE CARGA
       ======================================================== */

    console.log(
        "Cevichería Montero cargada correctamente."
    );

});