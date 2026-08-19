const capacidadMaxima = 100;
let totalActual = 0;

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const acompanantes = parseInt(
        document.getElementById("acompanantes").value
    );

    const espaciosNecesarios = acompanantes + 1;

    if (totalActual + espaciosNecesarios <= capacidadMaxima) {

        totalActual = totalActual + espaciosNecesarios;

        resultado.className = "exito";
        resultado.style.display = "block";

        resultado.innerHTML = `
            <strong>Registro exitoso.</strong><br>
            Folio generado para: ${nombre}<br>
            Espacios ocupados: ${totalActual}
        `;

        formulario.reset();

    } else {

        resultado.className = "error";
        resultado.style.display = "block";

        resultado.innerHTML = `
            <strong>Lo sentimos, no hay cupo suficiente.</strong>
        `;
    }
});
