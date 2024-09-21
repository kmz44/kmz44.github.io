
function mostrarRespuesta(num) {
    const respuestas = [
        "HTML es el lenguaje que se utiliza para estructurar el contenido de la web.",
        // Agregar más respuestas aquí si es necesario
    ];
    document.getElementById(`respuesta-${num}`).innerText = respuestas[num - 1];
}

function verResultado(num) {
    const codigo = document.getElementById(`codigo-ejercicio-${num}`).value;
    const resultado = document.getElementById(`resultado-${num}`);
    const preview = document.getElementById(`preview-${num}`);

    resultado.innerHTML = "";  // Limpiar resultado previo
    preview.srcdoc = codigo;   // Actualizar el iframe

    resultado.innerHTML = "Vista previa actualizada.";
}


