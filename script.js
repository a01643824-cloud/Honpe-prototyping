const form = document.getElementById("cotizacionForm");
const mensajeForm = document.getElementById("mensajeForm");

if (form) {
    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const data = {
            nombre: document.getElementById("nombre").value,
            correo: document.getElementById("correo").value,
            idea: document.getElementById("idea").value,
            uso: document.getElementById("uso").value,
            tamano: document.getElementById("tamano").value,
            material: document.getElementById("material").value,
            cantidad: document.getElementById("cantidad").value,
            detalles: document.getElementById("detalles").value
        };

        try {
            const respuesta = await fetch("http://localhost:3000/cotizacion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const resultado = await respuesta.json();

            if (respuesta.ok) {
                mensajeForm.innerText = resultado.mensaje;
                form.reset();
            } else {
                mensajeForm.innerText = "Ocurrió un error al enviar la solicitud.";
            }
        } catch (error) {
            mensajeForm.innerText = "Solicitud enviada en modo demostración.";
            form.reset();
        }
    });
}

function responder() {
    let texto = document.getElementById("chat").value.toLowerCase().trim();
    let respuesta = "";

    if (texto.includes("precio") || texto.includes("costo") || texto.includes("cotizacion")) {
        respuesta = "La cotización depende del tipo de pieza, material, tamaño, cantidad y complejidad del proyecto.";
    } else if (texto.includes("material")) {
        respuesta = "Trabajamos según los requerimientos del proyecto y las especificaciones necesarias para cada pieza.";
    } else if (texto.includes("tiempo") || texto.includes("entrega")) {
        respuesta = "El tiempo de entrega varía dependiendo del proceso, nivel de detalle y cantidad solicitada.";
    } else if (texto.includes("proceso")) {
        respuesta = "Nuestro proceso contempla análisis del requerimiento, desarrollo de propuesta, fabricación y seguimiento.";
    } else if (texto.includes("hola")) {
        respuesta = "Hola, bienvenido a Honpe Prototyping. ¿En qué podemos ayudarte?";
    } else {
        respuesta = "Podemos ayudarte con cotizaciones, materiales, tiempos de entrega y desarrollo de proyectos.";
    }

    document.getElementById("respuesta").innerText = respuesta;
}

const elementosFade = document.querySelectorAll(".fade");

function mostrarElementos() {
    elementosFade.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);
