function scrollToForm() {
    document.getElementById("formulario").scrollIntoView();
}

function verEstado() {
    document.getElementById("estado").innerText = "Tu proyecto está en diseño 3D";
}

function responder() {
    let input = document.getElementById("chatInput").value;
    let respuesta = "";

    if(input.includes("precio")) {
        respuesta = "El precio depende del material y diseño.";
    } else if(input.includes("material")) {
        respuesta = "Trabajamos con plástico, metal, silicona y más.";
    } else {
        respuesta = "Un asesor te ayudará pronto.";
    }

    document.getElementById("chatRespuesta").innerText = respuesta;
}
