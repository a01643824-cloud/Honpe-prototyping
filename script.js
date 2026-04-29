const form = document.getElementById("cotizacionForm");
const mensajeForm = document.getElementById("mensajeForm");
const respuesta = document.getElementById("respuesta");
const chatInput = document.getElementById("chat");
const elementosFade = document.querySelectorAll(".fade");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const contactoTecnicoForm = document.getElementById("contactoTecnicoForm");
const mensajeContactoTecnico = document.getElementById("mensajeContactoTecnico");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const idea = document.getElementById("idea").value.trim();
        const uso = document.getElementById("uso").value.trim();

        if (!nombre || !correo || !idea || !uso) {
            mensajeForm.innerText = "Por favor completa los campos obligatorios.";
            return;
        }

        mensajeForm.innerText =
            "Hemos recibido tu solicitud con éxito. Tiene un costo de 3500 pesos y dura 3 días su fabricación.";
        form.reset();
    });
}

if (contactoTecnicoForm) {
    contactoTecnicoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const correoTecnico = document.getElementById("correoTecnico").value.trim();
        const dudaTecnica = document.getElementById("dudaTecnica").value.trim();

        if (!correoTecnico || !dudaTecnica) {
            mensajeContactoTecnico.innerText = "Por favor completa tu correo y escribe tu duda.";
            return;
        }

        mensajeContactoTecnico.innerText =
            "Gracias. Tu mensaje fue enviado correctamente. Un técnico se pondrá en contacto contigo pronto.";
        contactoTecnicoForm.reset();
    });
}

function preguntaRapida(texto) {
    chatInput.value = texto;
    responder();
}

function responder() {
    const texto = chatInput.value.toLowerCase().trim();
    let mensaje = "";

    if (texto.includes("material")) {
        mensaje = "No te preocupes si no sabes el material exacto. Podemos orientarte según el uso del producto, su resistencia y el resultado que buscas.";
    } else if (texto.includes("cotizar") || texto.includes("cotización") || texto.includes("precio") || texto.includes("costo")) {
        mensaje = "Para cotizar necesitamos entender qué quieres hacer, para qué lo necesitas, el tamaño aproximado, material estimado y cantidad.";
    } else if (texto.includes("tiempo") || texto.includes("entrega")) {
        mensaje = "El tiempo depende del tipo de pieza, complejidad, validación del diseño y proceso de fabricación.";
    } else if (texto.includes("modelo") || texto.includes("3d") || texto.includes("ver cómo")) {
        mensaje = "La visualización 3D ayuda a entender cómo se verá tu producto antes de fabricarlo y facilita tomar decisiones con más claridad.";
    } else if (texto.includes("no sé") || texto.includes("confundido") || texto.includes("idea")) {
        mensaje = "Está bien no tener todo definido. Puedes empezar explicando qué quieres crear, para qué servirá y si tienes alguna referencia visual.";
    } else if (texto.includes("hola")) {
        mensaje = "Hola. Soy tu asistente virtual. Puedo ayudarte a entender qué necesitas para comenzar tu prototipo.";
    } else {
        mensaje = "Puedo ayudarte con cotización, materiales, tiempos, visualización 3D y seguimiento del proyecto.";
    }

    respuesta.innerText = mensaje;
}

function estado() {
    document.getElementById("estado").innerText =
        "Actualización: ya se revisó la información inicial del proyecto y el siguiente paso estimado es la simulación conceptual del prototipo.";
}

function mostrarModelo() {
    document.getElementById("modeloMensaje").innerText =
        "Vista previa cargada: esta simulación permite validar forma general, escala estimada y siguientes ajustes del proyecto.";
}

function mostrarElementos() {
    elementosFade.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}

if (chatInput) {
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            responder();
        }
    });
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);
