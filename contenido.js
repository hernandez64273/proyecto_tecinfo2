document.getElementById('btnEscanear').addEventListener('click', function () {
    const nombre = document.getElementById('inputNombre').value.trim();
    const resultado = document.getElementById('resultado');
    const display = document.getElementById('carbonoDisplay');

    if (!nombre) {
        alert("Por favor ingresa un nombre para escanear.");
        return;
    }

    // Simulación de cálculo aleatorio de huella de carbono (en kg CO2e)
    const huella = (Math.random() * 20).toFixed(2);

    // Generar color dependiendo de huella
    let color;
    if (huella < 5) {
        color = "#b9fbc0"; // verde muy claro
    } else if (huella < 10) {
        color = "#a3f7bf";
    } else if (huella < 15) {
        color = "#fdfd96"; // amarillo pastel
    } else {
        color = "#ffb3b3"; // rojo pastel
    }

    resultado.classList.remove("oculto");
    display.innerHTML = `
        <strong>${nombre}</strong> tiene una huella de carbono de
        <strong style="color: ${color}; font-size: 1.5em;">${huella} kg CO₂e</strong>
    `;
});
