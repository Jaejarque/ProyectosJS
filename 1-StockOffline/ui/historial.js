const btn_historial = document.querySelector("#btn_historial");
const cont_historial = document.querySelector(".cont_historial");
const historial = document.querySelector(".historial");
const btn_close = document.querySelector(".btn_closed_historial");

btn_historial.addEventListener("click", () => {
    cont_historial.style.display = "block"
})
cont_historial.addEventListener("click", () => {
    close_historial();
})
historial.addEventListener("click", (e) => {
    e.stopPropagation();
})
btn_close.addEventListener("click", () => {
    close_historial();
})

function close_historial(){
    cont_historial.style.display = "none"
}