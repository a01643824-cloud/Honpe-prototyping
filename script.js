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
            mensajeForm.innerText = "No se pudo conectar con el servidor.";
        }
    });
}

function estado() {
    document.getElementById("estado").innerText =
        "Estado de ejemplo: solicitud recibida, en análisis técnico y preparación de propuesta.";
}

function responder() {
    let texto = document.getElementById("chat").value.toLowerCase().trim();
    let respuesta = "";

    if (texto.includes("precio") || texto.includes("costo")) {
        respuesta = "El costo depende del material, tamaño, complejidad y cantidad solicitada.";
    } else if (texto.includes("material")) {
        respuesta = "Honpe puede trabajar con distintos materiales según el proyecto y el proceso requerido.";
    } else if (texto.includes("tiempo") || texto.includes("entrega")) {
        respuesta = "El tiempo de entrega depende del tipo de pieza, proceso y nivel de detalle.";
    } else if (texto.includes("proceso")) {
        respuesta = "El proceso puede incluir análisis de requerimientos, diseño, prototipado, validación y fabricación.";
    } else if (texto.includes("hola")) {
        respuesta = "Hola, soy el asistente virtual de demostración para Honpe Prototyping.";
    } else {
        respuesta = "Puedo ayudarte con costos, materiales, tiempos, proceso o contacto.";
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
