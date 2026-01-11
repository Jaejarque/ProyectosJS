const buscador = document.querySelector(".input_search");
const tbody = document.querySelector(".bodytable");

buscador.addEventListener("input", e => {
    let busqueda = e.target.value.toLowerCase();
    const filas = tbody.querySelectorAll("tr");

    filas.forEach(fila => {
        const texto = fila.id.toLowerCase();
        if (busqueda === "" || texto.includes(busqueda)) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
});