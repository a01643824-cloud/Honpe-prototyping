function enviarForm(e) {
    e.preventDefault();
    alert("Solicitud enviada correctamente");
}

function estado() {
    document.getElementById("estado").innerText = "Tu proyecto está en diseño 3D";
}

function responder() {
    let texto = document.getElementById("chat").value.toLowerCase();
    let respuesta = "";

    if(texto.includes("precio")) {
        respuesta = "El precio depende del diseño, materiales y complejidad.";
    } 
    else if(texto.includes("material")) {
        respuesta = "Trabajamos con plástico, metal, silicona y más.";
    } 
    else if(texto.includes("tiempo")) {
        respuesta = "El desarrollo toma entre 1 y 3 semanas.";
    }
    else if(texto.includes("hola")) {
        respuesta = "¡Hola! 👋 Soy tu asistente virtual.";
    }
    else {
        respuesta = "Puedo ayudarte con precios, materiales o proceso 😊";
    }

    document.getElementById("respuesta").innerText = respuesta;
}

/* Animaciones */
window.addEventListener("scroll", () => {
    let elementos = document.querySelectorAll(".fade");
    elementos.forEach(el => {
        let top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});
