function scrollToForm() {
    document.getElementById("formulario").scrollIntoView();
}

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
        respuesta = "Depende del material y complejidad.";
    } else if(texto.includes("material")) {
        respuesta = "Trabajamos con plástico, metal, silicona y más.";
    } else {
        respuesta = "Un asesor te ayudará pronto.";
    }

    document.getElementById("respuesta").innerText = respuesta;
}

/* Animaciones al hacer scroll */
window.addEventListener("scroll", () => {
    let elementos = document.querySelectorAll(".fade");
    elementos.forEach(el => {
        let top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});
