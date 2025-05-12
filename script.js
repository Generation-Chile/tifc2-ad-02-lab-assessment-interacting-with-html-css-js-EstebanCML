// Cambiar el texto del primer encabezado a "Adiós"
document.getElementById("rojo").textContent = "Adiós";

// Cambiar el color de fuente de un encabezado a naranja
const encabezadoNaranja = document.querySelector("h1");
encabezadoNaranja.style.color = "orange";

// Agregar funcionalidad para cambiar el color al hacer clic
const encabezadoClickeable = document.getElementById("clickeable");
encabezadoClickeable.addEventListener("click", () => {
    encabezadoClickeable.style.color = "brown";
});